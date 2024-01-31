"use client"
import Loading from '@/components/ui/Loading'
import { data } from '@/public/data/GalleriesData'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const GalleryInfo = ({ params }: { params: { id: string } }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [galleryData, setGalleryData] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Find the gallery data for the specified id
    const gallery = data.find((item) => item._id === params.id);

    if (gallery) {
      setGalleryData(gallery);
      setIsLoading(false);
    } else {
      // Handle case where gallery data is not found
      router.push('/404'); 
    }
  }, [params.id, router]);

  return (
    <main className='container sp mt-20 min-h-screen'>
      {isLoading && (
        <div className='min-h-screen flex items-center justify-center'>
          <Loading isLoading={isLoading} />
        </div>
      )}

      {!isLoading && galleryData && (
        <div key={galleryData._id} className='gallery-image w-full h-full relative'>
          <Image
            src={galleryData.cover} // Use the actual image URL from the gallery data
            alt='Our gallery images'
            height={1280}
            width={1920}
            priority
            className='h-full w-full object-cover '
          />

          <div className='absolute top-4 left-4'>
            <h2>{galleryData.name}</h2>
          </div>
        </div>
      )}
    </main>
  );
}

export default GalleryInfo;
