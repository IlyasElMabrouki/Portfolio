'use server';

import React from 'react';
import { Resend } from 'resend';
import { getMessageError, validateString } from '@/lib/utils';
import Email from '@/email/email-form';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ilyaselmabrouki7@gmail.com',
      subject: 'Test',
      reply_to: senderEmail as string,
      react: React.createElement(Email, {
        message : message as string,
        emailSender : senderEmail as string,
      })
    });
  } catch (error) {
    return {
      error : getMessageError(error),
    }
  }

  return {
    data,
  }
};
