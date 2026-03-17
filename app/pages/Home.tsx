import { Hero } from "../components/Hero";
import { HobbyCategories } from "../components/HobbyCategories";
import { Features } from "../components/Features";
import { Community } from "../components/Community";

export function Home() {
  return (
    <>
      <Hero />
      <HobbyCategories />
      <Features />
      <Community />
    </>
  );
}
