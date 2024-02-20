import { Link } from "react-router-dom";
import DormCard from "../../../components/DormCard";
import useDorm from "../../../hooks/use-dorm";

export default function VacantDorm() {
  const { vacantDorms, calculateMinPrice, calculateMaxPrice } = useDorm();
  console.log(vacantDorms);

  return (
    <>
      {/* //* TIPs sorting newest by flex-...-reverse */}
      <div className="flex flex-col-reverse items-center py-10">
        {vacantDorms.map((dorm, index) => (
          <DormCard
            key={index}
            dorm={dorm}
            max={calculateMaxPrice}
            min={calculateMinPrice}
          />
        ))}
      </div>
    </>
  );
}

//  <DormCard
//   dormName={dorm.dormName}
//   dormImages={dorm.dormImages}
//   location={dorm.location}
//   distance={dorm.distance}
//   totalVacantRoom={dorm.totalVacantRoom}
//   price={dorm.price}
//   createdAt={dorm.createdAt}
// />
