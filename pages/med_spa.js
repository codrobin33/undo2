import Head from 'next/head';

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import GenderTreatments from '../components/GenderTreatments';
import Header from '../components/Header';
import Imports from '../components/Imports';
import InfoCTA from '../components/InfoCTA';
import MainHero from '../components/MainHero';

export default function MedSpa() {
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
                    <InfoCTA />
                    <GenderTreatments />

                    <Footer />

                </div>
            </div>
        </div>
    )
}
