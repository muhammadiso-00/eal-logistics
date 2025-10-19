import ContactSection from "@/components/sections/contact/contactSection";
import DeliverSection from "@/components/sections/deliver/deliverSection";
import DocumentSection from "@/components/sections/documents/documentsSection";
import FeedbackSection from "@/components/sections/feedbacks/feedbackSection";
import HomeSection from "@/components/sections/main";
import PostersSection from "@/components/sections/posters/postersSection";
import SponsorshipSection from "@/components/sections/sponsorship/sponsorshipSection";
import TransportSecton from "@/components/sections/transport/transportSection";
import TransportSectionSecond from "@/components/sections/transportSecond/transportSecondSection";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[url('/backgrounds/hero/hero.png')] bg-no-repeat bg-bottom bg-cover min-h-screen">
        <div className="max-w-[1170px] mx-auto ">
          <HomeSection />
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto ">
        <TransportSecton />
      </div>
      <div className="relative bg-[url('/backgrounds/transport/transportSecondSection.png')] bg-center bg-cover py-20 mb-20 rounded-4xl ">
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0 rounded-4xl"></div>

        {/* content above overlay */}
        <div className="relative z-10 max-w-[1170px] mx-auto">
          <TransportSectionSecond />
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto ">
        <DocumentSection />
      </div>
      <div className="max-w-[1170px] mx-auto ">
        <FeedbackSection />
      </div>
      <div className="max-w-[1170px] mx-auto ">
        <PostersSection />
      </div>
      <div className="bg-[#CAE2E6] py-20 relative">
        <div className="max-w-[1170px] mx-auto ">
          <DeliverSection />
        </div>
          <img src="/images/deliver/boy.png" alt="" className="absolute w-[900px] h-[650px] bottom-0 right-0 " />
      </div>
      <div className="max-w-[1170px] mx-auto ">
        <SponsorshipSection />
      </div>
      <div className="bg-[#CAE2E6]">
        <div className="max-w-[1170px] mx-auto ">
          <ContactSection />
        </div>
      </div>
      
    </div>
  );
}
