export default function TestimonialSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-2xl md:text-3xl font-serif font-light italic mb-8 leading-relaxed" data-testid="text-testimonial-quote">
          "Poppy is a fantastic collaborator! Extremely professional, efficient, and trustworthy. Her editorial efficiency has ensured Variety's standards are not only maintained but improved across all projects."
        </blockquote>
        <cite className="text-muted-foreground font-light not-italic" data-testid="text-testimonial-author">
          — Holly Dillon, Executive Producer, Variety
        </cite>
      </div>
    </section>
  );
}
