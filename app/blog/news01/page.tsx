import React from "react";
import Sidebar from "@/components/SideBar";
import NewsImage from "@/components/NewsImage";
import PortSection003 from "@/components/portSection003";
import TagsAndShare from "@/components/tagsCard";
import AdminCard from "@/components/AdminCard";
import CommentForm from "@/components/CommentForm";
import PageBanner from "@/components/PageBanner";

export default function Page() {
  const description = `
This year’s just concluded Africa Investment Forum Market Days—the continent’s premier investment platform—has drawn $31 billion in investment interest from African and global investors.
  
Combined with $32.8 billion from the rescheduled 2021 Africa Investment Forum Market days—which took place as virtual boardrooms in March this year—the forum has mobilized a total of $63.8
 billion of investment interest this year.

The three-day event, held in the Ivorian commercial capital, Abidjan, attracted the participation of several African heads of state and government. The leaders chaired boardrooms and led
 transactions with potential investors. They included Vice President Tiémoko Meyliet Koné of Côte d’Ivoire, who represented President Alassane Ouattara.
 
Others were President Sahle-Work Zewde of Ethiopia; President Nana Akufo-Addo of Ghana; President Emmerson Mnangagwa of Zimbabwe; Vice President Jewel Howard Taylor of Liberia; Vice President
 Philip Mpango of Tanzania; Prime Minister José Ulisses Correia e Silva n of Cabo Verde; and Prime Minister Patrick Achi of Côte d’Ivoire.

This year’s Market Days event—the third since 2018—took place under the theme: (Building Economic Resilience through Sustainable Investments.)  It was held amid global economic challenges that 
have been compounded by the impacts of climate change, the Covid-19 pandemic, and the Russia-Ukraine war.

The event showcased the Africa Investment Forum’s founding partners’ joint resolve to help unleash Africa’s investment potential in such critical sectors as infrastructure, agriculture, energy,
 education, the creative industries, sports, and transactions that champion women entrepreneurs.

The forum’s founding partners are the African Development Bank, Africa50, Afrexim Bank, the Africa Finance Corporation, the Development Bank of Southern Africa, the European Investment Bank, 
the Islamic Development Bank, and the Trade and Development Bank.

The partners said the results this year have exceeded expectations, given that the world is currently grappling with so many unprecedented economic challenges.

African Development Bank President Dr. Akinwumi Adesina commended the forum’s outcomes and the partners’ commitment.

He said: “Despite the challenges, we are not afraid, and neither have we despaired nor lost hope. We are excited and committed to a collective goal… accelerating the closure of deals to transform
 Africa and its investment landscape.”

Adesina said the Africa Investment Forum’s focus is to attract more foreign direct investment to Africa and ensure the private sector remains the driving force of that transformation.

“The private sector is Africa’s growth accelerator. We must mitigate real and perceived risks and persuade the private sector that investing in Africa is safe,” he emphasized.

Islamic Development Bank President Dr. Muhammed Sulaiman Al Jasser said in a message his organization was hopeful that “our commitment and dedication to the AIF will translate into tangible and 
measurable outcomes for the benefit of our member countries across Africa.”

Al Jasser restated the Islamic Development Bank Group’s commitment to support transformative African projects, especially those promoting resilience, financial, economic, and social sustainability.

Trade and Development Bank Group President and Chief Executive Admassu Tadesse underscored the value of the “AIF spirit” in doing more to advance and close investments.

Tadesse stressed: “Notwithstanding ongoing global crises, we have to keep our eye on the ball. We must continue to encourage and enable investment in agriculture and industry, as well as infrastructure.
 Growing our own food and manufacturing more will enable us to trade more. It will lead to less overall greenhouse gas emissions linked to imports from far away, in the process also generating more
  employment and opportunities for our peoples.”

European Investment Bank President Werner Hoyer said while travelling to COP27: “A diversity of ambitious and wide-ranging initiatives” attracted high interest at this year’s Market Days.

“At the European Investment Bank, we are excited to see how the creativity and vision of African innovators are making an impact, particularly in the area of technology which holds such great 
potential for Africa’s future,” Hoyer said.

Mohan Vivekanandan, Group Executive Origination and Coverage, Development Bank of Southern Africa, noted that a unique feature of this year’s forum was that it focused on transactions.

“It’s about the project sponsors, the project developers and how we as development financiers help them get their vision implemented to improve the quality of life of Africans, 
and how we promote economic growth, job creation and industrialization,” Vivekanandan said.

Africa Finance Corporation President and CEO Samaila Zubairu said: “The current global economic challenges indicate the critical need to build Africa’s self-sufficiency by investing
 in resilient infrastructure. Such critical investment is needed to drive Africa’s industrialization and economic prosperity.”

Africa50 CEO Alain Ebobisse said the Africa Investment Forum presented a timely platform to help scale up and speed up investments into Africa, especially as partners strive to build 
the continent’s resilience to economic shocks and climate change.

Ebobisse said: “Attracting new pools of capital into infrastructure will be critical. More specifically, Africa’s institutional investors, such as pension funds and sovereign wealth
 funds must play a critical role and will be the game changers for Africa’s infrastructure development.”

Afreximbank President Benedict Oramah said: “This year’s Africa Investment Forum reflects, in the number, attitudes and diversity of its attendees, the interest and optimism of 
global investors towards the continent and its opportunities. We close, knowing that the AIF, Africa’s largest transactional investment marketplace, continues to be a huge success.
 Moreover, the event serves as a measure of international confidence in Africa’s economic and political development, and the unmatched investment opportunities this is creating.”

Africa Investment Forum Senior Director Chinelo Anohu said: “A lot of the successes recorded by the Africa Investment Forum are domiciled in the spirit of the partnership. 
It’s up to us to ensure the continent is what it ought to be.”

Since its inception in 2018, the Africa Investment Forum platform has mobilized over $100 billion in investment interests.
  `;
  const recentNews = [
    {
      imageSrc: "/images/blog002.png",
      date: "December 14, 2022",
      title: "Africa Investment Forum 2022 draws...",
    },
  ];

  const galleryImages = [
    "/images/gallery-widget1.jpg",
    "/images/gallery-widget2.jpg",
    "/images/gallery-widget3.jpg",
    "/images/gallery-widget4.jpg",
    "/images/gallery-widget5.jpg",
    "/images/gallery-widget6.jpg",
  ];

  const archives = [
    { month: "December", year: 2022, count: 1 },
  ];
  const tags = ["AIF2022"];

  return (
    <div className="flex flex-col">
      {/* Background Section */}
     <PageBanner title="Africa Investment Forum 2022 draws $31 bilion in investor interest"/>

      {/* Main Content and Sidebar Section */}
      <div className="max-w-[95%] mx-auto mt-8 mb-8 flex flex-col lg:flex-row gap-6">
        {/* Main Content: NewsImage */}
        <div className="flex-grow w-full lg:w-[75%] border border-gray-200 rounded-lg p-6 overflow-y-auto space-y-8">
        {/* News Image Component */}
        <div className="mb-6">
          <NewsImage
            imageSrc="/images/NewsOne.jpg"
            altText="News One"
            title="Africa Investment Forum"
            date="December 14, 2022"
            category="Finance"
          />
        </div>

        {/* Port Section Component */}
        <div className="mb-6">
          <PortSection003
            category="Business Planning"
            title=""
            description={description}
          />
        </div>

        {/* Tags and Share Component */}
        <div className="flex justify-between items-center border-t border-b border-gray-300 py-4">
          <TagsAndShare tags={tags} />
        </div>

        {/* Admin Card Component */}
        <div className="border-t border-gray-300 pt-4">
          <AdminCard
            name="Afri-Rise Private Equity & Venture Capital Fund"
            role="administrator"
          />
        </div>

        {/* Comment Form Component */}
        <div className="border-t border-gray-300 pt-6">
          <CommentForm />
        </div>
      </div>


        {/* Sidebar */}
        <div className="flex-shrink-0 w-full lg:w-[25%] border border-gray-200 rounded-lg p-6 h-screen overflow-y-auto sticky top-0">
          <Sidebar
            recentNews={recentNews}
            archives={archives}
            galleryImages={galleryImages}
          />
        </div>
      </div>
    </div>
  );
}
