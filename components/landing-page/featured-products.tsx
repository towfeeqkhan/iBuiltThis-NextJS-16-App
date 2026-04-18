import SectionHeader from "@/components/common/section-header";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "../products/product-card";

const featuredProducts = [
  {
    id: 1,
    name: "ParityKit",
    description: "Price parity for global SaaS products",
    tags: ["SaaS", "Pricing", "Global"],
    votes: 600,
    isFeatured: true,
  },
  {
    id: 2,
    name: "AI Art Studio",
    description: "Create stunning AI-generated art in seconds",
    tags: ["AI", "Art", "Creative"],
    votes: 450,
    isFeatured: true,
  },
  {
    id: 3,
    name: "CodeCollab",
    description: "Real-time code collaboration for developers",
    tags: ["Developer", "Collaboration", "Productivity"],
    votes: 300,
    isFeatured: true,
  },
  {
    id: 4,
    name: "FitTrack Pro",
    description: "AI-powered fitness tracking and coaching",
    tags: ["Health", "Fitness", "AI"],
    votes: 250,
    isFeatured: true,
  },
  {
    id: 5,
    name: "EduLearn",
    description: "Personalized learning platform for students",
    tags: ["Education", "Personalized", "Learning"],
    votes: 200,
    isFeatured: true,
  },
  {
    id: 6,
    name: "TravelMate",
    description: "AI travel assistant for personalized trip planning",
    tags: ["Travel", "AI", "Planning"],
    votes: 150,
    isFeatured: true,
  },
  {
    id: 7,
    name: "FoodieFinder",
    description: "Discover local restaurants and food deals",
    tags: ["Food", "Local", "Deals"],
    votes: 100,
    isFeatured: false,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week"
          />
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/explore" className="flex items-center gap-2">
              View All
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
