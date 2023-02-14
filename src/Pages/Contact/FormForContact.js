import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {



  return (
    <div className='p-10 my-12'>
      <form action='https://formspree.io/f/mgebojbv' method='POST' className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <input type="text" placeholder="Your Name" className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className='mb-4'>
          <input type="text" placeholder="user@name" name='username' required autoComplete='off' className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className='mb-6'>
          <textarea placeholder="Enter You Message" className="shadow appearance-none border rounded w-64 h-32 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></textarea>
        </div>
        <div className='flex items-center justify-center'>
          <button type='submit' value='submit' className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"> Submit</button>
        </div>
      </form>
    </div>

  );
};

export default Form;