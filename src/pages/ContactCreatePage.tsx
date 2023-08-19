import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactCreatePage: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Create New Contact</h2>
      <ContactForm />
    </div>
  );
};

export default ContactCreatePage;
