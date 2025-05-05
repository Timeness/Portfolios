'use client';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from '@nextui-org/react';
import axios from 'axios';
import { useState } from 'react';

export default function ContactSection() {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/contact', data);
      setMessage('Message sent successfully!');
      reset();
    } catch (error) {
      setMessage('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-soumo-blue text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-viga font-bold text-center mb-12">Get in Touch</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-6">
          <Input
            {...register('name', { required: true })}
            label="Name"
            placeholder="Your name"
            fullWidth
          />
          <Input
            {...register('email', { required: true })}
            label="Email"
            type="email"
            placeholder="Your email"
            fullWidth
          />
          <Textarea
            {...register('message', { required: true })}
            label="Message"
            placeholder="Your message"
            fullWidth
          />
          <Button type="submit" color="primary" size="lg" fullWidth>
            Send Message
          </Button>
          {message && <p className="text-center">{message}</p>}
        </form>
      </div>
    </section>
  );
}
