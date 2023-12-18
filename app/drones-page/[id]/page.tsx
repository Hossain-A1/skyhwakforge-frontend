"use client";
import Button from "@/components/ui/Button";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/navigation";
import DroneitemSection from "./_component/DroneItemSection";

const DroneDetailsPage = ({ params }: { params: { id: string } }) => {
  const {
    data: droneItem,
    isLoading,
    error,
  } = useFetch(`/api/drones/${params.id}`);
  const router = useRouter();
  return (
    <main className='container sp mt-20'>
      {isLoading && (
        <div className='min-h-screen flex items-center justify-center'>
          <Loading isLoading={isLoading} />
        </div>
      )}
      {error && (
        <div className='min-h-screen flex flex-col items-center justify-center gap-2.5'>
          <Error error={error.message} />
          <Button onClick={() => router.back()}>Go Back</Button>
        </div>
      )}
      {droneItem && <DroneitemSection item={droneItem} />}
    </main>
  );
};

export default DroneDetailsPage;
