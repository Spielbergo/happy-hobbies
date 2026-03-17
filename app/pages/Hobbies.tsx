import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Flower2, PawPrint, Hammer, Scissors, Leaf, Sprout, Heart, Sparkles } from "lucide-react";

const hobbies = [
  {
    category: "Gardens",
    icon: Flower2,
    color: "bg-green-500",
    gradient: "from-green-400 to-emerald-600",
    image: "https://images.unsplash.com/photo-1610981108619-ba2b8db9f9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBmbG93ZXIlMjBnYXJkZW58ZW58MXx8fHwxNzcyNTg5NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    items: [
      { name: "Flower Gardening", icon: Flower2, description: "Create stunning floral displays" },
      { name: "Vegetable Growing", icon: Leaf, description: "Grow your own fresh produce" },
      { name: "Indoor Plants", icon: Sprout, description: "Bring nature inside your home" },
    ]
  },
  {
    category: "Pets",
    icon: PawPrint,
    color: "bg-amber-500",
    gradient: "from-amber-400 to-orange-600",
    image: "https://images.unsplash.com/photo-1728661631084-5f44797184e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBldHMlMjBkb2clMjBjYXR8ZW58MXx8fHwxNzcyNTM4MDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    items: [
      { name: "Pet Photography", icon: Heart, description: "Capture precious moments with your pets" },
      { name: "DIY Pet Toys", icon: Sparkles, description: "Create fun toys for your furry friends" },
      { name: "Pet Training", icon: PawPrint, description: "Build a stronger bond through training" },
    ]
  },
  {
    category: "DIY Crafts",
    icon: Hammer,
    color: "bg-orange-500",
    gradient: "from-orange-400 to-red-600",
    image: "https://images.unsplash.com/photo-1745426863209-7b7efde1578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESVklMjB3b29kd29ya2luZyUyMGNyYWZ0c3xlbnwxfHx8fDE3NzI1ODk3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    items: [
      { name: "Woodworking", icon: Hammer, description: "Build furniture and home decor" },
      { name: "Upcycling Projects", icon: Sparkles, description: "Transform old items into treasures" },
      { name: "Home Decor", icon: Heart, description: "Personalize your living space" },
    ]
  },
  {
    category: "Cricut",
    icon: Scissors,
    color: "bg-purple-500",
    gradient: "from-purple-400 to-pink-600",
    image: "https://images.unsplash.com/photo-1738071477099-cfbb428b6fe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmljdXQlMjBjcmFmdGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzcyNTg5NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    items: [
      { name: "Vinyl Decals", icon: Scissors, description: "Design custom stickers and labels" },
      { name: "Paper Crafts", icon: Sparkles, description: "Create cards and invitations" },
      { name: "Iron-On Transfers", icon: Heart, description: "Personalize clothing and fabrics" },
    ]
  }
];

export function Hobbies() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Explore Our Hobbies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dive deep into each hobby category and discover activities that will bring 
              joy, relaxation, and creativity into your life.
            </p>
          </div>
        </div>
      </section>

      {/* Hobbies Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {hobbies.map((hobby, index) => {
              const CategoryIcon = hobby.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`${!isEven ? 'md:order-2' : ''}`}>
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                        <ImageWithFallback
                          src={hobby.image}
                          alt={hobby.category}
                          className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${hobby.gradient} rounded-2xl flex items-center justify-center shadow-xl rotate-6 group-hover:rotate-12 transition-transform`}>
                          <CategoryIcon className="text-white" size={32} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${!isEven ? 'md:order-1' : ''}`}>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {hobby.category}
                      </h2>
                      <div className="space-y-4">
                        {hobby.items.map((item, itemIndex) => {
                          const ItemIcon = item.icon;
                          return (
                            <div
                              key={itemIndex}
                              className="flex gap-4 p-4 bg-white rounded-2xl hover:shadow-lg transition-shadow cursor-pointer group"
                            >
                              <div className={`w-12 h-12 ${hobby.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                <ItemIcon className="text-white" size={24} />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg text-gray-900 mb-1">
                                  {item.name}
                                </h3>
                                <p className="text-gray-600">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Hobby Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Pick a hobby that speaks to you and begin creating moments of joy today.
            </p>
            <button className="px-8 py-4 bg-white text-pink-500 rounded-full hover:bg-gray-100 transition-colors font-bold">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
