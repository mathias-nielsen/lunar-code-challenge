import * as React from 'react';
import styled from 'styled-components';
import { useTransactionsQuery } from './graphql/get_transactions';
import { TransactionTable } from './TransactionTable';

interface TransactionsProps {
  userId: string;
}

export const Transactions = ({ userId }: TransactionsProps) => {
  const { data, loading, error } = useTransactionsQuery({
    variables: {
      userId,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) {
    return <div>An error occured 😭</div>;
  }

  return (
    <>
      { data !== undefined &&
      <StyledTransactions>
        <TransactionTable transactions={data.transactions}></TransactionTable>
      </StyledTransactions>
      }
    </>
  );
};

const StyledTransactions = styled.div`
  overflow: scroll;
`;

