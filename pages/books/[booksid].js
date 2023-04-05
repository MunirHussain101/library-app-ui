import AppLayout from '@/components/app-layout/AppLayout';
import Carousel from '@/components/carousel/Carousel';
import Image from 'next/image';
import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getBooksByIdAction, addBookToCollection, updateBookCollection } from '../../store/book/bookActions'
// import { updateBookAction } from '../../store/book/bookActionsType'
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import ButtonGroup from '@/components/group-button/GroupButton'; 

const BookDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const { booksid: bookId } = router.query
  const { root, bookReducer, authReducer: auth  } = useSelector((state) => state);
  const [bookDetails, setBookDetails] = useState(null)
  
  useEffect(() => {
    getSelectedBookDetails()
  }, [])

  useEffect(() => {
    if (bookReducer.book) {
      setBookDetails(bookReducer.book)
    }
  }, [bookReducer.book])

  const getSelectedBookDetails = () => {
    if (!bookId) {
      return
    }
    const userId = auth.user.id || 0
    dispatch(getBooksByIdAction(parseInt(bookId), userId))
  }

  const menuOptionChanged = (selectedOption) => {
    const updBook = {...bookDetails, status: selectedOption }
    const params = prepareParams(selectedOption)

    if (!bookDetails.collectionId) {
      dispatch(addBookToCollection(params, updBook))
      return
    } 

    dispatch(updateBookCollection(params, updBook))
  }

  const prepareParams = (selectedOption) => {
    return bookDetails.collectionId ? 
    {
      id: bookDetails.collectionId,
      status: selectedOption
    } : {
      book_id: bookDetails.id,
      user_id: auth.user.id,
      status: selectedOption
    }
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start px-14 gap-x-32">
      { bookDetails && !root.isLoading &&
        <>
          <div className="flex flex-col justify-start items-center">
            { bookDetails && bookDetails?.images.length ? 
              <Carousel images={bookDetails.images} /> :
              <Image
                src='/book-thumbnail.png'
                alt={'Book Image'}
                width={250}
                height={300}
                className={'rounded-md'}
              />
            }
            
            { !auth.isLoggedIn ? 
              <button className="bg-gray-800 p-3 rounded-lg hover:bg-gray-900 transition duration-[175ms] flex justify-center items-center w-[240px] mt-4">
                <span className="capitalize text-sm font-bold text-gray-200">
                  {bookDetails?.status || 'want to read'}
                </span>
              </button> : 
              <div className="mt-5 mb-5">
                <ButtonGroup
                  selectedOption={bookReducer?.book?.status || 'want to read'}
                  updatedValue={(value) => menuOptionChanged(value)}
                ></ButtonGroup>
              </div>
            }
            
            {/* <div className="mt-2">
              <span>Price: ${bookDetails.price || ''}</span>
            </div> */}
          </div>
          <div className="flex flex-col justify-start items-start mb-5">
            <span className="capitalize text-[50px] font-bold">
              {bookDetails?.title || ''}
            </span>
            <span className="capitalize text-[20px]">
              {bookDetails?.author || ''}
            </span>
            <Rating name="simple-controlled" value={4} disabled={true} />
            <span className="max-w-[750px] mt-2">{bookDetails?.description || ''}</span>
          </div>
        </>
      }

      { root.isLoading && 
        <div className="w-full flex justify-center items-center h-40">
          <CircularProgress color="primary"/> 
        </div>
      }
      
    </div>
  );
};

BookDetails.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default BookDetails;
