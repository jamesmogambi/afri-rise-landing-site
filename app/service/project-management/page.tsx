import DetailCard from "@/components/DetailCard";
import FundMTabs from "@/components/FundMTabs";
import Servicelinks from "@/components/ServiceLinks";
import ServiceContact from "@/components/ServiceContact";
import SupportCard from "@/components/SupportCard";

export default function Page() {
  return (
    <div>
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/proMCover.png')", // Replace with your image path
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
          <div className="lg:w-3/4 space-y-10">
            <DetailCard
              imageSrc="/images/Project-Management-scaled.jpg"
              title="Project Management"
              subtitle="Working with thousands of companies around the world"
              description="By helping you set out clear and measurable goals, we can match the most suitable mixture of investments to each specific goal in the most efficient way.
              From the outset it is important to build a strong foundation and as your circumstance change, we can help you make any necessary adjustments to keep you on track."
              items={[]}
            />

            {/* Support Card Section */}
            <SupportCard />

            {/* Tabs Section */}
            <FundMTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
