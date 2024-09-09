import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';


const Contactme = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission (e.g., send data to backend)
  };

  return (

    <><div>
<Navbar/>
    </div>
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold">Contact Information</h2>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email:</p>
              <p className="text-lg text-gray-800">anis.inbox10@gmail.com</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Phone:</p>
              <p className="text-lg text-gray-800">+92 343 92 75550</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Website:</p>
              <p className="text-lg text-gray-800">anis-ul-islam.vercel.app</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Location:</p>
              <p className="text-lg text-gray-800">DHA #2, Islamabad Pakistan</p>
              <p className="text-lg text-gray-800">Chitral, KPK Pakistan</p>

            </div>
          </div>
        </div>
      </div>
      
      <div>
        <Footer/>
      </div>
      </>
  );
};

export default Contactme;
