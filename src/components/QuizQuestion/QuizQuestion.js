import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({ qus, handleIcon }) => {
    const { question, options, correctAnswer } = qus;
  
    return (
        <div className='border rounded-md border-orange-600 my-5'>
            <div className='flex w-[100%] justify-between px-4 items-center'>
                <h1 className='text-3xl font-semibold text-rose-500'>quiz: {question}</h1>
                <div>
                    <EyeIcon onClick={() => handleIcon(qus)} className='w-6 h-6 cursor-pointer'></EyeIcon>

                </div>
            </div>
            <div className='w-[50%] my-4 m-auto text-1xl'>
                <div className='flex py-3'>
                    <input type="radio" name="radio-4" className="radio radio-accent" />
                    <h2  className='ml-3'>{options[0]}</h2>
                </div>

                <div className='flex py-3'>
                    <input type="radio" name="radio-4" className="radio radio-accent" />
                    <h2 className='ml-3 tex-2xl'>{options[1]}</h2>
                </div>

                <div className='flex py-3'>
                    <input type="radio" name="radio-4" className="radio radio-accent" />
                    <h2 className='ml-3 tex-2xl'>{options[2]}</h2>

                </div>

                <div className='flex py-3'>
                    <input type="radio" name="radio-4" className="radio radio-accent" />
                    <h2 className='ml-3 tex-2xl'>{options[3]}</h2>

                </div>
           
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

export default QuizQuestion;