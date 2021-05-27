import Head from 'next/head';

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';

import RadioFrequencyComponent from '../components/RadioFrequencyComponent';
import ImageHeader from '../components/ImageHeader';

export default function RadioFrequency() {
    return (
        <div>
            <Head>
                <title>Undo, Skincare Center</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-gray-50">
                <Banner />
                <Header />

                <ImageHeader />

                <RadioFrequencyComponent />

                <Footer />

            </div>
        </div>
    )
}
