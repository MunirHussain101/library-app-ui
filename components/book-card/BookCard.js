import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const BookCard = ({ book }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/books/${book.id}`)}
      className="flex flex-col justify-start items-center cursor-pointer"
    >
      <div>
        <Image
          src={book.image}
          alt={'Book Image'}
          width={120}
          height={120}
          className={'rounded-md'}
        />
      </div>
      <div className="capitalize text-gray-800 font-semibold">{book.title}</div>
      <div className="capitalize text-gray-600">{book.author}</div>
    </div>
  );
};

export default BookCard;
