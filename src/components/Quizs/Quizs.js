import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quizs = () => {
    const quizData = useLoaderData().data;
    const {name, questions} = quizData;
    return (
        <div>
            <h1 className='text-3xl font-bold py-5 text-rose-600'>Quiz of {name}</h1>
           <div className='w-[90%] m-auto'>
           {
                questions.map(qus => <QuizQuestion
                key={qus.id}
                qus={qus}
                ></QuizQuestion>)
            }
           </div>
        </div>
        
    );
};

export default Quizs;