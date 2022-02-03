import Head from 'next/head';

import Footer from '../components/Footer';
import GenderTreatments from '../components/GenderTreatments';
import Header from '../components/Header';
import Imports from '../components/Imports';
import InfoCTA from '../components/InfoCTA';
import Contact from '../components/Contact';
import BeforeAfter from '../components/BeforeAfter';
import TextImageHeader from '../components/TextImageHeader';
import Transition from '../components/Transition';

export default function MedSpa() {
    return (
        <div>
            <Head>
                <Imports />
            </Head>

            <div className="bg-gray-50">
                <Header />

                <div className="max-w-7xl mx-auto bg-white">
                    <TextImageHeader src="img/lum_smile2.jpg" />
                    <Transition />

                    <div className="space-y-4">
                        <GenderTreatments />
                        <InfoCTA />
                        <BeforeAfter />

                        <Contact />
                    </div>
                    <Footer />

                </div>
            </div>
        </div>
    )
}
