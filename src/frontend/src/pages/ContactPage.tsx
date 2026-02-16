import { useState } from 'react';
import { useActor } from '../hooks/useActor';
import { PrimaryButton } from '../components/site/PrimaryButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Mail, MapPin } from 'lucide-react';
import { SiInstagram, SiTiktok, SiFacebook } from 'react-icons/si';

export function ContactPage() {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    desiredDate: '',
    budgetRange: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;

    setIsSubmitting(true);
    try {
      await actor.submitContact(
        formData.name,
        formData.email,
        formData.company || null,
        formData.projectType,
        formData.desiredDate || null,
        formData.budgetRange || null,
        formData.message
      );
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col">
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="flex justify-center">
                <CheckCircle2 className="w-20 h-20 text-foreground" />
              </div>
              <h1>Message Received</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Thank you for reaching out. Our team will review your inquiry and respond within
                24-48 hours.
              </p>
              <p className="text-muted-foreground">
                For urgent requests, please call us directly or reach out via social media.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1>Contact Us</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Ready to book a shoot? Have questions? Let's talk.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl">Get in Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Vertex Media operates nationwide, delivering elite media production in markets
                  across the United States. Whether you need coverage in one city or fifty, we're
                  ready to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Nationwide Operations</h3>
                    <p className="text-muted-foreground">
                      Coverage in 50+ markets across the United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Response Time</h3>
                    <p className="text-muted-foreground">
                      We respond to all inquiries within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <h3 className="font-bold">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="TikTok"
                  >
                    <SiTiktok size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <SiInstagram size={24} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <SiFacebook size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company / Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => handleSelectChange('projectType', value)}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sports">Sports Media Production</SelectItem>
                      <SelectItem value="athlete">Athlete Highlights</SelectItem>
                      <SelectItem value="brand">Brand Content</SelectItem>
                      <SelectItem value="event">Event Coverage</SelectItem>
                      <SelectItem value="retainer">Monthly Retainer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="desiredDate">Desired Date</Label>
                  <Input
                    id="desiredDate"
                    name="desiredDate"
                    type="date"
                    value={formData.desiredDate}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budgetRange">Budget Range</Label>
                  <Select
                    value={formData.budgetRange}
                    onValueChange={(value) => handleSelectChange('budgetRange', value)}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-plus">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                  />
                </div>

                <PrimaryButton
                  type="submit"
                  disabled={isSubmitting || !actor}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
