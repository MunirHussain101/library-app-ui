import AppLayout from '@/components/app-layout/AppLayout';
import Carousel from '@/components/carousel/Carousel';
import { bookDetails } from '@/constants/mockData';
import { Rating } from '@mui/material';
import React from 'react';

const BookDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start px-14 gap-x-32">
      <div className="flex flex-col justify-start items-center">
        <Carousel images={bookDetails.images} />
        <button className="bg-gray-800 p-3 rounded-lg hover:bg-gray-900 transition duration-[175ms] flex justify-center items-center w-[240px] mt-4">
          <span className="text-sm font-bold text-gray-200">
            {'Want to read'}
          </span>
        </button>
        <div className="mt-2">
          <span>Price: ${bookDetails.price}</span>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start mb-5">
        <span className="capitalize text-[50px] font-bold">
          {bookDetails.title}
        </span>
        <Rating name="simple-controlled" value={4} disabled={true} />
        <span className="max-w-[750px] mt-2">{bookDetails.summary}</span>
      </div>
    </div>
  );
};

BookDetails.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default BookDetails;
