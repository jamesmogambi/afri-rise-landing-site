import DetailCard from "@/components/DetailCard";
import FundMTabs from "@/components/FundMTabs";
import Servicelinks from "@/components/ServiceLinks";
import ServiceContact from "@/components/ServiceContact";

export default function page() {
  return (
    <div>
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/service-fundManagement.png')", // Replace with your image path
        }}
      ></div>

      {/* Main Content Section */}
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-8">
          {/* Sidebar Section */}
          <div className="flex flex-col gap-8 lg:w-1/4">
            <Servicelinks />
            <ServiceContact />
          </div>

          {/* Main Content Section */}
          <div className="lg:w-3/4">
            <DetailCard
              imageSrc="/images/Fund-Management-scaled.jpg"
              title="Fund Management"
              subtitle="Working with thousands of companies around the world"
              description="We are a professional Financial Advisory & Management Firm that understands the intricacies and reality of delivering finances in developing markets."
              items={[
                "Financial & Investment Solutions",
                "Socially Responsible Investment",
                "Tax Mitigation Strategies",
                "Legal expertise and market knowledge",
              ]}
            />

            <div className="mt-10">
              <FundMTabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
