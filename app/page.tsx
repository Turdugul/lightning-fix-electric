import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Lightbulb, 
  Wrench, 
  Shield
} from "lucide-react";
import { Reviews } from "@/components/Reviews";
import ChooseUs from "@/components/ChooseUS";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/light.jpg"
          alt="Electrician at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Electrical Services You Can Trust
              </h1>
              <p className="text-xl mb-8">
                Licensed and insured electricians providing top-quality residential and commercial services.
              </p>
              <div className="space-x-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-yellow-500 border-white hover:bg-white hover:text-black">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
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
            <Card className="p-6">
              <Lightbulb className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Installations</h3>
              <p className="text-gray-600">
                Expert installation of electrical systems, lighting, and smart home technology.
              </p>
            </Card>

            <Card className="p-6">
              <Wrench className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Repairs & Maintenance</h3>
              <p className="text-gray-600">
                Quick and reliable repairs for all electrical issues, plus preventive maintenance.
              </p>
            </Card>

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
      <Reviews/>

      {/* CTA Section */}
      <section className="bg-yellow-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white text-xl mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-yellow-500 hover:bg-gray-100">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
     
    </div>
  );
}