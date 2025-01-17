import ChooseUs from "@/components/ChooseUS";
import { Card } from "@/components/ui/card";
import { Lightbulb, Wrench, Shield } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="/light1.webp"
          alt="Electrical services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl mt-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl">Comprehensive electrical solutions for residential and commercial needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive electrical services for both residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Installation Service */}
            <Card className="p-6">
              <Lightbulb className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Installations</h3>
              <p className="text-gray-600">
                Expert installation of electrical systems, lighting, and smart home technology.
              </p>
            </Card>

            {/* Repairs and Maintenance Service */}
            <Card className="p-6">
              <Wrench className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Repairs & Maintenance</h3>
              <p className="text-gray-600">
                Quick and reliable repairs for all electrical issues, plus preventive maintenance.
              </p>
            </Card>

            {/* Safety Inspections Service */}
            <Card className="p-6">
              <Shield className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safety Inspections</h3>
              <p className="text-gray-600">
                Comprehensive electrical safety inspections and certifications.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <ChooseUs/>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact us today to discuss your electrical needs and schedule a consultation.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
