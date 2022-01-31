import Head from 'next/head';

import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Imports from '../components/Imports';
import InfoCTA from '../components/InfoCTA';
import ServicesHeader from '../components/ServicesHeader';
import ServicesList from '../components/ServicesList';
import Transition from '../components/Transition';

export default function Home() {
    return (
        <div>
            <Head>
                <Imports
                    metaTitle="A breakdown of services and products offered"
                    description="Our team is here to help you look and feel your best. Our team are experts here to provide a customized treatment plan to help you get there!"
                />
            </Head>

            <div className="bg-gray-50">
                <Header />

                <div className="max-w-7xl mx-auto bg-white">

                    <ServicesHeader />
                    <Transition />

                    <div className="space-y-4">
                        <ServicesList />
                        <Contact />
                    </div>

                    <Footer />

                </div>
            </div>
        </div>
    )
}
