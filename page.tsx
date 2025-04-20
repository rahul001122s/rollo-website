
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="px-6 py-16 text-center bg-[url('/bike-bg.jpg')] bg-cover bg-center text-white">
        <h1 className="text-5xl font-bold mb-4">Rollo – Rent a Bike. Ride the City.</h1>
        <p className="text-xl mb-6">Easily rent or list bikes near you. Fast. Simple. Reliable.</p>
        <div className="flex justify-center gap-4">
          <Button className="bg-black hover:bg-gray-800">Download for iOS</Button>
          <Button className="bg-black hover:bg-gray-800">Download for Android</Button>
        </div>
      </section>

      <section className="py-16 px-6 grid md:grid-cols-3 gap-6 text-center">
        {[
          { title: "Find Bikes Nearby", desc: "Open the app and see available bikes around you." },
          { title: "Instant Booking", desc: "Rent in seconds with just a few taps." },
          { title: "Earn by Sharing", desc: "List your bike when you’re not using it." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="shadow-md rounded-2xl p-6">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
        <p className="text-lg mb-6">Be part of a greener, more connected way to move around your city.</p>
        <Button className="text-white bg-green-600 hover:bg-green-700">Get Started with Rollo</Button>
      </section>

      <footer className="bg-black text-white text-center py-8 px-6">
        <p className="mb-2">© {new Date().getFullYear()} Rollo. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </main>
  );
}
