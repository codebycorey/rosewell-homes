import Head from 'next/head'
import Hero from '../components/hero';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer';
import Services from '../components/services';
import Contact from '../components/contact';

const SITE_NAME: string = 'Rosewell Homes, Inc';
const SITE_TITLE: string = "Rosewell Homes, Inc | Commercial & Residential Contractor";
const SITE_DESCRIPTION: string =
    "Commercial & Residential Contractor | Our promise is reliable, quality work that you know will be completed on time and as scheduled.";
const SITE_IMAGE: string = '/logo_with_description.png';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Rosewell Homes, Inc</title>
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:title" content={SITE_TITLE} />
                <meta property="og:description" content={SITE_DESCRIPTION} />
                <meta property="og:image" content={SITE_IMAGE} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={SITE_NAME} />
                <meta name="twitter:title" content={SITE_TITLE} />
                <meta name="twitter:description" content={SITE_DESCRIPTION} />
                <meta property="twitter:image" content={SITE_IMAGE} />
            </Head>
            <Hero />
            <Services />
            <Contact />
            <Testimonials />
            <Footer />
        </div>
    );
}
