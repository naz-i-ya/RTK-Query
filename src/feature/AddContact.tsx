import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import { deleteContact } from "../store/contactsSlice";

const AddContact: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 py-6 items-center">
      {contacts.map((person, index) => (
        <div
          key={index}
          className="bg-gray-100 shadow-xl p-6 mb-4 flex flex-col justify-center w-full "
        >
          <div className="px-6">
            <h2 className="py-1 px-0 text-gray-600 border-solid border-b-2 font-semibold text-xs uppercase">
              FirstName: {person.firstName}
            </h2>
            <h2 className="py-1 px-0 text-gray-600 border-solid  border-b-2 font-semibold text-xs uppercase">
              LastName: {person.lastName}
            </h2>
            <h2 className="py-1 px-0 text-gray-600 border-solid  border-b-2 font-semibold text-xs uppercase">
              Status: {person.status}
            </h2>
          </div>
          <div className="px-6 mt-3">
            <Link to={`contacts/${person.id}/edit`}>
            <button className="ml-1 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">
              Edit
            </button>
            </Link>
            <button
              className="ml-1 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => dispatch(deleteContact(person.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AddContact;
