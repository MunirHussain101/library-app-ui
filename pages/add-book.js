import AppLayout from '@/components/app-layout/AppLayout';
import TextInput from '@/components/text-input/TextInput';
import { Rating } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const AddNewBook = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    rating: 1,
    images: [],
    date: '', // book publish date
    collection: '',
  });
  const [imgsSrc, setImgsSrc] = useState([]);
  const onChange = (e) => {
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImgsSrc((imgs) => [...imgs, reader.result]);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    // Here an api call will be made that will redirect the user authenticate and sign in the user.
    router.push('/');
  };

  const updateFormData = (fieldName, value) => {
    console.log(
      '🚀 ~ file: add-book.js:25 ~ updateFormData ~ fieldName, value:',
      { fieldName, value }
    );
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  useEffect(() => {
    setFormData({ ...formData, images: imgsSrc });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgsSrc]);

  return (
    <form
      onSubmit={signIn}
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="w-[400px] h-auto bg-gray-600 rounded-2xl py-6 px-4 flex flex-col items-center">
        <span className="text-center text-5xl font-bold text-gray-200 mb-5">
          Add New book
        </span>
        <span className="text-center text-sm text-gray-300"></span>
        <div className="w-full flex flex-col items-center mt-4">
          <TextInput
           id="title"
            required={true}
            type="text"
            fieldName={'title'}
            placeholderText={'Title'}
            inputValue={formData.title}
            setInputValue={updateFormData}
            className={
              'focus:outline-0 p-3 border-2 border-gray-400 focus-within:border-gray-100 transition duration-[175ms] text-gray-200 rounded-lg bg-inherit w-full h-[60px] mb-3'
            }
          />
          <TextInput
          id="auth"
            required={true}
            type="text"
            fieldName={'author'}
            placeholderText={'Author'}
            inputValue={formData.author}
            setInputValue={updateFormData}
            className={
              'focus:outline-0 p-3 border-2 border-gray-400 focus-within:border-gray-100 transition duration-[175ms] text-gray-200 rounded-lg bg-inherit w-full h-[60px] mb-3'
            }
          />
          <div className="flex justify-start items-start w-full mb-3" >
            <Rating id="rating"
              value={formData.rating}
              onChange={(e) => {
                setFormData({ ...formData, rating: +e.target.value });
              }}
            />
          </div>
          <TextInput
          id='date'
            required={true}
            type="date"
            fieldName={'date'}
            placeholderText={'Publish Date'}
            inputValue={formData.date}
            setInputValue={updateFormData}
            className={
              'focus:outline-0 p-3 border-2 border-gray-400 focus-within:border-gray-100 transition duration-[175ms] text-gray-200 rounded-lg bg-inherit w-full h-[60px] mb-3'
            }
          />
          <TextInput
          id='collection'
            required={true}
            type="text"
            fieldName={'collection'}
            placeholderText={'Collection'}
            inputValue={formData.collection}
            setInputValue={updateFormData}
            className={
              'focus:outline-0 p-3 border-2 border-gray-400 focus-within:border-gray-100 transition duration-[175ms] text-gray-200 rounded-lg bg-inherit w-full h-[60px] mb-3'
            }
          />
          <div className="flex justify-start w-full">
            <input
            id="file"
              onChange={onChange}
              type="file"
              name="file"
              multiple
              required={true}
            />
          </div>
          <button data-cy="submit"
            type="submit"
            className="bg-gray-800 p-3 rounded-lg hover:bg-gray-900 transition duration-[175ms] flex justify-center items-center w-full mt-4"
          >
            <span className="text-sm font-bold text-gray-200">{'Add'}</span>
          </button>
        </div>
      </div>
    </form>
  );
};

AddNewBook.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default AddNewBook;
