import React from 'react'

export default function Contacts() {
    return (
        <div className="position relative top-0 mx-auto container bg-white p-8 rounded-lg shadow-md  max-w-full dark:bg-slate-800 ">
            <h2 className="text-3xl font-bold mb-6 text-center text-red-600" id="contact">Contact Me</h2>
            <form action="https://formspree.io/f/mkgwnkzv" method="POST">
                <div className="mb-6 max-w-lg mx-auto ">
                    <label for="name" className="block text-gray-700 font-semibold mb-2 dark:text-white">Name</label>
                    <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600" required />
                </div>
                <div className="mb-6 max-w-lg mx-auto">
                    <label for="phone" className="block text-gray-700 font-semibold mb-2 dark:text-white">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600" required />
                </div>
                <div className="mb-6 max-w-lg mx-auto">
                    <label for="email" className="block text-gray-700 font-semibold mb-2 dark:text-white">Email</label>
                    <input type="email" id="email" name="_replyto" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600" required />
                </div>
                <div className="mb-6 max-w-lg mx-auto">
                    <label for="subject" className="block text-gray-700 font-semibold mb-2 dark:text-white">Subject</label>
                    <input type="text" id="subject" name="subject" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600" required />
                </div>
                <div className="mb-6 max-w-lg mx-auto">
                    <label for="message" className="block text-gray-700 font-semibold mb-2 dark:text-white">Message</label>
                    <textarea id="message" name="message" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600" rows="5" required></textarea>
                </div>
                <div className="mb-6 max-w-lg mx-auto">
                    <input type="checkbox" id="consent" name="consent" className="mr-2 leading-tight dark:text-white" required />
                    <label for="consent" className="text-gray-700 dark:text-white">I agree to the terms and conditions.</label>
                </div>
                <div>
                    <button type="submit" className=" p-1  bg-red-600 text-white py-1 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">Send Message</button>
                </div>
            </form>
        </div>
    )
}