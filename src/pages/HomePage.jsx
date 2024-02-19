import DormCard from "../components/DormCard";
import VacantDorm from "../features/dorm/components/VacantDorm";
import DormContextProvider from "../features/dorm/contexts/DormContext";

export default function HomePage() {
  return (
    <div className="grid bg-[#F1F5F9]">
      <DormContextProvider>
        <VacantDorm />
      </DormContextProvider>
    </div>
  );
}
