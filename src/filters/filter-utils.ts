import { FilterOptionType } from './FilterOptions';
import { Transaction } from '../transactions/graphql/get_transactions';

export const availableTitles = (transactions: Transaction[]) => {
  const titles = new Set(transactions.map(x => {
    return x.localizableTitle
  }));
  return setToArray(titles);
};

export const availableStatuses = (transactions: Transaction[]) => {
  const statuses = new Set(transactions.map(x => {
    return x.status
  }));
  return setToArray(statuses);
};

const setToArray = (input: Set<string>): FilterOptionType[] => {
  let map: FilterOptionType[] = [];
  input.forEach(x => {
    map.push({
      checked: true,
      value: x,
    })
  });
  return map;
}
