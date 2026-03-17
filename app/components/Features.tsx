import { BookOpen, Users, Video, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Step-by-Step Guides",
    description: "Easy-to-follow tutorials for crafters of all skill levels, from beginner to advanced."
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description: "Connect with fellow hobbyists, share your creations, and get inspired by others."
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Watch detailed video guides that make learning new crafts simple and enjoyable."
  },
  {
    icon: Award,
    title: "Achievement System",
    description: "Earn badges and celebrate milestones as you progress in your crafting journey."
  }
];

export function Features() {
  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Craft
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide all the tools, resources, and support to help you master any craft 
            and turn your creative ideas into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-pink-500" size={28} />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
