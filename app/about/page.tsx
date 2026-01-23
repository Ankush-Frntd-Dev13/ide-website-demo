import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* About Us Content */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate innovators dedicated to transforming businesses through technology and creative solutions.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe in the power of innovation to drive meaningful change. Our mission is to help businesses unlock their full potential through cutting-edge technology and strategic insights.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every project we undertake is guided by our commitment to excellence, creativity, and delivering measurable results for our clients.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl h-80 flex items-center justify-center">
              <span className="text-white text-xl font-medium">Mission Image</span>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
                },
                {
                  title: 'Excellence',
                  description: 'We are committed to delivering the highest quality in everything we do.',
                },
                {
                  title: 'Collaboration',
                  description: 'We work closely with our clients to understand their needs and deliver tailored solutions.',
                },
                {
                  title: 'Integrity',
                  description: 'We operate with transparency and honesty in all our business relationships.',
                },
                {
                  title: 'Growth',
                  description: 'We are dedicated to continuous learning and helping our clients grow.',
                },
                {
                  title: 'Impact',
                  description: 'We measure our success by the positive impact we create for our clients and community.',
                },
              ].map((value, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Team
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'John Smith', role: 'CEO & Founder' },
                { name: 'Sarah Johnson', role: 'Creative Director' },
                { name: 'Michael Chen', role: 'Tech Lead' },
                { name: 'Emily Davis', role: 'Marketing Head' },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-64 mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Photo</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
