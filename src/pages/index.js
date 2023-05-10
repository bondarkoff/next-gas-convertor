import Head from 'next/head';

import 'css-shortcut';

import Header from '@/components/ui/header/Header';
import FuelTypeConverter from '@/components/fuelTypeConverter/FuelTypeConverter';
import DistanceCalculator from '@/components/distanceCalculator/DistanceCalculator';

export default function Home() {
    return (
        <>
            <Head>
                <title>Gas Converter</title>
                <meta name='description' content='Gas & Price Converter' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <main>
                <div className='container'>
                    <FuelTypeConverter />
                    <DistanceCalculator />
                </div>
            </main>
        </>
    );
}
