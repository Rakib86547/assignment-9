import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quizs = () => {
    const quizData = useLoaderData().data;
    const {name, questions} = quizData;
    return (
        <div>
            <h1>Quiz of {name}</h1>
            {
                questions.map(qus => <QuizQuestion
                key={qus.id}
                qus={qus}
                ></QuizQuestion>)
            }
        </div>
        
    );
};

export default Quizs;