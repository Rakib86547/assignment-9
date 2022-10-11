// import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    // const [open, setOpen] = useState(false)
    return (
        <div className='px-5 flex justify-between h-14 items-center bg-slate-100 shadow-md w-[100%]'>
            <div>
                <h1 className='text-2xl text-rose-600 font-semibold'>Quz Maker</h1>
            </div>
            <div>
                <div className='text-rose-600 font-semibold'>
                    <NavLink className='' to='/'>Topic</NavLink>
                    <NavLink className='ml-7' to='/statics'>Statics</NavLink>
                    <NavLink className='ml-7' to='/blog'>Blog</NavLink>
                </div>

                {/* <div onClick={() => setOpen(!open)} className='md:hidden text-rose-600'>
                    {
                        open ?
                            <XMarkIcon className='w-6 h-6'></XMarkIcon> :
                            <Bars3Icon className='w-6 h-6'></Bars3Icon>
                    }
                </div> */}
            </div>
        </div>
    );
};

export default Header;