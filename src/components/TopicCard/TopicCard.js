import React from 'react';
import { Link } from 'react-router-dom';

const TopicCard = ({quiz}) => {
    const {name, logo, id} = quiz;
    return (
        <div className='border rounded-md p-4'>
            <img className='w-[100%] h-[250px]' src={logo} alt="" />
            <p><strong>{name}</strong></p>
            <Link to={`/${id}`}>
            <button className='btn btn-primary w-[100%]'>Start Quiz</button>
            </Link>
        </div>
    );
};

export default TopicCard;