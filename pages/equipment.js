import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Imports from '../components/Imports';
import Contact from '../components/Contact';
import EquipmentHeader from '../components/EquipmentHeader';
import Transition from '../components/Transition';
import TextImageHeader from '../components/TextImageHeader';

export default function Equipment() {
    return (
        <div>
            <Head>
                <Imports />
            </Head>

            <div className="bg-gray-50">
                <Header />

                <div className="max-w-7xl mx-auto bg-white">

                    <TextImageHeader src="img/chair.jpg" />
                    <Transition />

                    <div className="space-y-4">

                        <EquipmentHeader />
                        <Contact />
                    </div>
                    <Footer />

                </div>
            </div>
        </div>
    );
};