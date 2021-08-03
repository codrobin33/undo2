import Head from 'next/head';

import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Imports from '../components/Imports';
import InfoCTA from '../components/InfoCTA';
import ProductLogoCloud from '../components/ProductLogoCloud';

export default function SkinCareProducts() {
    return (
        <div>
            <Head>
                <Imports
                    metaTitle="Skincare Products"
                    description="We carry many product lines including EltaMD, Revision, Elixir and iS CLINICAL."
                />
            </Head>

            <div className="bg-gray-50">
                <Banner />
                <Header />

                <div className="max-w-7xl mx-auto space-y-4 bg-white">

                    <ProductLogoCloud />



                    <InfoCTA />
                    <Contact />
                    <Footer />

                </div>
            </div>
        </div>
    );
}
