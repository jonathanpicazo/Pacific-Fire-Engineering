'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/common';
import clsx from 'clsx';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  inquiry: z.string().min(1, 'Inquiry is required'),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/.netlify/functions/send-form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      if (response.ok) {
        setSubmissionStatus('success');
        reset();
      } else {
        if (result.errors) {
          result.errors.forEach(
            (error: { field: keyof FormData; message: string }) => {
              setError(error.field, { type: 'server', message: error.message });
            }
          );
        }
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-3 flex flex-col gap-6 md:mt-5"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-primary"
          >
            <span>Name</span>
            <input
              {...register('name')}
              type="text"
              className={clsx(
                'block w-full rounded-lg border p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary',
                {
                  'border-red-500': errors.name,
                  'border-gray-300 bg-gray-50': !errors.name,
                }
              )}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </label>
        </div>
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-primary"
          >
            <span>Company</span>
            <input
              {...register('company')}
              type="text"
              className={clsx(
                'block w-full rounded-lg border p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary',
                {
                  'border-red-500': errors.company,
                  'border-gray-300 bg-gray-50': !errors.company,
                }
              )}
              placeholder="My Company"
            />
            {errors.company && (
              <p className="mt-1 text-xs text-red-500">
                {errors.company.message}
              </p>
            )}
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-primary"
          >
            <span>Email address</span>
            <input
              {...register('email')}
              type="email"
              className={clsx(
                'block w-full rounded-lg border p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary',
                {
                  'border-red-500': errors.email,
                  'border-gray-300 bg-gray-50': !errors.email,
                }
              )}
              placeholder="john.doe@company.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </label>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-primary"
          >
            <span>Phone number</span>
            <input
              {...register('phone')}
              type="tel"
              className={clsx(
                'block w-full rounded-lg border p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary',
                {
                  'border-red-500': errors.phone,
                  'border-gray-300 bg-gray-50': !errors.phone,
                }
              )}
              placeholder="(123)-456-7890"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">
                {errors.phone.message}
              </p>
            )}
          </label>
        </div>
      </div>
      <div className="hidden">
        <input {...register('honeypot')} type="text" className="hidden" />
      </div>
      <div>
        <label htmlFor="inquiry">
          <span className="mb-2 block text-sm font-medium text-primary">
            Inquiry
          </span>
          <textarea
            {...register('inquiry')}
            className={clsx(
              'w-full rounded-lg border px-2 py-1.5 text-sm focus:border-primary focus:ring-primary',
              {
                'border-red-500': errors.inquiry,
                'border-gray-300 bg-gray-50': !errors.inquiry,
              }
            )}
            placeholder="Enter your message here..."
            rows={10}
          />
          {errors.inquiry && (
            <p className="mt-1 text-xs text-red-500">
              {errors.inquiry.message}
            </p>
          )}
        </label>
      </div>
      <div>
        <Button type="submit" className="!py-2" disabled={isSubmitting}>
          <span>{isSubmitting ? 'Loading...' : 'Submit'}</span>
        </Button>
      </div>
      {submissionStatus === 'success' && (
        <p className="mt-4 text-center text-green-500">
          Your message has been sent successfully!
        </p>
      )}
      {submissionStatus === 'error' && !errors.honeypot && (
        <p className="mt-4 text-center text-red-500">
          An error occurred. Please try again.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
