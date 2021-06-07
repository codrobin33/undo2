import Head from 'next/head';

import Banner from '../components/Banner';
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
        <Imports />
      </Head>

      <div className="bg-gray-50">
        <Banner />
        <Header />

        <div className="max-w-7xl mx-auto space-y-4 bg-white">

          <MainHero />
          <MiniCTA />
          <ServicesShortList />
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
