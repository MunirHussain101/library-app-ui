import AuthLayout from '@/components/auth-layout/AuthLayout';
import TextInput from '@/components/text-input/TextInput';
import { useRouter } from 'next/router';
import { useState } from 'react';

function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const signUp = async (e) => {
    e.preventDefault();
    // Here an api call will be made that will redirect the user authenticate and sign up the user.
    router.push('/');
  };

  const updateFormData = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  return (
    <form
      onSubmit={signUp}
      className="w-full h-full flex justify-center items-center"
    >
      <div className="w-[400px] h-auto bg-gray-600 rounded-2xl py-6 px-4 flex flex-col items-center">
        <span className="text-center text-5xl font-bold text-gray-200 mb-5">
          Sign Up
        </span>
        <span className="text-center text-sm text-gray-300">
          Sign in using your email, password and name
        </span>
        <div className="w-full flex flex-col items-center mt-4">
          <TextInput
            required={true}
            type="name"
            fieldName={'name'}
            placeholderText={'Name'}
            inputValue={formData.name}
            setInputValue={updateFormData}
            className={
              'focus:outline-0 p-3 border-2 border-gray-400 focus-within:border-gray-100 transition duration-[175ms] text-gray-200 rounded-lg bg-inherit w-full h-[60px] mb-3'
            }
          />
          <TextInput
            required={true}
            type="email"
            fieldName={'email'}
            placeholderText={'Email'}
            inputValue={formData.email}
            setInputValue={updateFormData}
            className={
              'focus:outline-0 p-3 border-2 border-gray-400 focus-within:border-gray-100 transition duration-[175ms] text-gray-200 rounded-lg bg-inherit w-full h-[60px]'
            }
          />
          <TextInput
            required={true}
            type="password"
            fieldName={'password'}
            placeholderText={'Password'}
            inputValue={formData.password}
            setInputValue={updateFormData}
            className={
              'focus:outline-0 p-3 border-2 border-gray-400 focus-within:border-gray-100 transition duration-[175ms] text-gray-200 rounded-lg bg-inherit w-full h-[60px] mt-3'
            }
          />
          <button
            type="submit"
            className="bg-gray-800 p-3 rounded-lg hover:bg-gray-900 transition duration-[175ms] flex justify-center items-center w-full mt-4"
          >
            <span className="text-sm font-bold text-gray-200">{'Sign In'}</span>
          </button>
          <span className="text-gray-200 text-sm text-center mt-2">
            {'Already have an account? '}
            <span
              onClick={() => router.push('/auth/signin')}
              className="cursor-pointer text-gray-200 hover:text-gray-300 transition duration-[175ms] font-bold"
            >
              Sign In
            </span>
          </span>
        </div>
      </div>
    </form>
  );
}

SignUp.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default SignUp;
