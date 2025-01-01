import CoverImage from "@/components/CoverImage";
import PortSection001 from "@/components/portSection001";
import PortSection002 from "@/components/portSection002";

export default function Page() {
  return (
    <div>
            {/* Background Section */}
            <div
                className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
                style={{
                backgroundImage: "url('/images/cover04.png')", // Replace with your image path
                }}
            ></div>

            {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-10">
                  <div>
                    <CoverImage
                      imageSrc="/images/portfolio-Agriculture-.jpg" // Replace with the image path
                      altText="Industrial Warehouse"
                    />
                  </div>
                {/* Port Section 001 */}
                  <div className="bg-white rounded-lg overflow-hidden mb-12">
                      <PortSection001
                        // imageSrc="/images/portfolio-Agriculture-.jpg"
                          category="Business Planning"
                          title=""
                          description="There are many reasons to invest in agriculture: it is a low-risk investment that keeps pace with inflation and increases in value over the long-term,
                          it is a tangible asset that provides benefit to the community, and it can diversify a portfolio. But how exactly does an investment like this make money? Depending on the investment and the type of farm,
                            investors can profit through several different ways.
                          We’ve covered five of the most common ways agriculture generates returns below."
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


