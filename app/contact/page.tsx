// "use client";


// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Phone, Mail, MapPin, Send } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Separator } from "@/components/ui/separator";


// const formSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Please enter a valid email address"),
//   phone: z.string().min(10, "Please enter a valid phone number"),
//   message: z.string().min(10, "Message must be at least 10 characters"),
// });

// export default function ContactPage() {
//   const { toast } = useToast();
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     },
//   });

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     console.log(values, 'form value')
//     // Here you would  send the form data to your backend
//     toast({
//       title: "Message Sent!",
//       description: "We'll get back to you as soon as possible.",
//     });
//     form.reset();
//   };

//   return (
//     <div className="min-h-screen mt-4 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
//           <p className="text-xl text-gray-600">
//             Get in touch with us for all your electrical needs
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <Card>
//               <CardHeader>
//                 <h2 className="text-2xl font-bold">Contact Information</h2>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center space-x-4">
//                   <Phone className="h-6 w-6 text-yellow-500" />
//                   <div>
//                     <Label>Phone</Label>
//                     <p className="text-gray-600">(777) 123-4567</p>
//                   </div>
//                 </div>
//                 <Separator />
//                 <div className="flex items-center space-x-4">
//                   <Mail className="h-6 w-6 text-yellow-500" />
//                   <div>
//                     <Label>Email</Label>
//                     <p className="text-gray-600">info@eliteelectrical.com</p>
//                   </div>
//                 </div>
//                 <Separator />
//                 <div className="flex items-center space-x-4">
//                   <MapPin className="h-6 w-6 text-yellow-500" />
//                   <div>
//                     <Label>Address</Label>
//                     <p className="text-gray-600">123 Main St, London, UK</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <h2 className="text-2xl font-bold">Business Hours</h2>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <div className="flex justify-between">
//                   <Label>Monday - Friday</Label>
//                   <span className="text-gray-600">8:00 AM - 6:00 PM</span>
//                 </div>
//                 <Separator />
//                 <div className="flex justify-between">
//                   <Label>Saturday</Label>
//                   <span className="text-gray-600">9:00 AM - 4:00 PM</span>
//                 </div>
//                 <Separator />
//                 <div className="flex justify-between">
//                   <Label>Sunday</Label>
//                   <span className="text-gray-600">Closed</span>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <Card>
//             <CardHeader>
//               <h2 className="text-2xl font-bold">Send us a Message</h2>
//             </CardHeader>
//             <CardContent>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//                   <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Name</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Your name" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email</FormLabel>
//                         <FormControl>
//                           <Input type="email" placeholder="your@email.com" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="phone"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Phone</FormLabel>
//                         <FormControl>
//                           <Input type="tel" placeholder="(555) 123-4567" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="message"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Message</FormLabel>
//                         <FormControl>
//                           <Textarea
//                             placeholder="How can we help you?"
//                             className="min-h-[120px]"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600">
//                     <Send className="h-4 w-4 mr-2" /> Send Message
//                   </Button>
//                 </form>
//               </Form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/app/contact/page.tsx

"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/email/contact-form-email"; // Import the ContactForm component

export default function ContactPage() {
  return (
    <div className="min-h-screen mt-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with us for all your electrical needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">Contact Information</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-yellow-500" />
                  <div>
                    <Label>Phone</Label>
                    <p className="text-gray-600">(777) 123-4567</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-yellow-500" />
                  <div>
                    <Label>Email</Label>
                    <p className="text-gray-600">info@eliteelectrical.com</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-500" />
                  <div>
                    <Label>Address</Label>
                    <p className="text-gray-600">123 Main St, London, UK</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">Business Hours</h2>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <Label>Monday - Friday</Label>
                  <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <Label>Saturday</Label>
                  <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <Label>Sunday</Label>
                  <span className="text-gray-600">Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
