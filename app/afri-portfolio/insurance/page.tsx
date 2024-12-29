import CoverImage from "@/components/CoverImage";
import PortSection002 from "@/components/portSection002";
import PortSection003 from "@/components/portSection003";

export default function Page() {
  const description = `
  Insurance is a tricky field. It's like buying a dice or a bet on protection. When you buy insurance, you're buying a promise. 
  It's a promise that if something catastrophic happens to your business, your carrier is going to assist you to make your business whole again. 
  Sometimes, though, it's tempting to question the value of insurance because it isn't a tangible product.

  Let's break up and take a deeper look at why insurance matters. Here are some reasons why insurance is important. 
  What more would you add?

  1) Insurance Keeps Commerce Moving
  In the global arena of IT services, there were many reasons why insurance coverage allows IT service owners to be covered by insurance. 
  Was insurance worth the cost of IT? The big question was, why would the IT sector decide to be insured? Fortunately, 
  the insurance industry decided the sector was one of its core.

  2) Insurance is Compulsory in Some States
  In many states, insurance is a legal requirement. This is true, for example, in Wisconsin (home of HQs).

  3) Insurance Grants Peace of Mind
  Beyond the tangible, peace of mind is one of the intangible benefits of insurance.

  4) Insurance Ensures Family and Business Stability
  Insurance provides stability for families and businesses when facing risks.

  5) Insurance Makes The Right Thing To Do
  Buying insurance is something we may not always want to think about but protects our legacy and ensures security.
`;
  return (
    <div>
            {/* Background Section */}
            <div
                className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
                style={{
                backgroundImage: "url('/images/cover05.png')", // Replace with your image path
                }}
            ></div>

            {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
              <div>
                <CoverImage
                  imageSrc="/images/portfolio-Afri-Insu.jpg" // Replace with the image path
                  altText="Industrial Warehouse"
                />
              </div>
            {/* Port Section 001 */}
            <div className="bg-white rounded-lg overflow-hidden mb-12">
            <PortSection003
              //  imageSrc="/images/portfolio-Afri-Insu.jpg" 
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


