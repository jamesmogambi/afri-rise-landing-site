import CoverImage from "@/components/CoverImage";
import PageBanner from "@/components/PageBanner";
import PortSection001 from "@/components/portSection001";
import PortSection002 from "@/components/portSection002";

export default function Page() {
  return (
    <div>
            {/* Background Section */}
            <PageBanner title="Greenfield"/>

            {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
      <div>
                <CoverImage
                  imageSrc="/images/port-greenfield-001.jpg" // Replace with the image path
                  altText="Industrial Warehouse"
                />
              </div>
            {/* Port Section 001 */}
            <div className="bg-white rounded-lg overflow-hidden mb-12">
            <PortSection001
               // imageSrc="/images/port-greenfield-001.jpg" 
                category="Business Planning"
                title="What is a Greenfield Project?"
                description="A greenfield project can describe any project that a team starts from scratch. The term comes from real estate, where it conveys the image of a literal green-field site for development, undisturbed by previous construction."
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

