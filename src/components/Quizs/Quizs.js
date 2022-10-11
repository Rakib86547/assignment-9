import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizs = () => {
    const quizData = useLoaderData().data;
    console.log(quizData)
    const {name, questions} = quizData;
    return (
        <div>
            <h1>Quiz of {name}</h1>
        </div>
    );
};

export default Quizs;