import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Imports from '../components/Imports';
import Acne from '../components/Acne';
import Contact from '../components/Contact';
import BeforeAfter from '../components/BeforeAfter';
import TextImageHeader from '../components/TextImageHeader';
import Transition from '../components/Transition';
import MiniCTA from '../components/MiniCTA';

export default function MedSpa() {
    return (
        <div>
            <Head>
                <Imports />
            </Head>

            <div className="bg-gray-50">
                <Header />

                <div className="max-w-7xl mx-auto bg-white">
                    <TextImageHeader src='img/skin_flowers.jpg' />
                    <Transition />

                    <div className="space-y-4">
                        <Acne />
                        <MiniCTA />
                        <BeforeAfter />

                        <Contact />
                    </div>
                    <Footer />

                </div>
            </div>
        </div>
    )
}
