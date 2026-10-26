import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CandidateProfile from "../components/CandidateProfile";
import CampaignPromises from "../components/CampaignPromises";
import Activities from "../components/Activities";
import SupportSection from "../components/SupportSection";
import Footer from "../components/Footer";
import PosterDownload from "../components/PosterDownload";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        رفتن به محتوای اصلی
      </a>

      <div className="site-shell">
        <div className="ambient ambient-one" aria-hidden="true" />
        <div className="ambient ambient-two" aria-hidden="true" />

        <Navbar />

        <main id="main-content">
          <Hero />
          <CandidateProfile />
          <CampaignPromises />
          <Activities />
          <PosterDownload />
          <SupportSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
