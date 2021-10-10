import * as React from 'react';
import styled from 'styled-components';
import { Transaction } from './graphql/get_transactions';

interface TransactionRowProps {
  transaction: Transaction;
  deleteCallback: (id: string) => void;
}

export const TransactionRow = ({ transaction, deleteCallback }: TransactionRowProps) => {

  const handleOnClick = () => {
    deleteCallback(transaction.id);
  }

  return (
    <StyledTransaction>
      <td>
        <img src={transaction.iconURL} />
      </td>
      <td>{transaction.type}</td>
      <td>{transaction.localizableTitle}</td>
      <td>{transaction.billingAmount.amount}</td>
      <td>{transaction.time}</td>
      <td>{transaction.status}</td>
      <td>
        <img src={transaction.categoryIconUrl} />
      </td>
      { transaction.status === 'authorization' &&
        <td>
          <DeleteButton onClick={handleOnClick}> Delete </DeleteButton>
        </td>
      }
    </StyledTransaction>

  );
}

const StyledTransaction = styled.tr`
  :hover {
    background-color: ${({ theme }) => theme.fade3};
    cursor: pointer;
  }

  img {
    height: 30px;
  }
`;

const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.surfaceStroke};
  border-radius: 12px;

  :hover {
    background-color: ${({ theme }) => theme.fade5};
    cursor: pointer;
  } 
`;