import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';

const Topic = () => {
    const quizs = useLoaderData().data
    // console.log(quizs)
    return (
        <div className='py-8 border bg-gray-200'>
            <h1 className='text-3xl font-semibold'>Welcome to Quiz Maker Session</h1>
            <p className='mt-2'>
                You have four Options for quiz. You can Chose any quiz to <br /> the below quiz option. if your quiz answer is right you got prise. 
            </p>

            <div className='grid md:grid-cols-2 gap-4 w-[90%] m-auto mt-6'>
                {
                    quizs.map(quiz => <TopicCard
                    key={quiz.id}
                    quiz={quiz}
                    ></TopicCard>)
                }
            </div>
        </div>
    );
};

export default Topic;