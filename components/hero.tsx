import Image from 'next/image'

export function Hero() {
  return (
    <section id="home" className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="font-body text-sm text-pink-600 font-semibold">
                Welcome to NatStudio ✨
              </p>
              <h1 className="font-heading text-4xl md:text-5xl text-foreground leading-tight">
                Adorable Digital Art & Illustrations
              </h1>
              <p className="font-body text-lg text-gray-600">
                Custom chibi characters, sticker packs, and creative digital assets for your projects. Let&apos;s bring your imagination to life!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="font-body bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full transition-colors text-center"
              >
                View Services
              </a>
              <a
                href="#contact"
                className="font-body border-2 border-primary hover:bg-pink-50 text-primary px-8 py-3 rounded-full transition-colors text-center"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-2 border-white"
                  />
                ))}
              </div>
              <p className="font-body text-sm text-gray-600">
                50+ Happy Clients
              </p>
            </div>
          </div>

          {/* Right Image - Mermaid Character */}
          <div className="hidden md:relative md:block h-96 md:h-full min-h-96">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Custom%20Illustrated%20Name%20Card-9j4e8OVVAaOrg8QtNbbjVqN1bGTM4V.jpeg"
              alt="NatStudio - Mermaid Character"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl" />
      </div>
    </section>
  )
}
