'use client';
import { motion } from 'framer-motion';
import { Card, CardBody, Image } from '@nextui-org/react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Anime Streaming App',
      description: 'A Next.js app for streaming anime with a sleek UI.',
      image: '/images/project1.jpg',
      link: 'https://github.com',
    },
    {
      title: 'Portfolio Site',
      description: 'This very portfolio, built with Next.js and Tailwind.',
      image: '/images/project2.jpg',
      link: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-poppins font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardBody>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-montserrat font-semibold mt-4">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-soumo-purple hover:underline mt-2 inline-block"
                  >
                    View Project
                  </a>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
