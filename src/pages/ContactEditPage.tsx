import React from "react";
import ContactEdit from "../components/ContactEdit";

const EditContactPage: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Edit Contact</h2>
      <ContactEdit />
    </div>
  );
};

export default EditContactPage;
