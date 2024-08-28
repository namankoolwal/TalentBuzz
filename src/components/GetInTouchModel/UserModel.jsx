/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import InputField from './InputField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserModel = () => {
    const [step, setStep] = useState(1); // Track the current step
    const [error, setError] = useState("All fields are required");
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNo: '',
        cityBasedIn: '',
        artistType: 'None', // Default selected option
        budget: '',
        eventType: '',
        tellmore: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError("");
    };

    useEffect(() => {
        const nextBtn = formData.fullName && formData.email && formData.phoneNo && formData.cityBasedIn;
        setNextBtnDisabled(!nextBtn);
        const submitBtn = true; // Step 2 fields are optional, so submit button is enabled by default
        setSubmitBtnDisabled(!submitBtn);
    }, [formData]);

    const handleNext = () => {
        setError("Leave Blank if not applicable");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email format
        const phonePattern = /^[0-9]{10}$/; // Regular expression to validate a 10-digit phone number

        if (formData.fullName && formData.email && formData.phoneNo && formData.cityBasedIn) {
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
        setError("");
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const finalFormData = {
            ...formData,
            artistType: formData.artistType || "None",
            budget: formData.budget || "None",
            eventType: formData.eventType || "None",
            tellmore: formData.tellmore || "None",
        };

        console.log("Submitting form data:", finalFormData);

        // https://docs.google.com/forms/d/e/1FAIpQLSemWuOcxoP5QpV0w32wHJifoRNlv7YvWxJfgjoGhIizbddY5w/viewform?usp=pp_url&entry.960653726=naman&entry.115660721=naman@gmail.com&entry.81776937=1234567890&entry.1811095387=alwar&entry.2045396758=Musician&entry.347350977=party&entry.1409734665=1500&entry.1517268973=party+hai

        const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSemWuOcxoP5QpV0w32wHJifoRNlv7YvWxJfgjoGhIizbddY5w/formResponse';
        const formFields = {
            'entry.960653726': finalFormData.fullName,
            'entry.115660721': finalFormData.email,
            'entry.81776937': finalFormData.phoneNo,
            'entry.1811095387': finalFormData.cityBasedIn,
            'entry.2045396758': finalFormData.artistType,
            'entry.1409734665': finalFormData.budget,
            'entry.347350977': finalFormData.eventType,
            'entry.1517268973': finalFormData.tellmore,
        };

        const queryString = new URLSearchParams(formFields).toString();
        const urlWithParams = `${googleFormURL}?${queryString}`;

        fetch(urlWithParams, {
            method: 'POST',
            mode: 'no-cors',
        })
            .then(() => {
                toast.success("Form submitted successfully");

                setSubmitBtnDisabled(false);
                setFormData({
                    fullName: '',
                    email: '',
                    phoneNo: '',
                    cityBasedIn: '',
                    artistType: 'None',
                    budget: '',
                    eventType: '',
                    tellmore: '',
                });
                setStep(1);
            })
            .catch((error) => {
                setSubmitBtnDisabled(false);
                toast.error("Error submitting form. Please try again.");
            });
    };

    return (
        <>
            <ToastContainer
                theme="dark"
                pauseOnHover={false}
                pauseOnFocusLoss={false}
                className="text-xl md:text-base"
            />
            <div className="text-black">
                <div className="title text-left">
                    <h3 className="font-[500] text-[1.75rem] md:text-[1.25rem] text-[#170F49]">
                        {step === 1 ? 'Personal Details' : 'Event Details'}
                    </h3>
                    <h5 className="text-[#6F6C90] text-[1.125rem] md:text-[0.85rem]">
                        {step === 1
                            ? 'Please fill your information so we can get in touch with you.'
                            : 'Please fill your event details so we can get in touch with you.'}
                    </h5>
                </div>
                <form onSubmit={handleSubmit} className="mt-6 relative">
                    {error && (
                        <p className="text-red-500 text-lg md:text-xs text-left -top-9 md:-top-5 absolute">
                            *{error}
                        </p>
                    )}
                    {step === 1 && (
                        <div className="flex flex-col mt-14 md:mt-0 gap-5 md:gap-2">
                            <InputField
                                value={formData.fullName}
                                handleChange={handleChange}
                                type="text"
                                name="fullName"
                                placeholder="*Full Name"
                            />
                            <InputField
                                value={formData.email}
                                handleChange={handleChange}
                                type="email"
                                name="email"
                                placeholder="*Email"
                            />
                            <InputField
                                value={formData.phoneNo}
                                handleChange={handleChange}
                                type="number"
                                name="phoneNo"
                                placeholder="*Phone Number"
                            />
                            <InputField
                                value={formData.cityBasedIn}
                                handleChange={handleChange}
                                type="text"
                                name="cityBasedIn"
                                placeholder="*City Based In"
                            />
                            <div className="flex items-center mt-5 md:mt-0 justify-end">
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="inline-block w-fit bg-[#CF4672] text-white text-2xl md:text-base py-3 md:py-2 px-10 rounded hover:bg-[#d84573] transition mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="flex flex-col mt-14 md:mt-0 gap-5 md:gap-2">
                          
                                <select
                                    name="artistType"
                                    value={formData.artistType}
                                    onChange={handleChange}
                                    className="block w-full py-2.5 md:py-1 px-3 text-2xl border md:border-2  bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option disabled value="None" className='text-gray-500'>Artist You are looking for</option>
                                    <option value="None">None</option>
                                    <option value="Musician">Musician</option>
                                    <option value="Dancer">Dancer</option>
                                    <option value="Actor">Actor</option>
                                    <option value="Comedian">Comedian</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                </select>
                            <InputField
                                value={formData.eventType}
                                handleChange={handleChange}
                                type="text"
                                name="eventType"
                                placeholder="Event name, type"
                            />
                            <InputField
                                value={formData.budget}
                                handleChange={handleChange}
                                type="number"
                                name="budget"
                                placeholder="Budget"
                            />
                            <InputField
                                value={formData.tellmore}
                                handleChange={handleChange}
                                type="text"
                                name="tellmore"
                                placeholder="Tell Us more about your Event"
                            />
                            <div className="flex justify-between mt-5 md:mt-0">
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    className="inline-block w-fit bg-white text-black border-2 text-2xl md:text-base py-1 md:py-0.5 px-10 rounded transition mt-4"
                                >
                                    Previous
                                </button>
                                <button
                                    type="submit"
                                    className="inline-block w-fit bg-[#CF4672] text-white text-2xl md:text-base py-3 md:py-2 px-10 rounded hover:bg-[#d84573] transition mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
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
};

export default UserModel;
