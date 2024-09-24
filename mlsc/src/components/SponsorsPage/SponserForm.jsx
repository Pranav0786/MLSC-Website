import React, { useState } from "react";
import Headings from "../Hedings";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SponsorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://getform.io/f/brolqzoa", {
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
            company: "",
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
    <div className="mt-16 p-8 rounded-lg flex flex-col justify-center items-center mx-auto max-w-4xl">
      <Headings heading={"Interested in sponsoring us?"} />
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
          type="text"
          placeholder="Company Name"
          name="company"
          value={formData.company}
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
        autoClose={5000}
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

export default SponsorForm;
