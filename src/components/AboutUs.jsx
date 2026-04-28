import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AboutUs = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`py-20 bg-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              About Helping Friends Trust
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Helping Friends Trust is a non-profit organization dedicated to creating 
              positive change in society through education, healthcare, and community 
              development initiatives.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to empower communities and transform lives, we work 
              tirelessly to bridge gaps and provide opportunities for those in need. 
              Our mission is to create a more equitable society where everyone has 
              access to basic necessities and opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#initiatives"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector('#initiatives')
                  if (element) {
                    const offset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - offset
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Our Work
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="About Helping Friends Trust"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-50 -z-10" />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <div className="inline-flex p-4 rounded-full bg-primary-100 text-primary-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
              Integrity
            </h3>
            <p className="text-gray-600">
              We maintain the highest standards of transparency and accountability in all our operations.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <div className="inline-flex p-4 rounded-full bg-accent-100 text-accent-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
              Compassion
            </h3>
            <p className="text-gray-600">
              We approach every situation with empathy and understanding, putting people first.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <div className="inline-flex p-4 rounded-full bg-primary-100 text-primary-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
              Impact
            </h3>
            <p className="text-gray-600">
              We measure success by the positive change we create in communities and lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
