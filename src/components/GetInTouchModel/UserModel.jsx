/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import InputField from './InputField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserModel = () => {
    const [step, setStep] = useState(1); // Track the current step
    const [error, setError] = useState("")
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phoneNo: '',
        cityBasedIn: '',
        artistName: '',
        budget: '',
        eventType: '',
        tellmore: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError("")
    };

    useEffect(() => {
        const nextBtn = formData.firstName && formData.email && formData.phoneNo && formData.cityBasedIn
        setNextBtnDisabled(!nextBtn)
        const submitBtn = formData.artistName && formData.budget && formData.eventType && formData.tellmore
        setSubmitBtnDisabled(!submitBtn)
    }, [formData])


    const handleNext = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email format
        const phonePattern = /^[0-9]{10}$/; // Regular expression to validate a 10-digit phone number

        if (formData.firstName && formData.email && formData.phoneNo && formData.cityBasedIn) {
            if (!emailPattern.test(formData.email)) {
                setError("Please enter a valid email address");
                return;
            }

            if (!phonePattern.test(formData.phoneNo)) {
                setError("Please enter a valid 10-digit phone number");
                return;
            }
            setStep(step + 1);
        } else {
            setError("All fields are required");
        }
    };


    const handlePrev = () => {
        setStep(step - 1);
    };


    const handleSubmit = (e) => {
        e.preventDefault();




        if (formData.artistName && formData.budget && formData.eventType && formData.tellmore) {
            setSubmitBtnDisabled(true);
            const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfrSiZROmGJ0IyOzQDjZnzfG8wW2D4A034hvGvhzqgOLWTzmA/formResponse';
            const formFields = {
                'entry.438228617': formData.firstName,
                'entry.1489273488': formData.email,
                'entry.1558515764': formData.phoneNo,
                'entry.149120717': formData.cityBasedIn,
                'entry.1064463468': formData.artistName,
                'entry.463030407': formData.budget,
                'entry.1875732322': formData.eventType,
                'entry.1476327831': formData.tellmore,
            };

            const queryString = new URLSearchParams(formFields).toString();
            const urlWithParams = `${googleFormURL}?${queryString}`;

            // console.log("formdata ", formFields)
            // console.log('Submitting form:', urlWithParams);
            fetch(urlWithParams, {
                method: 'POST',
                mode: 'no-cors',
            })
                .then(() => {
                    toast.success("Form submitted successfully");

                    setSubmitBtnDisabled(false);
                    setFormData({
                        firstName: '',
                        email: '',
                        phoneNo: '',
                        cityBasedIn: '',
                        artistName: '',
                        budget: '',
                        eventType: '',
                        tellmore: '',
                    })
                    setStep(1);
                })
                .catch((error) => {
                    setSubmitBtnDisabled(false);
                    toast.error("Error submitting form. Please try again.")
                });


        }
        else {
            setError("All fields are required")
        }
    };

    return (
        <>
            <ToastContainer
                theme="dark"
                pauseOnHover={false}
                pauseOnFocusLoss={false}
                className="text-xl md:text-base" />
            <div className=' text-black'>
                <div className='title text-left'>
                    <h3 className='font-[500] text-[1.25rem] text-[#170F49]'>{step === 1 ? 'Personal Details' : 'Event Details'}</h3>
                    <h5 className='text-[#6F6C90] text-[0.85rem]'>{step === 1 ? 'Please fill your information so we can get in touch with you.' : 'Please fill your event details so we can get in touch with you.'}</h5>
                </div>
                <form onSubmit={handleSubmit} className='mt-6  relative'>
                    {error && <p className='text-red-500 text-xs text-left -top-5 absolute'>*{error}</p>}
                    {step === 1 && (
                        <div className=' flex flex-col gap-2'>

                            <InputField value={formData.firstName} handleChange={handleChange} type="text" name="firstName" placeholder="First Name" />


                            <InputField value={formData.email} handleChange={handleChange} type="email" name="email" placeholder="Email" />

                            <InputField value={formData.phoneNo} handleChange={handleChange} type="number" name="phoneNo" placeholder="Phone Number" />

                            <InputField value={formData.cityBasedIn} handleChange={handleChange} type="text" name="cityBasedIn" placeholder="City Based In" />


                            <div className='flex items-center justify-end'>

                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className='inline-block w-fit bg-[#CF4672] text-white py-2 px-10 rounded hover:bg-[#d84573] transition mt-4 disabled:opacity-70 disabled:cursor-not-allowed'
                                // disabled={nextBtnDisabled}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className=' flex flex-col gap-2'>
                            <InputField value={formData.artistName} handleChange={handleChange} type="text" name="artistName" placeholder="Artist you are looking" />

                            <InputField value={formData.eventType} handleChange={handleChange} type="text" name="eventType" placeholder="Event name, type" />

                            <InputField value={formData.budget} handleChange={handleChange} type="number" name="budget" placeholder="Budget" />

                            <InputField value={formData.tellmore} handleChange={handleChange} type="text" name="tellmore" placeholder="Tell Us more about your Event" />

                            <div className='flex justify-between'>
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    className='inline-block w-fit bg-[#CF4672] text-white py-2 px-10 rounded hover:bg-[#d84573] transition mt-4'
                                >
                                    Previous
                                </button>
                                <button
                                    type="submit"
                                    className='inline-block w-fit bg-[#CF4672] text-white py-2 px-10 rounded hover:bg-[#d84573] transition mt-4 disabled:opacity-70 disabled:cursor-not-allowed'
                                    disabled={submitBtnDisabled}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </>
    );
}



export default UserModel



// https://docs.google.com/forms/d/e/1FAIpQLSfrSiZROmGJ0IyOzQDjZnzfG8wW2D4A034hvGvhzqgOLWTzmA/viewform?usp=pp_url&entry.438228617=naman&entry.1489273488=namankoolwal01@gmail.com&entry.1558515764=1234567890&entry.149120717=adjkl&entry.1064463468=fgw&entry.463030407=5623&entry.1875732322=sdgd&entry.1476327831=ajdf+jskj+diogijw+d