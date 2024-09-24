import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://getform.io/f/brolqzoa", { // Replace with your Getform endpoint
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Message sent successfully!", {
            position: "top-center",
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
          });
        }
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
        });
      });
  };

  return (
    <div className="p-8 rounded-lg flex flex-col justify-center items-center mx-auto max-w-4xl">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg text-center">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          data-aos="fade-up"
          className="p-3 w-full bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          data-aos="fade-up"
          className="p-3 w-full bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 mb-4"
        />
        <textarea
          name="message"
          placeholder="Leave a Message for us!"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          data-aos="fade-up"
          className="p-3 w-full bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          data-aos="fade-up"
          className="w-full bg-blue-500 text-white py-2 xl:py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit!
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000} // Duration before toast auto-dismisses
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactForm;
