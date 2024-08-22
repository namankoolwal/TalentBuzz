/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

const Model = () => {
    const [step, setStep] = useState(1); // Track the current step
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phoneNo: '',
        cityBasedIn: '',
        artistName: '',
        budget: '',
        eventType: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError("")
    };

    const handleNext = () => {
        if (formData.firstName && formData.email && formData.phoneNo && formData.cityBasedIn) {
            setStep(step + 1);
        } else {
            // alert('Please fill in all fields before proceeding to the next step.');
            console.log("please fil all the fields before proceeding to the next step")
            setError("All fields are required")
        }
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.artistName && formData.budget && formData.eventType) {
        const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfrSiZROmGJ0IyOzQDjZnzfG8wW2D4A034hvGvhzqgOLWTzmA/formResponse';
        const formFields = {
            'entry.438228617': formData.firstName,
            'entry.1489273488': formData.email,
            'entry.1558515764': formData.phoneNo,
            'entry.149120717': formData.cityBasedIn,
            'entry.1064463468': formData.artistName,
            'entry.463030407': formData.budget,
            'entry.1875732322': formData.eventType,
        };

        const queryString = new URLSearchParams(formFields).toString();
        const urlWithParams = `${googleFormURL}?${queryString}`;

        console.log('Submitting form:', urlWithParams);
        fetch(urlWithParams, {
            method: 'POST',
            mode: 'no-cors',
        })
            .then(() => {
                alert('Form submitted successfully!');
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
                alert('Error submitting form. Please try again.');
            });

        setFormData({
            firstName: '',
            email: '',
            phoneNo: '',
            cityBasedIn: '',
            artistName: '',
            budget: '',
            eventType: '',
        })
    }
    else {
        setError("All fields are required")
    }
    };

    return (
        <div className='bg-yellow-500 text-black'>
            <h1>{step === 1 ? 'Personal Details' : 'Event Details'}</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div>
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            Phone No:
                            <input
                                type="tel"
                                name="phoneNo"
                                value={formData.phoneNo}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            City Based In:
                            <input
                                type="text"
                                name="cityBasedIn"
                                value={formData.cityBasedIn}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <button type="button" onClick={handleNext}>
                            Next
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <label>
                            Artist Name:
                            <input
                                type="text"
                                name="artistName"
                                value={formData.artistName}
                                onChange={handleChange}
                            />
                        </label>
                        <br />
                        <label>
                            Budget:
                            <input
                                type="number"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                            />
                        </label>
                        <br />
                        <label>
                            Event Type:
                            <input
                                type="text"
                                name="eventType"
                                value={formData.eventType}
                                onChange={handleChange}
                            />
                        </label>
                        <br />
                        <button type="button" onClick={handlePrev}>
                            Previous
                        </button>
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
}



export default Model



// https://docs.google.com/forms/d/e/1FAIpQLSfrSiZROmGJ0IyOzQDjZnzfG8wW2D4A034hvGvhzqgOLWTzmA/viewform?usp=pp_url&entry.438228617=naman&entry.1489273488=naman@naman.com&entry.1558515764=1234567890&entry.149120717=alwar&entry.1064463468=namuji&entry.463030407=20000&entry.1875732322=shadi+hai