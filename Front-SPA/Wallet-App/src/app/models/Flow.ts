import { FlowCenter } from "./FlowCenter";

export interface Flow {
  id: number;
  name: string;
  kind: number;
  description: string;
  active: boolean;
  centers: FlowCenter[]
}
