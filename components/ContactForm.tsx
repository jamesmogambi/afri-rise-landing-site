import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 border border-gray-300 rounded-lg shadow-md p-8">
      {/* Header Section */}
      <h2 className="text-2xl font-bold mb-2">We Love To Hear From You</h2>
      <p className="text-gray-600 mb-6">
        Please call or email, and we will be more than happy to assist you.
      </p>

      {/* Form */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name*"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name*"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email*"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Phone*"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <input
            type="text"
            placeholder="Subject*"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Comments */}
        <div>
          <textarea
            rows={5}
            placeholder="Comments"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-primary text-white py-3 px-8 rounded-full shadow-md hover:bg-purple-900 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

