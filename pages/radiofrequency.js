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
                <Imports />
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
