/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import InputField from './InputField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ArtistModel = () => {

  const [error, setError] = useState("")
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true);

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNo: '',

  });

  useEffect(() => {
    const submitBtn = formData.firstName && formData.email && formData.phoneNo
    setSubmitBtnDisabled(!submitBtn)
}, [formData])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("")
  };

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email format
    const phonePattern = /^[0-9]{10}$/; // Regular expression to validate a 10-digit phone number

    if (formData.firstName && formData.email && formData.phoneNo) {
      if (!emailPattern.test(formData.email)) {
        setError("Please enter a valid email address");
        return false;
      }

      if (!phonePattern.test(formData.phoneNo)) {
        setError("Please enter a valid 10-digit phone number");
        return false;
      }
      return true
    } else {
      setError("All fields are required");
      return false
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // https://docs.google.com/forms/d/e/1FAIpQLSd7m0XHmwVCqTKtdcTW7eSQkBND7Tr_jYrb2v12KzXqoZchXg/viewform?usp=pp_url&entry.1645822644=dfs&entry.1409456964=sdfsd&entry.1162980994=dsfds



    if (validateForm()) {


      if (formData.firstName && formData.email && formData.phoneNo) {
        setSubmitBtnDisabled(true);
        const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSd7m0XHmwVCqTKtdcTW7eSQkBND7Tr_jYrb2v12KzXqoZchXg/formResponse';
        const formFields = {
          'entry.1645822644': formData.firstName,
          'entry.1409456964': formData.email,
          'entry.1162980994': formData.phoneNo,
        };

        const queryString = new URLSearchParams(formFields).toString();
        const urlWithParams = `${googleFormURL}?${queryString}`;

        console.log("formdata ", formFields)
        console.log('Submitting form:', urlWithParams);
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
            })
          })
          .catch((error) => {
            setSubmitBtnDisabled(false);
            toast.error("Error submitting form. Please try again.")
          });


      }
      else {
        setError("All fields are required")
      }
    }

  }
  const handleRedirect = () => {
    window.open('https://forms.gle/PpvLAV7BNv6CLQMbA', '_blank');
  };
  return (
    <>
      <ToastContainer theme="dark" />
      <div className=' text-black'>
        <div className='title text-left'>
          <h3 className='font-[500] text-[1.25rem] text-[#170F49]'> Personal Details</h3>
          <h5 className='text-[#6F6C90] text-[0.85rem]'>Please fill your information so we can get in touch with you.</h5>
        </div>
        <form onSubmit={handleSubmit} className='mt-6  relative'>
          {error && <p className='text-red-500 text-xs text-left -top-5 absolute'>*{error}</p>}
          <div className=' flex flex-col gap-2'>

            <InputField value={formData.firstName} handleChange={handleChange} type="text" name="firstName" placeholder="First Name" />


            <InputField value={formData.email} handleChange={handleChange} type="email" name="email" placeholder="Email" />

            <InputField value={formData.phoneNo} handleChange={handleChange} type="number" name="phoneNo" placeholder="Phone Number" />

            <button className='bg-gray-200 outline-none border-2 border-gray-300 focus:border-gray-400  rounded-md py-1.5 px-3 text-left text-gray-500 text-sm hover:bg-gray-400 hover:text-gray-700' onClick={handleRedirect}> Fill This Form To Join Artist Group &rarr;</button>


            <div className='flex items-center justify-end'>

              <button
                type="submit"
                className='inline-block w-fit bg-[#CF4672] text-white py-2 px-10 rounded hover:bg-[#d84573] transition mt-4 disabled:opacity-70 disabled:cursor-not-allowed'
                disabled={submitBtnDisabled}
              >
                Submit
              </button>
            </div>
          </div>


        </form>
      </div>
    </>
  )
}

export default ArtistModel
