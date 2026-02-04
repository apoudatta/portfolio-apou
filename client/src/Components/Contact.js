import React from 'react';
import theme_pattern from '../assets/theme_pattern.svg'
import mail_icon from '../assets/mail_icon.svg';
import location_icon from '../assets/location_icon.svg';
import call_icon from '../assets/call_icon.svg';

const Contact = () => {

    const [result, setResult] = React.useState("");
    const [submitBtnState, setSubmitBtnState] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "8bd69d69-5978-48ce-b219-9038e8b4da08");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            setSubmitBtnState("disabled");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className='flex flex-col items-center justify-center gap-12 md:gap-20 my-12 md:my-20 mx-16 md:mx-44'>
            <div className='section-heading'>
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className='contact-section flex flex-col md:flex-row gap-12 md:gap-20'>
                <div className='flex flex-col gap-7 text-lg md:text-2xl w-1/2'>
                    <h1 className='text-4xl md:text-6xl font-bold'>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className='flex flex-col gap-7 text-lg md:text-2xl'>
                        <div className='flex items-center gap-5'>
                            <img src={mail_icon} alt='' className='w-10 h-10' /> <p>apoudatto6@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <img src={call_icon} alt='' className='w-10 h-10' /> <p>+8801838737333</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <img src={location_icon} alt='' className='w-10 h-10' /> <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='flex flex-col gap-7 text-lg md:text-2xl w-1/2'>
                    <p className='text-lg md:text-2xl'>{result}</p>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' className='border-none outline-none bg-gray-200 dark:bg-gray-700 p-4 rounded-lg' />
                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter your email' name="email" className='border-none outline-none bg-gray-200 dark:bg-gray-700 p-4 rounded-lg' />
                    <label htmlFor=''>Write your message here</label>
                    <textarea name='message' rows="8" placeholder='Enter your message' className='border-none outline-none bg-gray-200 dark:bg-gray-700 p-4 rounded-lg'></textarea>
                    <button disabled={submitBtnState} type='submit' className='bg-gray-400 dark:bg-gray-700 p-4 rounded-lg'>Submit now</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;