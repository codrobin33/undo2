import Head from 'next/head';

import BeforeAfter from '../components/BeforeAfter';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import GenderTreatments from '../components/GenderTreatments';
import Header from '../components/Header';
import Imports from '../components/Imports';
import InfoCTA from '../components/InfoCTA';
import MiniCTA from '../components/MiniCTA';
import RadioFrequencyCTA from '../components/RadioFrequencyCTA';
import ServicesShortList from '../components/ServicesList';
import Testimonial from '../components/Testimonial';
import TextImageHeader from '../components/TextImageHeader';
import Transition from '../components/Transition';

export default function Home() {
  return (
    <div>
      <Head>
        <Imports
          metaTitle="Let us Undo those unwanted changes."
          description="At Undo Skincare Center we want you to look and feel your best. Our team are experts here to provide a customized treatment plan to help you get there!"
        />
      </Head>

      <div className="bg-gray-50">
        <Header />

        <div className="max-w-7xl mx-auto bg-white relative overflow-hidden">
          <TextImageHeader />
          <Transition />

          <div className="space-y-4">
            <ServicesShortList />
            <MiniCTA />
            <BeforeAfter />
            <RadioFrequencyCTA />
            <GenderTreatments />
            <InfoCTA />
            <Testimonial />
            <Contact />
          </div>

          <Footer />

        </div>
      </div>
    </div>
  );
};
