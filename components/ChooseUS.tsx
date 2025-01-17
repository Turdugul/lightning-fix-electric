"use client";

import { CheckCircle2, Clock, Shield, Wrench } from "lucide-react";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: CheckCircle2,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Available around the clock for emergency repairs.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All work backed by our satisfaction guarantee.",
  },
  {
    icon: Wrench,
    title: "Experienced Team",
    description: "Years of experience in electrical services.",
  },
];

const FeatureCard = ({ icon: Icon, title, description }: Feature) => (
  <div className="flex flex-col items-center text-center">
    <Icon className="h-12 w-12 text-yellow-500 mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const ChooseUs = () => {
  return (
    <section className="py-16 border-y-2 border-yellow-400 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on providing exceptional service and customer satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
