import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../store/contactsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface EditContactProps {}

const ContactEdit: React.FC<EditContactProps> = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  const contact = contacts.find(contact => contact.id.toString() === id);

  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');
  const [editedStatus, setEditedStatus] = useState('active');

  console.log(editedFirstName,"hgdfdsf")

  useEffect(() => {
    if (contact) {
      setEditedFirstName(contact.firstName);
      setEditedLastName(contact.lastName);
      setEditedStatus(contact.status);
    }
  }, [contact]);

  const handleSaveChanges = () => {
    if (!contact) return; 
    const editedContact = {
      ...contact,
      firstName: editedFirstName,
      lastName: editedLastName,
      status: editedStatus as 'active' | 'inactive',
    };
    dispatch(editContact(editedContact));
    navigate('/');
  };

  if (!contact) return <div>Contact not found.</div>;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md">
        <h1>Editttt </h1>
        <div className="mb-4">
          <label className="block mb-2">First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            value={editedFirstName}
            onChange={e => setEditedFirstName(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            value={editedLastName}
            onChange={e => setEditedLastName(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Status:</label>
          <label className="mr-2">
            <input
              type="radio"
              value="active"
              checked={editedStatus === 'active'}
              onChange={() => setEditedStatus('active')}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              value="inactive"
              checked={editedStatus === 'inactive'}
              onChange={() => setEditedStatus('inactive')}
            />
            Inactive
          </label>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ContactEdit;
