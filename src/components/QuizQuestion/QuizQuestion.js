import React from 'react';

const QuizQuestion = ({qus}) => {
    console.log(qus);
    const {question, options} = qus;
    return (
        <div>
           <h1>quiz: {question}</h1>
           <h4>{options[0]}</h4>
           <h4>{options[1]}</h4>
           <h4>{options[2]}</h4>
           <h4>{options[3]}</h4>
        </div>
    );
};

export default QuizQuestion;