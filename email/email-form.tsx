import React from 'react';
import {
  Html,
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type EmailProps = {
  message: String;
  emailSender: String;
};
export default function Email({ message, emailSender }: EmailProps) {
  return (
    <Html>
      <Head></Head>
      <Preview>New Message from your Portfolio site</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Container>
            <Section className='bg-white border border-black/0.1 my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The email of sender : {emailSender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
