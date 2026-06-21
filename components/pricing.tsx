import { Check } from 'lucide-react'

export function Pricing() {
  const pricingTiers = [
    {
      name: 'Basic',
      price: 'Rp150,000',
      description: 'Perfect for simple designs',
      features: [
        'Single illustration',
        'Basic revisions (2x)',
        'Digital file delivery',
        'Commercial use allowed'
      ],
      highlighted: false
    },
    {
      name: 'Standard',
      price: 'Rp300,000',
      description: 'Most popular choice',
      features: [
        'Multiple illustrations',
        'Unlimited revisions',
        'Digital + printable files',
        'Commercial use allowed',
        'Express delivery option'
      ],
      highlighted: true
    },
    {
      name: 'Premium',
      price: 'Rp500,000',
      description: 'Full custom package',
      features: [
        'Unlimited illustrations',
        'Unlimited revisions',
        'All file formats',
        'Commercial + merchandise rights',
        'Priority support',
        'Custom animation option'
      ],
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Simple Pricing
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your creative needs. All prices are customizable based on project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-3xl transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-gradient-to-br from-pink-400 to-purple-400 p-0.5 scale-105 shadow-xl'
                  : 'bg-white border-2 border-pink-100 hover:border-primary'
              }`}
            >
              <div className={`p-8 rounded-3xl h-full ${tier.highlighted ? 'bg-white' : ''}`}>
                <div className="mb-6">
                  <h3 className={`font-heading text-2xl mb-2 ${tier.highlighted ? 'text-primary' : 'text-foreground'}`}>
                    {tier.name}
                  </h3>
                  <p className="font-body text-sm text-gray-600 mb-4">
                    {tier.description}
                  </p>
                  <p className={`font-body text-4xl font-bold ${tier.highlighted ? 'text-primary' : 'text-foreground'}`}>
                    {tier.price}
                  </p>
                </div>

                <a
                  href="#contact"
                  className={`block w-full text-center font-body py-3 rounded-full font-semibold transition-colors mb-8 ${
                    tier.highlighted
                      ? 'bg-primary hover:bg-secondary text-white'
                      : 'bg-pink-100 hover:bg-primary hover:text-white text-foreground'
                  }`}
                >
                  Get Started
                </a>

                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-primary' : 'text-primary'}`} />
                      <span className="font-body text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-gray-600">
            Need a custom package? <a href="#contact" className="text-primary hover:text-secondary font-semibold">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
