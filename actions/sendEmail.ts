'use server';

import { Resend } from 'resend';
import { getMessageError, validateString } from '@/lib/utils';

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
  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ilyaselmabrouki7@gmail.com',
      subject: 'Test',
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error) {
    return {
      error : getMessageError(error),
    }
  }
};
