/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeExecutableSchema } from '@graphql-tools/schema';
import { SchemaLink } from '@apollo/client/link/schema';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import TestData from './data/transactions_test_dev.json';

const typeDefs = `
  enum TransactionType {
    account
    card
  }

  enum TransactionStatus {
    future
    financial
    authorization
  }
  
  enum TransactionCategory {
    other
    groceries
    goingOut
  }

  type Amount {
    amount: Float!
    currency: String!
  }

  type Transaction {
    id: ID!
    type: TransactionType!
    iconURL: String!
    localizableTitle: String!
    categoryIconUrl: String!
    deleted: String
    status: TransactionStatus!
    time: String!
    categoryID: TransactionCategory!
    transactionAmount: Amount
    billingAmount: Amount!
  }

  input TransactionsInput {
    userId: ID!
  }

  type Query {
    transactions(input: TransactionsInput): [Transaction!]!
  }

  input DeleteAuthorizationInput {
    transactionId: ID!
  }

  type DeleteAuthorizationPayload {
    error: String
    transaction: Transaction
  }

  type Mutation {
    deleteAuthorization(input: DeleteAuthorizationInput!): DeleteAuthorizationPayload
  }
`;

export const createClient = async () => {
  let transactions = [...TestData.data.transactions];

  const resolvers = {
    Query: {
      transactions: async (
        _root: any,
        _args: any,
        _context: any,
        _info: any
      ) => {
        await delay(50 + Math.random() * 450);

        return transactions;
      },
    },
    Mutation: {
      deleteAuthorization: async (
        _root: any,
        { input: { transactionId } }: any,
        _context: any,
        _info: any
      ) => {
        let updatedTransaction = null;

        transactions = transactions.map(transaction => {
          if (transaction.id === transactionId) {
            updatedTransaction = {
              ...transaction,
              deleted: new Date().toISOString(),
            };

            return updatedTransaction;
          }
          return transaction;
        });

        await delay(50 + Math.random() * 950);

        if (!updatedTransaction) {
          return {
            error: 'Transaction not found',
            transaction: null,
          };
        }

        return {
          error: null,
          transaction: updatedTransaction,
        };
      },
    },
  };

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema, validate: true }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });

  return client;
};

const delay = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};
