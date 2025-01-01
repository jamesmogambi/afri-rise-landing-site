import CoverImage from "@/components/CoverImage";
import PortSection002 from "@/components/portSection002";
import PortSection003 from "@/components/portSection003";

export default function Page() {
  const description = `
  Africa’s rapid economic expansion creates a daunting energy challenge, combined with rising expectations of improved resilience and sustainability. 
  Finding a sustainable way to meet growing energy needs is one of the core development challenges for the continent. Africa is rich in renewable energy sources, including hydro, sun, wind and others,
   and the time is right for sound planning to ensure the right energy mix.
   Decisions made today will shape the continent’s energy sector for decades.

  Access to energy is crucial not only for the attainment of health and education outcomes, but also for reducing the cost of doing business and for unlocking economic potential and creating jobs.
   Insufficient energy access manifests itself in hundreds of thousands of deaths annually due to the use of wood-burning stoves for cooking; handicaps the operations of hospitals and emergency services;
    compromises educational attainment; and drives up the cost of doing business.  Energy access for all is therefore one of the key drivers of inclusive growth as it creates opportunities for women, youths,
     children both in urban and rural areas.

 Africa’s energy potential, especially renewable energy, is enormous, yet only a fraction of it is being currently employed. Hydropower provides around a fifth of current capacity but not even a tenth of its total
  potential is being utilized. Similarly, the technical potential of solar, biomass, wind and geothermal energy is significant. While renewable energy will be prioritized by the Bank, fossil fuels will remain an 
  important part of the overall energy mix, as is the case with several developed economies, with the Bank financing state of the art technology to minimize 
 emissions.
`;
  return (
    <div>
            {/* Background Section */}
            <div
                className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
                style={{
                backgroundImage: "url('/images/cover06.png')", // Replace with your image path
                }}
            ></div>

            {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
      <div>
                <CoverImage
                  imageSrc="/images/portfolio-Afri-Energy.jpg" // Replace with the image path
                  altText="Industrial Warehouse"
                />
              </div>
            {/* Port Section 001 */}
            <div className="bg-white rounded-lg overflow-hidden mb-12">
            <PortSection003
              //  imageSrc="/images/portfolio-Afri-Energy.jpg" 
                category="Business Planning"
                title=""
                description={description}
            />
            </div>

            {/* Divider */}
            <hr className="border-t border-gray-300 mb-12" />

            {/* Related Portfolio */}
            <div className="bg-white rounded-lg p-6">
            {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Portfolio</h2> */}
            <PortSection002 />
            </div>
      </div>

    </div>
  );
}



