import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Flower2, PawPrint, Hammer, Scissors } from "lucide-react";

const categories = [
  {
    title: "Gardens",
    description: "Grow beauty and find peace in your garden",
    image: "https://images.unsplash.com/photo-1610981108619-ba2b8db9f9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBmbG93ZXIlMjBnYXJkZW58ZW58MXx8fHwxNzcyNTg5NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Flower2,
    color: "bg-green-500"
  },
  {
    title: "Pets",
    description: "Celebrate the joy pets bring to our lives",
    image: "https://images.unsplash.com/photo-1728661631084-5f44797184e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBldHMlMjBkb2clMjBjYXR8ZW58MXx8fHwxNzcyNTM4MDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: PawPrint,
    color: "bg-amber-500"
  },
  {
    title: "DIY Crafts",
    description: "Create something special with your own hands",
    image: "https://images.unsplash.com/photo-1745426863209-7b7efde1578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESVklMjB3b29kd29ya2luZyUyMGNyYWZ0c3xlbnwxfHx8fDE3NzI1ODk3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Hammer,
    color: "bg-orange-500"
  },
  {
    title: "Cricut",
    description: "Design and cut your creative visions to life",
    image: "https://images.unsplash.com/photo-1738071477099-cfbb428b6fe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmljdXQlMjBjcmFmdGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzcyNTg5NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Scissors,
    color: "bg-purple-500"
  }
];

export function HobbyCategories() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Hobby Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From traditional crafts to modern DIY projects, find the perfect hobby 
            that sparks your creativity and brings joy to your life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4 aspect-square">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-4 right-4 w-12 h-12 ${category.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}