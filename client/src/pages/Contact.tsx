import ContactForm from '@/components/ContactForm';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6" data-testid="text-contact-title">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Available for commissions and collaborations. Get in touch to discuss your editorial project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-serif mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4" data-testid="section-location">
                  <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-muted-foreground font-light">
                      London, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="section-email">
                  <Mail className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a
                      href="mailto:hello@wordandpage.com"
                      className="text-muted-foreground font-light hover:text-foreground transition-colors"
                      data-testid="link-email"
                    >
                      hello@wordandpage.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-medium mb-3">Office Hours</h3>
              <div className="space-y-2 text-sm text-muted-foreground font-light">
                <div className="flex justify-between">
                  <span>Monday — Friday</span>
                  <span>9:00 — 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekend</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-medium mb-3">Response Time</h3>
              <p className="text-sm text-muted-foreground font-light">
                I typically respond to inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
