import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhySMEs from '@/components/WhySMEs'
import WhyUs from '@/components/WhyUs'
import HowItWorks from '@/components/HowItWorks'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhySMEs />
        <WhyUs />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
