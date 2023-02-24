import { FlowCenter } from "./FlowCenter";

export interface Flow {
  id: number;
  name: string;
  active: boolean;
  centers: FlowCenter[]
}
