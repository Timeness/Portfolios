'use client';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-soumo-blue text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-viga font-bold">
          Hey, I&apos;m Soumo!
        </h1>
        <p className="text-xl md:text-2xl font-viga mt-4">
          Developer | Designer | Anime Lover | Entrepreneur
        </p>
        <Button
          color="primary"
          size="lg"
          className="mt-6"
          as="a"
          href="#contact"
        >
          Get in Touch
        </Button>
      </motion.div>
    </section>
  );
}
