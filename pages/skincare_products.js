import Head from 'next/head';

import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Imports from '../components/Imports';
import InfoCTA from '../components/InfoCTA';
import ProductLogoCloud from '../components/ProductLogoCloud';
import ProductDescriptions from '../components/ProductDescriptions';
import ProductHeader from '../components/ProductHeader';
import TextImageHeader from '../components/TextImageHeader';
import Transition from '../components/Transition';

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
                <Header />

                <div className="max-w-7xl mx-auto bg-white">
                    <TextImageHeader src="img/products.jpg" />
                    <Transition />

                    <div className="space-y-4">
                        <ProductDescriptions />

                        <ProductLogoCloud />

                        <InfoCTA />
                        <Contact />
                    </div>
                    <Footer />

                </div>
            </div>
        </div>
    );
}
