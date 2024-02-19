import { useContext } from "react";
import { DormContext } from "../features/dorm/contexts/DormContext";

export default function useDorm() {
  return useContext(DormContext);
}
