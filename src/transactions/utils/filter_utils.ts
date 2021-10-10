import { Transaction } from '../graphql/get_transactions';

export const createTimeCompare = (sortAsc: boolean) => (x: Transaction, y: Transaction): number => {
  const toReturn = ascCompare(x, y);
  return sortAsc ? toReturn : toReturn * -1;
}

const ascCompare = (x: Transaction, y: Transaction): number => {
  if (x.time === y.time) {
    return 0;
  } else {
    return x.time > y.time ? 1 : -1;
  }
}