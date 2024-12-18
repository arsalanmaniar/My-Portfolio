import React from 'react'
import { VscMail } from "react-icons/vsc";
import { BsTelephoneInbound } from "react-icons/bs";



const Contact = () => {
    return (
        <div id='contact' className='pt-32 container'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='space-y-8'>
                    <h2 className='text-5xl' data-aos="zoom-out-left">Get in touch</h2>
                    <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-out-left">
                        Drop me a line, give me a call or send me a message by submitting the form.
                    </p>
                    <div className='flex gap-3 items-center' data-aos="zoom-out-left">
                        <VscMail size={30} /> arsalanmaniar07@gmail.com
                    </div>

                    <div className='flex gap-3 items-center' data-aos="zoom-out-left">
                        <BsTelephoneInbound size={30} /> (+92) 3062488330
                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex flex-col gap-1'data-aos="zoom-out-left">
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                        className='h-[40px] bg-transparent border border-accent'
                        id='name'/>
                    </div>

                    <div className='flex flex-col gap-1' data-aos="zoom-out-left">
                        <label htmlFor="email">Email</label>
                        <input type="text" 
                        className='h-[40px] bg-transparent border border-accent'
                        id='email'/>
                    </div>

                    <div className='flex flex-col gap-1' data-aos="zoom-out-left">
                        <label htmlFor="msg">Message</label>
                        <textarea 
                        className='bg-transparent border border-accent'
                        id='msg' rows={8}>
                        </textarea>
                    </div>
                    <button className='bg-green-700 p-2 px-6' data-aos="zoom-out-left">Send</button>

                </div>
            </div>
        </div>
    )
}

export default Contact
