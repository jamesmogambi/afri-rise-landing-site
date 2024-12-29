import CoverImage from "@/components/CoverImage";
import PortSection002 from "@/components/portSection002";
import PortSection003 from "@/components/portSection003";

export default function Page() {
  const description = `
Africa’s financial systems have progressed over the past 20 years. Yet liberalization, privatization, and stabilization has yet to translate into more accessible financial services, especially credit, 
that reaches the majority of Africans. On average, banks in Africa are well capitalized and liquid. Still, the benefits of deeper, broader, and cheaper finance have not yet been reaped. Even though it weathered the 2008 
global financial crisis, Africa will be affected by long-term trends that started before the crisis and have been reinforced by the crisis, especially the shifts in the distribution of global economic power. 
The BRIC countries, especially China and India, but, more recently, also Brazil, are playing a growing role in Africa. This book makes a series of recommendations to overcome them. They include focusing on 
increasing competition in the banking sector, expanding financial services, 
and expand financial literacy.

A landscape of the financial systems in Africa is presented. Evidence shows that Africa’s financial systems continue to be small in absolute and relative terms. They are based heavily on banks; few stock markets 
have sufficient liquidity; and the contractual savings industry is small and weak in most countries. The small size of financial systems also explains the high costs of intermediation and financial service provision, 
as well as the limited 
competition.
`;
  return (
    <div>
            {/* Background Section */}
            <div
                className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
                style={{
                backgroundImage: "url('/images/cover07.png')", // Replace with your image path
                }}
            ></div>

            {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
             <div>
                <CoverImage
                  imageSrc="/images/portfolio-Afri-Finance.jpg" // Replace with the image path
                  altText="Industrial Warehouse"
                />
              </div>
            {/* Port Section 001 */}
            <div className="bg-white rounded-lg overflow-hidden mb-12">
            <PortSection003
               // imageSrc="/images/portfolio-Afri-Finance.jpg" 
                category="Business Planning"
                title=""
                description={description}
            />
            </div>

            {/* Divider */}
            <hr className="border-t border-gray-300 mb-12" />

            {/* Related Portfolio */}
            <div className="bg-white rounded-lg shadow-lg p-6">
            {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Portfolio</h2> */}
            <PortSection002 />
            </div>
      </div>

    </div>
  );
}




