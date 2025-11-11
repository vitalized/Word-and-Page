import HeroSection from '@/components/sections/HeroSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import TestimonialSection from '@/components/sections/TestimonialSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      <TestimonialSection />
    </div>
  );
}
