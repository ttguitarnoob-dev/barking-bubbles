import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";

export default function HeroSection() {

    // State for rotating title
    const [index, setIndex] = useState(0);

    const homePageText = {
        heroMessages: [
            {
                title: "Turnkey design for dependable performance.",
                subtitle: "Designed for consistency. Managed for success.",
            },
            {
                title: "Making reliability repeatable.",
                subtitle: "Reducing risk. Ensuring repeatability. Delivering performance.",
            },
        ]

    }





    return (
        <>
            {/* Hero Section */}
            <section
                className="relative w-full h-[600px] py-8 text-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(/Images/hero-image.webp)` }}
            >

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative text-left z-10 flex flex-col gap-3 items-start justify-center h-full px-4 sm:px-6 md:px-10 text-white max-w-7xl mx-auto">
                    <h1 className="sr-only">Cranberry Consulting Company LLC</h1>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            layout
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <h1 className="text-5xl sm:text-6xl font-bold uppercase">
                            {homePageText.heroMessages[index].title}
                            </h1>
                            <h2 className="text-2xl sm:text-3xl mt-2">
                            {homePageText.heroMessages[index].subtitle}
                            </h2>
                        </motion.div>
                    </AnimatePresence>
                    <Button>Hello</Button>

                </div>
                <div className="sr-only">
          {homePageText.heroMessages.map((msg, i) => (
            <div key={i}>
              {msg.title} — {msg.subtitle}
            </div>
          ))}
        </div>
            </section>
        </>
    );
}