import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CTA from "@/views/home/CTA";
import Hero from "@/views/home/Hero";
import RecentDestinations from "@/views/home/RecentDestinations";
import TopDestinations from "@/views/home/TopDestinations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Container>
          <RecentDestinations />
          <CTA />
          <TopDestinations />
        </Container>
      </main>
      <Footer />
    </>
  );
}
