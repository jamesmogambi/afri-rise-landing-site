"use client"
import React, { useState } from "react";

const CommentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    saveInfo: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    // Handle checkbox case explicitly
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-400 inline-block pb-1">
        Leave a Reply
      </h2>
      <p className="text-gray-600 mb-6">
        Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
      </p>

      <form onSubmit={handleSubmit}>
        {/* Comment Field */}
        <div className="mb-6">
          <textarea
            name="comment"
            placeholder="Comment *"
            value={formData.comment}
            onChange={handleInputChange}
            required
            className="w-full h-32 p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Name and Email Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Save Info Checkbox */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            name="saveInfo"
            checked={formData.saveInfo}
            onChange={handleInputChange}
            className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-2 focus:ring-primary"
          />
          <label htmlFor="saveInfo" className="ml-3 text-gray-600">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
