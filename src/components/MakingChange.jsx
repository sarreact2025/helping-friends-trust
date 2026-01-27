import { useScrollAnimation } from '../hooks/useScrollAnimation'

const MakingChange = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const stories = [
    {
      title: 'Education Transformation',
      description: 'We\'ve established 25 learning centers providing quality education to over 5,000 children in underserved communities.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      stats: '5,000+ Children Educated',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Healthcare Access',
      description: 'Our mobile health clinics have provided medical care to 15,000+ individuals, bringing healthcare to remote areas.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80',
      stats: '15,000+ Lives Touched',
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Food Security Program',
      description: 'Through our food distribution programs, we\'ve served over 1 million meals to families facing food insecurity.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      stats: '1M+ Meals Served',
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Community Empowerment',
      description: 'We\'ve trained 2,000+ individuals in vocational skills, helping them secure employment and financial independence.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
      stats: '2,000+ People Trained',
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <section ref={sectionRef} id="more" className={`py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Making Change in Society
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through dedicated efforts and community support, we're creating lasting positive change
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${story.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm font-semibold mb-2 opacity-90">
                    {story.stats}
                  </div>
                  <h3 className="text-2xl font-display font-bold">
                    {story.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Timeline or Additional Content */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-600 mb-2">
                10+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Years of Service
              </div>
              <div className="text-gray-600">
                Dedicated to creating positive change
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-accent-600 mb-2">
                50+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Communities Served
              </div>
              <div className="text-gray-600">
                Across multiple regions and states
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-600 mb-2">
                24/7
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Support Available
              </div>
              <div className="text-gray-600">
                Always here to help those in need
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Be Part of the Change
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in our mission to create a better, more equitable society for everyone
          </p>
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
            Support Our Mission
          </a>
        </div>
      </div>
    </section>
  )
}

export default MakingChange
