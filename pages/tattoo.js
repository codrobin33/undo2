import Head from 'next/head';

import Banner from '../components/Banner';
import CommonReasonsTattooRemoval from '../components/CommonReasonsTattooRemoval';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Imports from '../components/Imports';
import TattooCTA from '../components/TattooCTA';
import TattooDeviceInfo from '../components/TattooDeviceInfo';
import TattooImageCTA from '../components/TattooImageCTA';
import VideoHero from '../components/VideoHero';
import TattooPricing from '../components/TattooPricing';
import Contact from '../components/Contact';
import BeforeAfter from '../components/BeforeAfter';
import InfoCTA from '../components/InfoCTA';
import SimpleLightCTA from '../components/SimpleLightCTA';
import TextImageHeader from '../components/TextImageHeader';
import Transition from '../components/Transition';

export default function Tattoo() {
    return (
        <div>
            <Head>
                <Imports
                    metaTitle="We are the experts in Tattoo removal"
                    description="At Undo Skincare Center, Tattoo Removal and Day Med Spa, we want you to look and feel your best. Our team are experts here to provide a customized treatment plan to help you get there!"
                />
            </Head>

            <div className="bg-gray-50">
                <Banner />
                <Header />

                <div className="max-w-7xl mx-auto bg-white">
                    <div className="hidden md:block">
                        <VideoHero />
                    </div>

                    <div className="block md:hidden">
                        <TextImageHeader src="/img/003.jpg" />
                        <Transition />
                    </div>

                    <div className="space-y-4">
                        <SimpleLightCTA />

                        <BeforeAfter />
                        <CommonReasonsTattooRemoval />

                        <TattooImageCTA />


                        <TattooDeviceInfo />
                        <TattooCTA />
                        <TattooPricing />
                        <InfoCTA />

                        <Contact />
                    </div>
                    <Footer />

                </div>
            </div>
        </div>
    );
};
