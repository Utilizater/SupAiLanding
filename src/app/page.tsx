import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </Box>
  );
}
