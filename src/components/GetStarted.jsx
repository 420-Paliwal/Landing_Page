import React, { useState, useContext } from 'react';
import { FormContext } from './FormContext';
import ThankYouPopup from './ThankYouPopup';
import DataTable from './DataTable';

const GetStarted = () => {
  const [showModal, setShowModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [language, setLanguage] = useState([]);
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const { setFormData, formData } = useContext(FormContext);

  const handleCheckbox = (lang) => {
    setLanguage((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const handleSubmit = () => {
    if (!firstName || !email || !agreed) return alert('Fill required fields!');
    const newEntry = {
      name: `${firstName} ${lastName}`,
      gender,
      language: language.join(', '),
      email,
    };
    setFormData([...formData, newEntry]);
    setShowModal(false);
    setShowThankYou(true);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full md:w-[80%] lg:w-[60%] bg-white text-center rounded-lg shadow-md p-6 md:p-10">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Simplify Your Life with Our Todo App
        </h1>
        <p className="text-gray-600 mt-6 text-base md:text-lg px-2">
          Stay organized and boost your productivity with our intuitive todo website.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="rounded-full bg-red-500 border-2 border-red-500 text-white px-8 py-2"
          >
            Get Started
          </button>
          <button className="border-2 border-red-500 rounded-full text-red-500 px-8 py-2">
            Learn More
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] md:w-[500px] text-left relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 text-2xl font-bold hover:text-red-500"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-2">Get Started Today!</h2>
            <p className="text-gray-600 mb-4">Fill in your details</p>

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border rounded"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border rounded"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="my-4">
              <label className="mr-4">
                <input
                  type="radio"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={(e) => setGender(e.target.value)}
                /> Male
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={(e) => setGender(e.target.value)}
                /> Female
              </label>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Languages</label>
              {['English', 'Hindi', 'Marathi'].map((lang) => (
                <div key={lang}>
                  <input
                    type="checkbox"
                    checked={language.includes(lang)}
                    onChange={() => handleCheckbox(lang)}
                  />{' '}
                  {lang}
                </div>
              ))}
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="mb-4">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />{' '}
              I agree to the <span className="text-red-500 underline">terms and conditions</span>
            </div>

            <button
              className="w-full py-2 bg-red-500 text-white rounded"
              onClick={handleSubmit}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {showThankYou && <ThankYouPopup onClose={() => setShowThankYou(false)} />}

    </div>
  );
};

export default GetStarted;
