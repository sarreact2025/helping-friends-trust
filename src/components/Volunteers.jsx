import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Volunteers = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const volunteers = [
    {
      name: 'Priya Sharma',
      role: 'Education Coordinator',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'Volunteering here has been the most rewarding experience. Seeing children learn and grow brings me immense joy.',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Healthcare Volunteer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      quote: 'Every day I get to make a difference in someone\'s life. That\'s what keeps me motivated.',
    },
    {
      name: 'Anita Desai',
      role: 'Community Outreach',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'Being part of this trust has shown me the power of community and collective action.',
    },
  ]

  return (
    <>
      {/* Make a Difference Section */}
      <section ref={sectionRef} id="support" className={`py-20 bg-gradient-to-b from-white to-gray-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Make a Difference
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Your support can transform lives and create lasting change in our communities. 
                Every contribution, whether time or resources, makes a real difference.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">Direct Impact</p>
                    <p className="text-gray-600">Your donations go directly to those in need</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">Transparency</p>
                    <p className="text-gray-600">Complete transparency in how funds are used</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">Sustainable Change</p>
                    <p className="text-gray-600">Long-term solutions that create lasting impact</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
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
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Donate Now
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
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-lg font-semibold rounded-lg text-primary-600 hover:bg-primary-50 transition-all duration-200"
              >
                Learn More
              </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                  alt="Making a difference"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-xl font-semibold mb-2">Together We Can</p>
                  <p className="text-white/90">Join thousands making a difference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section id="join" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Volunteers with Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our amazing volunteers who are making a difference every day
            </p>
          </div>

          {/* Volunteer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {volunteers.map((volunteer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={volunteer.image}
                    alt={volunteer.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold text-gray-900 mb-1">
                    {volunteer.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {volunteer.role}
                  </p>
                  <p className="text-gray-600 italic">
                    "{volunteer.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our team of dedicated volunteers and be part of something meaningful
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Become a Volunteer
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector('#about')
                  if (element) {
                    const offset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - offset
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-lg font-semibold rounded-lg text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
              >
                Learn About Volunteering
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Volunteers
