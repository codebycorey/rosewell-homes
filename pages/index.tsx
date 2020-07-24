import Head from 'next/head'
import Hero from '../components/hero';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer';
import Services from '../components/services';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}
