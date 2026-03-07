import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ToppersSection from "@/components/home/ToppersSection";
import CampusHighlights from "@/components/home/CampusHighlights";
import LeadershipSection from "@/components/home/LeadershipSection";
import TimelineSection from "@/components/home/TimelineSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsSection from "@/components/home/StatsSection";
import EventsSection from "@/components/home/EventsSection";
import AdmissionCTA from "@/components/home/AdmissionCTA";

const Index = () => (
  <Layout>
    <HeroSection />
    <ToppersSection />
    <CampusHighlights />
    <LeadershipSection />
    <TimelineSection />
    <WhyChooseUs />
    <StatsSection />
    <EventsSection />
    <AdmissionCTA />
  </Layout>
);

export default Index;
