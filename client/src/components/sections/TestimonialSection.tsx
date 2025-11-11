export default function TestimonialSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote data-testid="text-testimonial-quote">
          <p>"Poppy is a fantastic collaborator! Extremely professional, efficient, and trustworthy. Her editorial efficiency has ensured Variety's standards are not only maintained but improved across all projects."</p>
          <cite data-testid="text-testimonial-author">
            — Holly Dillon, Executive Producer, Variety
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
