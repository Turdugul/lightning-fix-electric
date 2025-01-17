import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Award, CheckCircle2, Users, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="/testing-electr.webp"  
          alt="Electrician team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Elite Electrical</h1>
              <p className="text-xl">Your trusted partner in professional electrical services since 1995.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1995, Elite Electrical has been providing top-quality electrical services to residential and commercial clients for over 25 years. What started as a small family business has grown into one of the most trusted electrical service providers in the region.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to excellence, safety, and customer satisfaction has earned us a reputation as the go-to electricians for both routine maintenance and complex electrical projects.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                 src="/electrician1.webp"  
                alt="Electrician at work"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-semibold">Safety First</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We prioritize safety in every project, following strict protocols and industry standards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle2 className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-semibold">Quality Service</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our work is backed by a 100% satisfaction guarantee and attention to detail.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-semibold">Customer Focus</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We build lasting relationships through exceptional service and communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-500" />
                <h3 className="text-lg font-semibold">Licensed Electricians</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">State certified master electricians</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-500" />
                <h3 className="text-lg font-semibold">NECA Member</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">National Electrical Contractors Association</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-500" />
                <h3 className="text-lg font-semibold">BBB Accredited</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">A+ Rating with Better Business Bureau</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-500" />
                <h3 className="text-lg font-semibold">EPA Certified</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Environmental Protection Agency certified</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}