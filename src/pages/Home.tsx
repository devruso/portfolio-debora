import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import WhatIsPsychotherapy from '../components/WhatIsPsychotherapy';
import TCCApproach from '../components/TCCApproach';
import OnlineTherapyBenefits from '../components/OnlineTherapyBenefits';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Layout from '../Layout';
import "../index.css"
export default function Home() {
  return (
    <Layout>
      <Header />
      <Hero />
      <AboutMe />
      <Education />
      <WhatIsPsychotherapy />
      <TCCApproach />
      <OnlineTherapyBenefits />
      <Testimonials />
      <Contact />
      <Footer />
    </Layout>
  );
}