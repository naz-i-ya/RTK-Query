import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../store/contactsSlice";
import { Link, useNavigate } from "react-router-dom";

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact = {
      id: Date.now(),
      firstName,
      lastName,
      status: status as "active" | "inactive",
    };
    dispatch(addContact(newContact));
    setFirstName("");
    setLastName("");
    setStatus("active");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 shadow-xl p-6 mb-4 flex flex-col justify-center w-1/2 "
      >
        <h3 className="text-center text-2xl m-3">Save Contact</h3>
        <div className="mb-4">
          <label className="block mb-2">First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Status:</label>
          <label className="mr-2">
            <input
              type="radio"
              value="active"
              checked={status === "active"}
              onChange={() => setStatus("active")}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              value="inactive"
              checked={status === "inactive"}
              onChange={() => setStatus("inactive")}
            />
            Inactive
          </label>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Save Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
