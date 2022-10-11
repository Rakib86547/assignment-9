import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
const QuizQuestion = ({ qus }) => {
    console.log(qus);
    const { question, options } = qus;
    return (
        <div className='border rounded-md border-orange-600 my-5'>
            <div className='flex w-[100%] justify-between px-4 items-center'>
                <h1 className='text-3xl font-semibold text-rose-500'>quiz: {question}</h1>
                <div>
                    <EyeIcon className='w-6 h-6 cursor-pointer'></EyeIcon>
                </div>
            </div>
            <div className='w-[50%] my-4 m-auto text-1xl'>
                <div className='flex'>
                    <input type="checkbox" />
                    <h2 className='ml-3'>{options[0]}</h2>
                </div>

                <div className='flex '>
                    <input type="checkbox" />
                    <h2 className='ml-3 tex-2xl'>{options[1]}</h2>
                </div>

                <div className='flex'>
                    <input type="checkbox" />
                    <h2 className='ml-3 tex-2xl'>{options[2]}</h2>
                </div>

                <div className='flex'>
                    <input type="checkbox" />
                    <h2 className='ml-3 tex-2xl'>{options[3]}</h2>
                </div>
            </div>
        </div>
    );
};

export default QuizQuestion;