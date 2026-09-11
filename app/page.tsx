import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechSection from "./components/TechSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TechSection />
      <Footer />
    </main>
  );
}