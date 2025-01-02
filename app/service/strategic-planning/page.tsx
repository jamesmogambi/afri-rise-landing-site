import DetailCard from "@/components/DetailCard";
import FundMTabs from "@/components/FundMTabs";
import Servicelinks from "@/components/ServiceLinks";
import ServiceContact from "@/components/ServiceContact";
import SupportCard from "@/components/SupportCard";
import PageBanner from "@/components/PageBanner";

export default function Page() {
  return (
    <div>
      {/* Background Section */}
      <PageBanner title="Strategic Planning"/>

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
              imageSrc="/images/Strategic-Planning-scaled.jpg"
              title="Strategic Planning"
              subtitle="Working with thousands of companies around the world"
              description="Strategic management activities transform the static plan into a system
               that provides strategic performance feedback to decision making and enables the plan to evolve and grow as requirements and other circumstances change."
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

