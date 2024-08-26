/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ showToast , msg  , setShowToast }) => {
    console.log(showToast);
    
    useEffect(() => {
        if (showToast) {
            toast(msg);
        }

         const timer = setTimeout(() => {
            setShowToast(false);
        }, 100); // Change the duration as needed

        return () => clearTimeout(timer);
    
    }, [showToast, setShowToast  , msg]);

    return (
        <div>
            <ToastContainer
                theme="dark"  
                // hideProgressBar
                pauseOnHover={false}
                pauseOnFocusLoss={false}
                className="text-xl md:text-xl w-[calc(100%-5vw)] fixed top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            />
            {/* {showToast && (
                <div className='text-xl md:text-base w-full bg-white fixed top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black'>We Know you are super hyped and cant wait! \n Hang in there, the excitement is building!</div>
            ) } */}
        </div>  
    );
};

export default Toast;
