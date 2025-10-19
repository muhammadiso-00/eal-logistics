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
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <HomeSection />
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        <TransportSecton />
      </div>
      <div className="relative bg-[url('/backgrounds/transport/transportSecondSection.png')] bg-center bg-cover py-10 sm:py-16 lg:py-20 mb-10 sm:mb-16 lg:mb-20 rounded-2xl sm:rounded-3xl lg:rounded-4xl mx-4 sm:mx-6 lg:mx-0">
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0 rounded-2xl sm:rounded-3xl lg:rounded-4xl"></div>

        {/* content above overlay */}
        <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <TransportSectionSecond />
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        <DocumentSection />
      </div>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        <FeedbackSection />
      </div>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        <PostersSection />
      </div>
      <div className="bg-[#CAE2E6] py-10 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <DeliverSection />
        </div>
          <img src="/images/deliver/boy.png" alt="" className="absolute w-[500px] h-[360px] sm:w-[700px] sm:h-[500px] lg:w-[900px] lg:h-[650px] bottom-0 right-0 hidden md:block opacity-50 md:opacity-100" />
      </div>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        <SponsorshipSection />
      </div>
      <div className="bg-[#CAE2E6]">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <ContactSection />
        </div>
      </div>
      
    </div>
  );
}
