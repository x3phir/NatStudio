import { Sparkles, Users, Palette, Zap, Image, Gift } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Asset Ilustrasi',
      description: 'Custom vector illustrations and digital assets perfect for projects'
    },
    {
      icon: Users,
      title: 'Character Commission',
      description: 'Adorable chibi and anime-style character designs tailored to your vision'
    },
    {
      icon: Palette,
      title: 'Sticker Packs',
      description: 'Cute printable or digital sticker packs for merchandise or personal use'
    },
    {
      icon: Gift,
      title: 'Templates',
      description: 'Ready-to-use templates for social media, presentations, and more'
    },
    {
      icon: Image,
      title: 'Stock Photos/Videos',
      description: 'High-quality digital assets for content creators and designers'
    },
    {
      icon: Zap,
      title: 'Custom Design',
      description: 'Unique design solutions for your specific creative needs'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our amazing collection of creative digital products and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-6 bg-white rounded-3xl border-2 border-pink-100 hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-gray-600">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
