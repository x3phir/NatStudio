import Image from 'next/image'

export function Portfolio() {
  const portfolioItems = [
    {
      title: 'Mermaid & Friends Sticker Pack',
      category: 'Sticker Pack',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mermaid%20%26%20friends%20Sticker%20Pack-sWFeRWiMDCk0IHy2K4zbFQT4tl7o59.jpeg'
    },
    {
      title: 'Full Body Chibi Character',
      category: 'Character Commission',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Full%20Body%20Chibi%20Character%20Commision-WwJ5Faz8Ynyjo1s4ctO3q9TczmlCJc.jpeg'
    },
    {
      title: 'Half Body Chibi Character',
      category: 'Character Commission',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Half%20Body%20CHibi%20Character%20Commision-y4GwtURVJZshW2vgSwFUTlTp6omwTK.jpeg'
    }
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Portfolio
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent work and creative projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden border-2 border-pink-100 hover:border-primary transition-all hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-gradient-to-t from-white via-white to-transparent">
                <p className="font-body text-sm text-primary font-semibold mb-2">
                  {item.category}
                </p>
                <h3 className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="font-body inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full transition-colors"
          >
            View More Work
          </a>
        </div>
      </div>
    </section>
  )
}
