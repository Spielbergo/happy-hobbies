import { Smile, Sparkles, Sun } from "lucide-react";

export function Community() {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 blur-xl" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-full opacity-20 blur-xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-lg">
              <Sun className="text-yellow-500" size={20} />
              <span className="text-gray-700 font-medium">Why Hobbies Matter</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Happiness Comes from <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Doing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Life gets busy, but taking time for hobbies isn't just fun—it's essential. 
              Whether you're nurturing a garden, crafting with your Cricut, or spending time with your pets, 
              these moments of joy help reduce stress, spark creativity, and bring genuine happiness to your everyday life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-white/50">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-4 rotate-3">
                <Smile className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Boost Your Mood</h3>
              <p className="text-gray-600 leading-relaxed">
                Engaging in hobbies releases endorphins, naturally lifting your spirits and improving mental well-being.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-white/50">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4 -rotate-3">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Express Yourself</h3>
              <p className="text-gray-600 leading-relaxed">
                Hobbies give you a creative outlet to express your unique personality and bring your ideas to life.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-white/50">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 rotate-6">
                <Sun className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Find Your Flow</h3>
              <p className="text-gray-600 leading-relaxed">
                Lose yourself in activities you love and experience that perfect state of relaxed focus and contentment.
              </p>
            </div>
          </div>

          <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-12 border-2 border-dashed border-pink-300">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Brings You Joy?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore different hobbies, rediscover old passions, or find something completely new. 
              Your next source of happiness is waiting to be discovered.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:shadow-xl transition-shadow font-medium">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}