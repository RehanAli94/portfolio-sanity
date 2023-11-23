import About from '../components/About';
import Blogs from '../components/Blogs';
import Contacts from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Devider from '../components/Devider';
import { getSocials } from '../utills/sanity-utills';

export default async function Home() {

  const socialData = await getSocials();

  return (
    <>
      <div id='home' className='w-full scrollbar scroll-smooth scrollbar-track-accent/60 scrollbar-thumb-violet-500 overflow-x-hidden bg-[#f1f6f9] h-screen z-0'>
        <Navbar props={socialData} />
        <Header />
        <Devider />
        <About  />
        <Devider />
        <Skills props={socialData} />
        <Devider />
        <Projects props={socialData} />
        <Devider />
        <Blogs props={socialData} />
        <Devider />
        <Contacts />
        <Footer props={socialData} />
      </div>

    </>
  );
}
