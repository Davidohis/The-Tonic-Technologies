import Acomplishments from "../components/Acomplishments/Acomplishments";
import HeroSection from "../components/Hero/Hero";
import { Layout } from "../layout/Layout";
import BlogSections from "../components/Blog";
import OurServicesSections from "../components/OurServices";
import TestimonySections from "../components/Testimony";
import CustomersSection from "../components/Customers";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Acomplishments />
      <OurServicesSections />
      <TestimonySections />
      <CustomersSection />
      <BlogSections />
    </Layout>
  );
};

export default Home;
