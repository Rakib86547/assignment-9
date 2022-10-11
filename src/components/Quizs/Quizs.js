import React from 'react';
import { useLoaderData } from 'react-router-dom';

import QuizQuestion from '../QuizQuestion/QuizQuestion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quizs = () => {
    const quizData = useLoaderData().data;
    const { name, questions } = quizData;
    const handleIcon = (quizData) => {
        // console.log(quizData)
        // alert(quizData.correctAnswer)
        toast.success(quizData.correctAnswer);
    }
    return (
        <div>
            <h1 className='text-3xl font-bold py-5 text-rose-600'>Quiz of {name}</h1>
            <div className='md:w-[40%] sm:w-[80%] w-[90%] m-auto'>
                {
                    questions.map(qus => <QuizQuestion
                        key={qus.id}
                        qus={qus}
                        handleIcon={handleIcon}
                    ></QuizQuestion>)
                }
            </div>
            <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />
        </div>

    );
};

export default Quizs;