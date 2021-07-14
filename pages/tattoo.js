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
import MainHero from '../components/MainHero';
import TattooPricing from '../components/TattooPricing';
import Contact from '../components/Contact';

export default function Tattoo() {
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
                    <TattooImageCTA />
                    <CommonReasonsTattooRemoval />
                    <VideoHero />
                    <TattooDeviceInfo />
                    <TattooCTA />
                    <TattooPricing />

                    <Contact />
                    <Footer />

                </div>
            </div>
        </div>
    )
}
