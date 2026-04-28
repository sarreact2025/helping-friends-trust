import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Placeholder images - replace with actual images
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80',
      title: 'Together We Make a Difference',
      subtitle: 'Join us in transforming lives and building stronger communities',
    },
    {
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80',
      title: 'Empowering Communities',
      subtitle: 'Your support helps us reach those in need',
    },
    {
      image: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=1920&q=80',
      title: 'Building Hope Together',
      subtitle: 'Every donation creates lasting impact',
    },
    {
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80',
      title: 'Volunteers Making Change',
      subtitle: 'Join our mission to serve and uplift',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: 'scale(1.1)',
              }}
            />
            {/* Gradient Overlay with Light Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-accent-900/80" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
            {/* Light Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#support"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#support') || document.querySelector('#join')
                if (element) {
                  const offset = 80
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - offset
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Support Now
            </a>
            <a
              href="#join"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#join')
                if (element) {
                  const offset = 80
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - offset
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
