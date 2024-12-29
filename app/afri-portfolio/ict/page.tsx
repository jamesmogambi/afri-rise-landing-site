import CoverImage from "@/components/CoverImage";
import PortSection002 from "@/components/portSection002";
import PortSection003 from "@/components/portSection003";

export default function Page() {
  const description = `
  Information and Communications Technology (ICT) is the convergence of computing, telecommunication and governance policies for how information should be accessed, secured, processed, transmitted and stored.


  In some parts of the world, ICT is used as a synonym for information technology (IT), but the two terms can have slightly different meanings when used in different contexts. For example, in the United States
  the label IT is used when discussing technology in terms of business operations — while the label ICT is used more often in the context of education and government.


  ICT has become an umbrella term in many parts of the world as digital communication links replace analog links — and the demand for professionals who have the knowledge and skills to manage the convergence
  of these links grows.


  To that end, ICT employees can expect to work in positions where the focus of their job includes improving digital literacy, data literacy and using emerging technologies to optimize legacy communication
  channels. This includes researching how emerging technologies such as augmented (AR) and virtual reality (VR) can support traditional technologies and communicationTo that end, ICT employees can expect
   to work in positions where the focus of their job includes improving digital literacy, data literacy and using emerging technologies to optimize legacy communication channels. This includes researching how emerging technologies such as augmented (AR) and virtual reality (VR) can support traditional technologies and communication theories..
`;
  return (
    <div>
            {/* Background Section */}
            <div
                className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
                style={{
                backgroundImage: "url('/images/cover02.png')", // Replace with your image path
                }}
            ></div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-10">
            <div>
                <CoverImage
                  imageSrc="/images/portfolio-ICT.png" // Replace with the image path
                  altText="Industrial Warehouse"
                />
              </div>
              {/* Port Section 001 */}
              <div className="bg-white rounded-lg  overflow-hidden mb-12">
                <PortSection003
                 // imageSrc="/images/portfolio-ICT.png"
                  category="Business Planning"
                  title="What Does Information and Communications Technology (ICT) Mean?"
                  description={description}
                />
              </div>
            </div>


            {/* Divider */}
            <hr className="border-t border-gray-300 mb-12" />

            {/* Related Portfolio */}
            <div className="bg-white rounded-lg p-6">
            {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Portfolio</h2> */}
            <PortSection002 />
            </div>
      </div>
  );
}

