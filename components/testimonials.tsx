import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Content Creator',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      rating: 5,
      text: 'NatStudio created the most adorable character pack for my YouTube channel. The quality is exceptional and Nat was super responsive to my feedback!'
    },
    {
      name: 'Alex Rivera',
      role: 'Game Developer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      rating: 5,
      text: 'The custom character designs for our indie game are absolutely beautiful. Nat&apos;s attention to detail and understanding of the art style was incredible.'
    },
    {
      name: 'Jordan Kim',
      role: 'Brand Manager',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
      rating: 5,
      text: 'We commissioned a full sticker pack for our brand and it exceeded all expectations. Highly recommend NatStudio for any digital art needs!'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            What Clients Say
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community of satisfied clients from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border-2 border-pink-100 hover:border-primary transition-all hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-body text-gray-700 mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading text-foreground font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl text-foreground mb-3">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'What is your turnaround time?',
                a: 'Most projects take 1-2 weeks depending on complexity. Rush orders available on request.'
              },
              {
                q: 'Do you allow commercial use?',
                a: 'Yes! All packages include commercial usage rights so you can use artwork for your business.'
              },
              {
                q: 'What file formats do you deliver?',
                a: 'PNG, JPEG, PSD, SVG, and other formats as needed. We provide both digital and printable versions.'
              },
              {
                q: 'What is your revision policy?',
                a: 'Basic tier gets 2 free revisions, Standard unlimited, and Premium tier includes full support.'
              },
              {
                q: 'Do you work internationally?',
                a: 'Absolutely! We work with clients worldwide. Payment accepted in multiple currencies.'
              },
              {
                q: 'How do I get started?',
                a: 'Simply contact us via email or WhatsApp to discuss your project and get a custom quote!'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-pink-100"
              >
                <h4 className="font-heading text-lg text-foreground mb-2">
                  {faq.q}
                </h4>
                <p className="font-body text-gray-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
