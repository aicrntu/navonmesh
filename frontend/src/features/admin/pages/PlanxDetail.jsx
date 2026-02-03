import { useParams } from "react-router-dom";

export default function PlanxDetail() {
  const { id } = useParams();
  return <div>PlanX Detail: {id}</div>;
}
