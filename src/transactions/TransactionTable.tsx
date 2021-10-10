import { TransactionRow } from './TransactionRow';
import * as React from 'react';
import { useDeleteAuthorizationMutation } from './graphql/delete_authorization';
import { Transaction } from './graphql/get_transactions';
import styled from 'styled-components';
import { useState } from 'react';
import { createTimeCompare } from './utils/filter_utils';
import { FilterOptions, FilterOptionType } from '../filters/FilterOptions';
import { availableStatuses, availableTitles } from '../filters/filter-utils';

interface TransactionTableProps {
  transactions: Transaction[];
}

export const TransactionTable = ({transactions}: TransactionTableProps) => {
  const [deleteTransaction] = useDeleteAuthorizationMutation();
  const [sortASC, setTimeSort] = useState(true);
  const [titleFilter, setTitleFilter] = useState(availableTitles(transactions));
  const [statusFilter, setStatusFilter] = useState(availableStatuses(transactions));

  const deleteCallback = async (id: string) => {
    await deleteTransaction({
      variables: {
        transactionId: id,
      },
    });
  };

  const toggleTimeToggle = () => {
    setTimeSort(!sortASC);
  };

  const getTransactions = () => {
    return transactions
      .filter(x => x.deleted === null)
      .filter(x => getCheckedValues(titleFilter).includes(x.localizableTitle))
      .filter(x => getCheckedValues(statusFilter).includes(x.status))
      .sort(createTimeCompare(sortASC))
  }

  const getCheckedValues = (options: FilterOptionType[]) => {
    return options.map(x => {
      if(x.checked) return x.value;
    }).filter(x => typeof x === 'string');
  }

  return (
    <>
    <StyledDiv>
      <FilterOptions
        title={"Title"}
        options={titleFilter}
        setOptions={setTitleFilter}
      />
      <FilterOptions
        title={"Status"}
        options={statusFilter}
        setOptions={setStatusFilter}
      />
    </StyledDiv>
    <StyledTable>
      <StyledTableHeader>
        <tr>
          <th>Icon</th>
          <th>Type</th>
          <th>Title</th>
          <th>Amount</th>
          <StyledSortTh onClick={toggleTimeToggle}>Time { sortASC ? 'ASC' : 'DESC' }</StyledSortTh>
          <th>Status</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
      </StyledTableHeader>
      <tbody>
      {getTransactions().filter(x => x.deleted === null).map(transaction => (
        <TransactionRow key={transaction.id} {...{ transaction, deleteCallback }} />
      ))}
      </tbody>
    </StyledTable>
    </>
  );
};

const StyledTable = styled.table`
  width: 100%;
  position: relative;

  td,
  th {
    border: none;
    padding: 8px;
  }

  th {
    border: none;
  }
`;

const StyledTableHeader = styled.thead`
  color: ${({ theme }) => theme.secondaryText};

  th {
    text-align: left;
  }
`;

const StyledSortTh = styled.th`
  cursor: pointer;
`;

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
`;
