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
     <PageBanner title="Investment Advisory"/>

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
              imageSrc="/images/Advisory-scaled.jpg"
              title="Investment Advisory"
              subtitle="Working with thousands of companies around the world"
              description="You have choices in how we work together, including how you receive advice, manage your account and pay for our services. 
              Your advisor works with you to build a personalized approach to your investments based on your financial situation, preferences and goals. 
              Your investment strategy can be implemented through an investment advisory account, brokerage account, or a combination of both.
              
              We provide key resources and information to help you make informed decisions about your investments, taking into account the types of relationships you can have with us.
               You can review the applicable materials below to help you understand your options and how we charge for advice, services and solutions, and discuss them with your advisor."
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
