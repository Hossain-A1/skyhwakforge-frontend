"use client";
import useFetch from "@/hooks/useFetch";
import { droneType } from "@/types/drone.type";
import SectionTitle from "./shared/SectionTitle";
import Loading from "./ui/Loading";
import Error from "./ui/Error";
import DroneItem from "@/app/drones-page/_components/DroneItem";

interface DronesProps {
  native?: boolean;
}
const Drones: React.FC<DronesProps> = ({ native }) => {
  const { data: drones, isLoading, error } = useFetch("/api/drones");

  return (
    <section className='container sp mt-20 space-y-5'>
      <SectionTitle
        title='Drones'
        headline='Explore the Skies with Our Cutting-Edge Drone Collection - Elevate Your Aerial Adventures!'
      />

      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  '>
        {!native && drones
          ? drones.slice(0, 3).map((droneObj: droneType) => (
              <div
                key={droneObj._id}
                className=' flex flex-wrap items-center justify-center shadow-sm shadow-light rounded-xl hover:scale-105 eq overflow-hidden'
              >
                <DroneItem droneObj={droneObj} />
              </div>
            ))
          : drones &&
            drones.map((droneObj: droneType) => (
              <div
                key={droneObj._id}
                className=' flex flex-wrap items-center justify-center shadow-sm shadow-light rounded-xl hover:scale-105 eq overflow-hidden'
              >
                <DroneItem droneObj={droneObj} />
              </div>
            ))}
      </div>
    </section>
  );
};

export default Drones;
