import React, { useState } from "react";
import AddContact from "./AddContact";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  console.log(contacts, "contacts");

  return (
    <div className="min-w-full max-w-[1000px]">
      <Link
        to="/contacts"
        className="flex flex-col items-center justify-center md:justify-start mx-auto md:mx-0 "
      >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Contact
        </button>
      </Link>
      <div className="m-4">
        <div className="flex flex-col items-center justify-center md:justify-start mx-auto md:mx-0 4">
          {contacts.length > 0 ? (
            <AddContact />
          ) : (
            <div className="bg-red-100 p-4 text-center shadow-xl">
              No contacts found. Please add contacts using the create contact
              button.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
