import { Heart, Target, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Joy",
    description: "We believe hobbies are essential for a happy, balanced life. Our mission is to help people discover activities that bring genuine joy and fulfillment."
  },
  {
    icon: Users,
    title: "Community First",
    description: "We've built a supportive space where hobbyists can connect, share, and learn from each other without judgment or competition."
  },
  {
    icon: Sparkles,
    title: "Creativity for All",
    description: "Whether you're a beginner or expert, young or old, we provide resources and inspiration that welcome everyone to explore their creative side."
  },
  {
    icon: Target,
    title: "Quality Resources",
    description: "We curate high-quality guides, tutorials, and tools that actually help people succeed in their hobbies and build confidence."
  }
];

const team = [
  {
    name: "Ashley Windibank",
    role: "Founder & Hobby Enthusiast",
    bio: "Former corporate worker who discovered the transformative power of hobbies during a stressful period. Started Happy Hobbies to share that joy with others."
  },
  {
    name: "David Chen",
    role: "Community Director",
    bio: "Passionate about building inclusive communities. Spends weekends gardening and creating Cricut projects with his kids."
  },
  {
    name: "Sarah Thompson",
    role: "Content Creator",
    bio: "DIY expert and pet lover who believes everyone has untapped creative potential. Creates tutorials that make crafting accessible to all."
  }
];

export function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Happy Hobbies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We started Happy Hobbies with a simple belief: everyone deserves to experience 
              the joy and fulfillment that comes from pursuing creative hobbies.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Happy Hobbies was born from a personal realization. Our founder, Ashley, was working 
                  long hours in a demanding job and felt burnt out. One day, she bought some garden 
                  supplies on a whim and started growing flowers on her balcony.
                </p>
                <p>
                  Those quiet mornings watering plants and watching them grow became her sanctuary. 
                  She noticed her stress melting away, her creativity returning, and her overall 
                  happiness increasing. She realized this wasn't just about gardening—it was about 
                  having something that was purely for joy.
                </p>
                <p>
                  Ashley began talking to friends and discovered so many people wanted to explore hobbies 
                  but didn't know where to start. Some felt intimidated, others thought they didn't 
                  have time, and many just needed a gentle push and some guidance.
                </p>
                <p className="font-medium text-gray-900">
                  That's why Happy Hobbies exists: to make it easy and welcoming for anyone to discover 
                  hobbies that bring happiness into their daily lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do, from the resources we create to the community we nurture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-lg"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're a small team of hobby enthusiasts dedicated to spreading joy through creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-pink-500 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Since launching Happy Hobbies, we've been amazed by the stories our community shares. 
              People finding calm through gardening, building confidence through crafts, and connecting 
              with their pets in new ways. Every story reminds us why this work matters.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">
                  50,000+
                </div>
                <div className="text-gray-600">Happy Hobbyists</div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">
                  125,000+
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">
                  200+
                </div>
                <div className="text-gray-600">Free Resources</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Have questions, suggestions, or just want to share your hobby story? We'd love to hear from you!
            </p>
            <button className="px-8 py-4 bg-white text-pink-500 rounded-full hover:bg-gray-100 transition-colors font-bold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
