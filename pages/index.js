import Head from 'next/head';

import Banner from '../components/Banner';
import BeforeAfter from '../components/BeforeAfter';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import GenderTreatments from '../components/GenderTreatments';
import Header from '../components/Header';
import Imports from '../components/Imports';
import InfoCTA from '../components/InfoCTA';
import MainHero from '../components/MainHero';
import MiniCTA from '../components/MiniCTA';
import RadioFrequencyCTA from '../components/RadioFrequencyCTA';
import ServicesShortList from '../components/ServicesList';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <div>
      <Head>
        <Imports
          metaTitle="Let us Undo those unwanted changes."
          description="At Undo, Skincare Center, Tattoo Removal and Day Med Spa, we want you to look and feel your best. Our team are experts here to provide a customized treatment plan to help you get there!"
        />
      </Head>

      <div className="bg-gray-50">
        <Banner />
        <Header />

        <div className="max-w-7xl mx-auto space-y-4 bg-white">

          <MainHero />
          <MiniCTA />
          <ServicesShortList />
          <BeforeAfter
          />
          <RadioFrequencyCTA />
          <GenderTreatments />
          <InfoCTA />
          <Testimonial />
          <Contact />

          <Footer />

        </div>
      </div>
    </div>
  )
}
