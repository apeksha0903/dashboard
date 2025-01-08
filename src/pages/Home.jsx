import Navbar from '../components/Navbar';
import Hero_section from '../components/Hero_section';
import SocialMedia from '../components/Social_media';
import Features from '../components/Features';
import Testimonial from '../components/Testi-monial';
import Faq from '../components/Faq';
import Blog from '../components/Blog';
import Free_trial from '../components/Free_trial';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero_section/>
      <SocialMedia/>
      <Features/>
      <Testimonial/>
      <Faq/>
      <Blog/>
      <Free_trial/>
      <Footer/>
     </>
  );
};

export default Home; 