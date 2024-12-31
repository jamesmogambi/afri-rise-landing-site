import ContactSection from "@/components/contactCard";
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";
import React from "react";

export default function Page() {
  return (
    <div>
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/contactCover.png')", // Replace with your image path
        }}
      >
        {/* <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Service</h1>
          <p className="mt-2 text-lg">
            Afri-Rise Equity - <span className="text-orange-500">service</span>
          </p>
        </div> */}
      </div>

      {/* Main Content Section */}
      <ContactSection/>
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Contact Map */}
                <div className="flex-1">
                <ContactMap />
                </div>

                {/* Contact Form */}
                <div className="flex-1">
                <ContactForm />
                </div>
            </div>
        </div>


    </div>
  );
}


