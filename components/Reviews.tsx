"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    comment: "Excellent service! Very professional and completed the work quickly.",
    date: "2024-03-15"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Great experience with Elite Electric. They were on time and very knowledgeable.",
    date: "2024-03-10"
  },
  {
    id: 3,
    name: "Mike Wilson",
    rating: 4,
    comment: "Professional service and fair pricing. Would recommend!",
    date: "2024-03-05"
  },
  {
    id: 4,
    name: "John Bred",
    rating: 4,
    comment: "Very pleasant and efficient kept me informed throughout the process. Very professional would recommend and use again.",
    date: "2024-03-05"
  }
]

export function Reviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="p-4 text-center flex flex-col items-center">
              <div className="flex  items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4 text-center">{review.comment}</p>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold">{review.name}</p>
                <p>{new Date(review.date).toLocaleDateString()}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}