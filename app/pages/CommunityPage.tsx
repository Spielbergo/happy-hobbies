import { Users, MessageCircle, Share2, Award, TrendingUp, Calendar } from "lucide-react";

const stats = [
  { label: "Active Members", value: "50,000+", icon: Users },
  { label: "Projects Shared", value: "125,000+", icon: Share2 },
  { label: "Daily Conversations", value: "5,000+", icon: MessageCircle },
];

const features = [
  {
    icon: MessageCircle,
    title: "Share Your Creations",
    description: "Post photos of your garden blooms, DIY projects, pet moments, and Cricut designs. Get feedback and inspire others."
  },
  {
    icon: TrendingUp,
    title: "Learn From Others",
    description: "Discover new techniques, tips, and tricks from experienced hobbyists in our community."
  },
  {
    icon: Calendar,
    title: "Join Events",
    description: "Participate in monthly challenges, live workshops, and virtual meetups with fellow enthusiasts."
  },
  {
    icon: Award,
    title: "Earn Recognition",
    description: "Showcase your skills and earn badges as you contribute to the community and complete challenges."
  }
];

export function CommunityPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-lg">
              <Users className="text-purple-500" size={20} />
              <span className="text-gray-700 font-medium">Join 50,000+ Members</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect with Fellow Hobbyists
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join a vibrant community of crafters, gardeners, pet lovers, and DIY enthusiasts. 
              Share your passion, learn from others, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              How Our Community Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've created a welcoming space where everyone can share, learn, and celebrate their hobbies together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Members Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "This community has reignited my love for gardening! The tips I've learned have transformed my backyard into a paradise."
              </p>
              <div className="font-bold text-gray-900">Sarah M.</div>
              <div className="text-sm text-gray-600">Garden Enthusiast</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-3xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "I never thought I'd be good at crafts, but the supportive community here gave me the confidence to try. Now I'm hooked!"
              </p>
              <div className="font-bold text-gray-900">Mike T.</div>
              <div className="text-sm text-gray-600">DIY Crafter</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-3xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "The Cricut projects people share here are amazing! I've found so much inspiration and made some great friends."
              </p>
              <div className="font-bold text-gray-900">Jessica L.</div>
              <div className="text-sm text-gray-600">Cricut Creator</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Become Part of Something Special
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of hobbyists who are creating, sharing, and finding joy together every day.
            </p>
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-colors font-bold">
              Join the Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
