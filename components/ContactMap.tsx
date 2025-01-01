import React from "react";

const ContactMap: React.FC = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.347204154585!2d36.823295!3d-1.289896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172435b7f4df%3A0xabcdef123456!2sWu%20Yi%20Plaza!5e0!3m2!1sen!2ske!4v1699999999999!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{
          border: 0,
          borderRadius: "8px",
        }}
        allowFullScreen
        loading="lazy"
        title="Wu Yi Plaza Location"
      ></iframe>
    </div>
  );
};

export default ContactMap;
