import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm">
              <Sparkles size={16} />
              <span>Discover Your Creative Side</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Find Joy in Every Craft & Hobby
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a beginner or an expert, Happy Hobbies is your ultimate destination 
              for exploring creative crafts, connecting with fellow enthusiasts, and discovering 
              new passions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 group">
                Explore Hobbies
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621716347723-b726a26ba4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHMlMjBzdXBwbGllcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MjU4ODQzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Colorful craft supplies"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Sparkles className="text-pink-500" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">New Projects Daily</div>
                  <div className="text-sm text-gray-600">Join the creativity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}