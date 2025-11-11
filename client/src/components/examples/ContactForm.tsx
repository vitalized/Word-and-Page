import ContactForm from '../ContactForm';
import { Toaster } from '@/components/ui/toaster';

export default function ContactFormExample() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-serif mb-8">Contact Form</h2>
      <ContactForm />
      <Toaster />
    </div>
  );
}
