import { useState } from 'react';
import { useActor } from '../hooks/useActor';
import { PrimaryButton } from '../components/site/PrimaryButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2 } from 'lucide-react';

export function JoinNetworkPage() {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    specialties: '',
    portfolioLink: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;

    setIsSubmitting(true);
    try {
      await actor.submitNetworkApplication(
        formData.name,
        formData.email,
        formData.location,
        formData.specialties,
        formData.portfolioLink,
        formData.message
      );
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting application:', error);
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

  if (isSuccess) {
    return (
      <div className="flex flex-col">
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="flex justify-center">
                <CheckCircle2 className="w-20 h-20 text-foreground" />
              </div>
              <h1>Application Received</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Thank you for your interest in joining the Vertex Media network. Our team will
                review your application and reach out within 5-7 business days.
              </p>
              <p className="text-muted-foreground">
                We receive a high volume of applications and only accept creators who meet our
                exacting standards. If selected, you'll be invited to complete our onboarding
                process and join our nationwide network.
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
            <h1>Join Our Network</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Elite photographers and videographers wanted. Curated approvals. National opportunity.
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
                <h2 className="text-3xl">What We're Looking For</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Vertex Media is building a curated network of the best photographers and
                  videographers in the country. We're selective, intentional, and committed to
                  quality over quantity.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Elite Skill Level</h3>
                  <p className="text-muted-foreground">
                    You're not just good—you're exceptional. Your portfolio demonstrates mastery
                    of composition, lighting, and storytelling.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Professional Reliability</h3>
                  <p className="text-muted-foreground">
                    You show up on time, communicate clearly, and deliver on your commitments.
                    Our clients expect excellence, and so do we.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Growth Mindset</h3>
                  <p className="text-muted-foreground">
                    You're eager to learn, adapt, and improve. We provide training, feedback,
                    and support to help you grow with us.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">National Ambition</h3>
                  <p className="text-muted-foreground">
                    You're ready to be part of something bigger—a national network that amplifies
                    your work and opens doors to opportunities across the country.
                  </p>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> We review every application carefully. Due to high volume,
                  we can only respond to candidates who meet our criteria. If selected, you'll be
                  invited to complete our onboarding process.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl">Apply Now</h2>
                <p className="text-muted-foreground">
                  Submit your application below. We'll review and reach out within 5-7 business days.
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
                  <Label htmlFor="location">Location / Market *</Label>
                  <Input
                    id="location"
                    name="location"
                    required
                    placeholder="e.g., Los Angeles, CA"
                    value={formData.location}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialties">Specialties *</Label>
                  <Input
                    id="specialties"
                    name="specialties"
                    required
                    placeholder="e.g., Sports, Brand Content, Events"
                    value={formData.specialties}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolioLink">Portfolio Link *</Label>
                  <Input
                    id="portfolioLink"
                    name="portfolioLink"
                    type="url"
                    required
                    placeholder="https://"
                    value={formData.portfolioLink}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Yourself *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Why do you want to join Vertex Media? What makes you exceptional?"
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
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
