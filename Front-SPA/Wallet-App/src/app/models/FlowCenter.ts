import { Expense } from "./Expense";

export interface FlowCenter {
  id: number;
  name: string
  percentOfCenterFlow: number;
  totalAmount: number;
  expenses: Expense[]
}
