import ContactHeader from "@/components/ContactHeader";
import Footer from "@/components/Footer";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="">
      <ContactHeader />
      {children}
      <Footer />
    </div>
  );
};

export default layout;