import { BookOpen, Video, FileText, Download, ExternalLink, Lightbulb } from "lucide-react";

const resourceCategories = [
  {
    title: "Beginner Guides",
    icon: BookOpen,
    color: "bg-blue-500",
    gradient: "from-blue-400 to-blue-600",
    resources: [
      "Getting Started with Gardening",
      "Your First Cricut Project",
      "DIY Crafts for Beginners",
      "Introduction to Pet Care Hobbies"
    ]
  },
  {
    title: "Video Tutorials",
    icon: Video,
    color: "bg-purple-500",
    gradient: "from-purple-400 to-purple-600",
    resources: [
      "How to Build a Raised Garden Bed",
      "Cricut Design Space Basics",
      "DIY Home Decor Projects",
      "DIY Pet Toy Creation"
    ]
  },
  {
    title: "Downloadables",
    icon: Download,
    color: "bg-pink-500",
    gradient: "from-pink-400 to-pink-600",
    resources: [
      "Garden Planning Templates",
      "Cricut SVG Files Collection",
      "Project Planning Worksheets",
      "Pet Care Checklists"
    ]
  },
  {
    title: "Inspiration Boards",
    icon: Lightbulb,
    color: "bg-orange-500",
    gradient: "from-orange-400 to-orange-600",
    resources: [
      "Seasonal Garden Ideas",
      "Trending Cricut Designs",
      "Home Makeover Projects",
      "Creative Pet Photography Ideas"
    ]
  }
];

const tools = [
  {
    name: "Supply Finder",
    description: "Find the best craft supplies and tools for your projects",
    icon: ExternalLink
  },
  {
    name: "Project Calculator",
    description: "Calculate materials needed for your DIY projects",
    icon: FileText
  },
  {
    name: "Design Templates",
    description: "Access our library of free design templates",
    icon: Download
  }
];

export function Resources() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Resources & Tools
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to succeed in your hobbies. From beginner guides to advanced 
              techniques, we've got you covered with free resources, tutorials, and tools.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 p-8 rounded-3xl hover:shadow-xl transition-shadow"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.resources.map((resource, resourceIndex) => (
                      <li
                        key={resourceIndex}
                        className="flex items-center gap-3 text-gray-700 hover:text-gray-900 cursor-pointer group"
                      >
                        <div className={`w-2 h-2 ${category.color} rounded-full group-hover:scale-150 transition-transform`} />
                        <span className="group-hover:translate-x-1 transition-transform">
                          {resource}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className={`mt-6 px-6 py-3 ${category.color} text-white rounded-full hover:opacity-90 transition-opacity`}>
                    Explore All
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Helpful Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Make your hobby projects easier with our collection of free tools and calculators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {tool.description}
                  </p>
                  <div className="text-pink-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Try it now
                    <ExternalLink size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-3xl p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <BookOpen className="text-purple-600" size={32} />
              </div>
              <div>
                <div className="inline-block px-4 py-1 bg-white rounded-full text-sm font-medium text-purple-600 mb-4">
                  New Resource
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  The Complete Hobby Starter Guide
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A comprehensive 50-page guide covering everything you need to know about starting 
                  and maintaining your new hobby. Includes tips, techniques, and recommendations from experts.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-xl transition-shadow font-bold flex items-center gap-2">
                  Download Free Guide
                  <Download size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get New Resources Weekly
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to receive the latest guides, tutorials, and tips directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="px-8 py-4 bg-white text-pink-500 rounded-full hover:bg-gray-100 transition-colors font-bold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
