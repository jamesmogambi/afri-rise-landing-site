import ContactSection from "@/components/contactCard";
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";
import PageBanner from "@/components/PageBanner";
import React from "react";

export default function Page() {
  return (
    <div>
      {/* Background Section */}
      <PageBanner title="Contact"/>

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


