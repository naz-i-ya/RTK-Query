// src/pages/ContactViewPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ContactViewPage: React.FC = () => {
  const { id } = useParams() as { id: string };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Contact Details</h2>
    </div>
  );
};

export default ContactViewPage;
