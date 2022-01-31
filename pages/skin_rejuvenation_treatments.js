import Head from 'next/head';

import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Imports from '../components/Imports';
import InfoCTA from '../components/InfoCTA';

export default function SkinRejuvenationTreatments() {
    return (
        <div>
            <Head>
                <Imports
                    metaTitle="Skin Rejuvenation Treatments and Services"
                    description="Treatments include: Skin tightening, Cellulite reduction, Acne Scars, Wrinkles, Collagen, Oxygeneo Hydrating, Botox, and many more!"
                />
            </Head>

            <div className="bg-gray-50">
                <Banner />
                <Header />

                <div className="max-w-7xl mx-auto space-y-4 bg-white">





                    <InfoCTA />
                    <Contact />
                    <Footer />

                </div>
            </div>
        </div>
    );
}
