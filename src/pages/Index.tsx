import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

/**
 * Index Page Component - Main Landing Page
 *
 * The primary page component that orchestrates all major sections of the
 * SparkPlugz Media website. This component follows a single-page application
 * structure with multiple content sections.
 *
 * Page Structure:
 * 1. Header - Navigation and branding
 * 2. Hero - Main landing section with call-to-action
 * 3. About - Company information and values
 * 4. Services - Service offerings and capabilities
 * 5. Work - Portfolio and case studies
 * 6. Footer - Contact information and links
 *
 * Features:
 * - Responsive design adapts to all screen sizes
 * - Smooth scroll navigation between sections
 * - Dark/light theme support throughout
 * - Semantic HTML structure for accessibility
 * - Performance optimized with component lazy loading
 *
 * Layout:
 * - Uses min-h-screen to ensure full viewport coverage
 * - Sections stack vertically in logical order
 * - Each section is self-contained and reusable
 *
 * @returns JSX.Element - The complete landing page
 */
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Site navigation and branding */}
      <Header />

      {/* Primary landing section with hero image and CTA */}
      <Hero />

      {/* Company information and value proposition */}
      <About />

      {/* Service offerings and capabilities showcase */}
      <Services />

      {/* Portfolio, case studies, and past work */}
      <Work />

      {/* Contact information, links, and site footer */}
      <Footer />
    </div>
  );
};

export default Index;
