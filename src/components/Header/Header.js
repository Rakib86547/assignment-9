import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='px-5 flex justify-between h-14 items-center bg-slate-100 shadow-md w-[100%]'>
            <div>
                <h1 className='text-2xl text-rose-600 font-semibold'>Quiz Maker</h1>
            </div>
            <div className='flex'>
                <ul className={`menu text-rose-600 font-semibold right-0 z-0 md:static flex absolute duration-500 ${open ? 'top-[60px]' : 'top-[-250px]'} bg-slate-100`}>
                    <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/'>Topic</NavLink>
                    <NavLink className='ml-7' to='/statics'>Statics</NavLink>
                    <NavLink className='ml-7' to='/blog'>Blog</NavLink>
                </ul>

                <div onClick={() => setOpen(!open)} className='md:hidden text-rose-600'>
                    {
                        open ?
                            <XMarkIcon className='w-6 h-6'></XMarkIcon> :
                            <Bars3Icon className='w-6 h-6'></Bars3Icon>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;