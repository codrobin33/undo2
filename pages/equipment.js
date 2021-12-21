import Head from 'next/head';

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Imports from '../components/Imports';
import InfoCTA from '../components/InfoCTA';
import Contact from '../components/Contact';
import EquipmentHeader from '../components/EquipmentHeader';

export default function Equipment() {
    return (
        <div>
            <Head>
                <Imports />
            </Head>

            <div className="bg-gray-50">
                <Banner />
                <Header />

                <div className="max-w-7xl mx-auto space-y-4 bg-white">
                    <EquipmentHeader />

                    <InfoCTA />

                    <Contact />
                    <Footer />

                </div>
            </div>
        </div>
    );
};