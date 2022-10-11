import React from 'react';

const Blog = () => {
    return (
        <div className='w-[80%] m-auto mt-5'>
            <div className='border border-cyan-600 rounded-md p-5 my-5'>
                <h1 className='text-3xl font-semibold py-2'>What is Purpose of React Router?</h1>
                <p className='md:w-[50%] m-auto text-justify'><strong>Answer: </strong>
                    React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
                </p>
            </div>

            <div className='border border-cyan-600 rounded-md p-5 my-5'>
                <h1 className='text-3xl font-semibold py-2'>How Does Context API Work?</h1>
                <p className='md:w-[50%] m-auto text-justify'><strong>Answer: </strong>
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </p>
            </div>
            <div className='border border-cyan-600 rounded-md p-5 my-5'>
                <h1 className='text-3xl font-semibold py-2'>What is useRef?</h1>
                <p className='md:w-[50%] m-auto text-justify'><strong>Answer: </strong>
                    useRef is a hook introduced with other hooks in React and is mainly used for creating a reference of the DOM element or directly accessing it inside a functional component. But don't think even for a second that it's the only thing this hook is capable of as it can even be used for storing mutable values across different rerenders of the component.

                    Like every other hook in React, we have to first import this hook at the very top level as per the rules of hooks and then only we can use it in our apps.
                </p>
            </div>
        </div>
    );
};

export default Blog;