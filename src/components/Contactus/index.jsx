import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  // Basic validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
    if (!formData.subject) newErrors.subject = 'Subject is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none 
                ${errors.name ? 'border-red-500' : 'focus:ring focus:ring-blue-500'}`}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none 
                ${errors.email ? 'border-red-500' : 'focus:ring focus:ring-blue-500'}`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-1" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={`w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none 
                ${errors.subject ? 'border-red-500' : 'focus:ring focus:ring-blue-500'}`}
              placeholder="Subject"
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-300 mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none 
                ${errors.message ? 'border-red-500' : 'focus:ring focus:ring-blue-500'}`}
              placeholder="Your message here..."
              rows="4"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
