import { gql, QueryHookOptions, useQuery } from '@apollo/client';

const TransactionsQuery = gql`
  query GetTransactions($userId: ID!) {
    transactions: transactions(input: { userId: $userId }) {
      id
      type
      iconURL
      localizableTitle
      categoryIconUrl
      deleted
      status
      time
      categoryID
      transactionAmount {
        amount
        currency
      }
      billingAmount {
        amount
        currency
      }
    }
  }
`;

enum TransactionType {
  Account = 'account',
  Card = 'card',
}

enum TransactionStatus {
  Future = 'future',
  Financial = 'financial',
  Authorization = 'authorization',
}

enum TransactionCategory {
  Other = 'other',
  Groceries = 'groceries',
  GoingOut = 'goingOut',
}

export interface Transaction {
  id: string;
  type: TransactionType;
  iconURL: string;
  localizableTitle: string;
  categoryIconUrl?: string;
  deleted?: string;
  status: TransactionStatus;
  time: string;
  categoryID?: TransactionCategory;
  transactionAmount?: Amount;
  billingAmount: Amount;
}

export interface TransactionsQueryData {
  transactions: Array<Transaction>;
}

export interface TransactionsQueryVariables {
  userId: string;
}

interface Amount {
  amount: number;
  currency: string;
}

export const useTransactionsQuery = (
  options: QueryHookOptions<TransactionsQueryData, TransactionsQueryVariables>
) =>
  useQuery<TransactionsQueryData, TransactionsQueryVariables>(
    TransactionsQuery,
    options
  );
