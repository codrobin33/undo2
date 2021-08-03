import Head from 'next/head';

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';

import RadioFrequencyComponent from '../components/RadioFrequencyComponent';
import ImageHeader from '../components/ImageHeader';
import Imports from '../components/Imports';

export default function RadioFrequency() {
    return (
        <div>
            <Head>
                <Imports
                    metaTitle="How Does Radiofrequency Body Contouring Work?"
                    description="This is a non-invasive technique that uses heat and RF energy to shape your body by getting rid of undesirable fat cells. The technology also smooths your skin where cellulite or sagging may exist."
                />
            </Head>

            <div className="bg-gray-50">
                <Banner />
                <Header />

                <div className="max-w-7xl mx-auto space-y-4 bg-white">

                    <ImageHeader />

                    <RadioFrequencyComponent />

                    <Footer />

                </div>
            </div>
        </div>
    )
}
