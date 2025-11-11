import BiographySection from '@/components/sections/BiographySection';
import SeniorPositions from '@/components/sections/SeniorPositions';
import EditorialWork from '@/components/sections/EditorialWork';

export default function About() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24 text-center">
          <h1 data-testid="text-about-title">
            About
          </h1>
        </div>

        <BiographySection />
        <SeniorPositions />
        <EditorialWork />
      </div>
    </div>
  );
}
