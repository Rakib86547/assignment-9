import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topic = () => {
    const quizs = useLoaderData().data
    console.log(quizs)
    return (
        <div className='mt-8'>
            <h1 className='text-3xl font-semibold'>Welcome to Quiz Maker Session</h1>
            <p className='mt-2'>
                You have four Options for quiz. You can Chose any quiz to <br /> the below quiz option. if your quiz answer is right you got prise. 
            </p>
        </div>
    );
};

export default Topic;