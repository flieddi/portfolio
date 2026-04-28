import { AboutSection } from "@/components/AboutSection";
import { ContactsSection } from "@/components/ContactsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Header />
      <div
        id="top"
        className="relative mx-auto flex min-h-screen w-full max-w-[402px] flex-col items-center overflow-x-hidden rounded-[62px] bg-white pt-16"
      >
        <main className="flex w-full flex-1 flex-col items-center">
          <Hero />
          <ProjectsSection />
          <AboutSection />
          <ContactsSection />
          <Footer />
        </main>
      </div>
    </>
  );
}
