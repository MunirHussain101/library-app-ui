import Image from 'next/image';
import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="flex flex-col justify-start items-center cursor-pointer">
      <div>
        <Image src={book.image} alt={'Book Image'} width={120} height={120} />
      </div>
      <div className="capitalize text-gray-800 font-semibold">{book.title}</div>
      <div className="capitalize text-gray-600">{book.author}</div>
    </div>
  );
};

export default BookCard;
