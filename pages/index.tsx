import Head from 'next/head'
import Hero from '../components/hero';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer';
import Services from '../components/services';
import Contact from '../components/contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  )
}
