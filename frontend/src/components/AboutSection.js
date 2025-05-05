'use client';
import { motion } from 'framer';
import { Card, CardBody } from '@nextui-org/react';

export default function AboutSection() {
  const skills = [
    { title: 'Development', description: 'Building fast, scalable web apps with Next.js and React.' },
    { title: 'Design', description: 'Crafting stunning UI/UX with Tailwind and HeroUI.' },
    { title: 'Anime', description: 'Inspired by epic anime stories and aesthetics.' },
    { title: 'Entrepreneurship', description: 'Turning ideas into reality with passion.' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-poppins font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardBody>
                  <h3 className="text-xl font-montserrat font-semibold">{skill.title}</h3>
                  <p className="mt-2">{skill.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
