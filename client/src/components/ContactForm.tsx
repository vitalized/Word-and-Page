import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const submitContactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: 'Message sent!',
        description: "Thank you for your inquiry. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    },
    onError: (error: any) => {
      toast({
        title: 'Error sending message',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    submitContactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium uppercase tracking-wider">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="font-light"
          data-testid="input-name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium uppercase tracking-wider">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="font-light"
          data-testid="input-email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium uppercase tracking-wider">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="font-light resize-none"
          data-testid="input-message"
        />
      </div>

      <Button
        type="submit"
        disabled={submitContactMutation.isPending}
        className="w-full md:w-auto px-12"
        data-testid="button-submit"
      >
        {submitContactMutation.isPending ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
