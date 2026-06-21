import { Mail, MessageSquare, Pencil, Clock, CheckCircle } from 'lucide-react'

export function HowToOrder() {
  const steps = [
    {
      icon: Mail,
      number: '1',
      title: 'Send Inquiry',
      description: 'Contact me via email or WhatsApp with your project details'
    },
    {
      icon: Pencil,
      number: '2',
      title: 'Discuss Details',
      description: 'We&apos;ll discuss your vision, style preferences, and requirements'
    },
    {
      icon: Clock,
      number: '3',
      title: 'Get Quotation',
      description: 'Receive a custom quote based on your specific project needs'
    },
    {
      icon: MessageSquare,
      number: '4',
      title: 'Payment & Creation',
      description: 'Payment confirmation, then I&apos;ll start creating your artwork'
    },
    {
      icon: CheckCircle,
      number: '5',
      title: 'Delivery & Support',
      description: 'Receive your completed work and enjoy lifetime support'
    }
  ]

  return (
    <section id="how-to-order" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            How to Order
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Simple 5-step process to get your custom artwork
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-3xl border-2 border-pink-100 p-6 text-center relative z-10 hover:border-primary transition-all hover:shadow-lg">
                    {/* Number Circle */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center mx-auto mb-4 -mt-10 relative">
                      <span className="font-heading text-xl font-bold text-white">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />

                    {/* Content */}
                    <h3 className="font-heading text-lg text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile Connector */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-6 mb-6">
                      <div className="w-1 h-8 bg-gradient-to-b from-pink-300 to-purple-300" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 text-center">
          <h3 className="font-heading text-2xl text-foreground mb-3">
            Ready to create something amazing?
          </h3>
          <p className="font-body text-gray-600 mb-6">
            Let&apos;s turn your ideas into beautiful artwork
          </p>
          <a
            href="#contact"
            className="font-body inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full transition-colors"
          >
            Start Your Project Now
          </a>
        </div>
      </div>
    </section>
  )
}
