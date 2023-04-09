import Head from 'next/head'
import Footer from '@/components/Footer/footer'
import NavigationBar from '@/components/Navbar/navbar'
import LandingBanner from '@/components/LandingBanner/banner'
import AboutUs from '@/components/LandingAboutUs/about'
import Events from '@/components/LandingEvent/event'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <LandingBanner />
      <AboutUs />
      <Events />
      <Footer />
    </>
  )
}
