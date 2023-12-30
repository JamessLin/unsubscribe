"use client";

import Image from 'next/image';
import logo from './image/pna.png';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState("");
  const [reasoning, setReasoning] = useState("");
  const [showFirstConfirmationModal, setShowFirstConfirmationModal] = useState(false);
  const [showSecondConfirmationModal, setShowSecondConfirmationModal] = useState(false);
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);

  const handleUnsubscribe = () => {
    if (name.trim() !== "" && reasoning.trim() !== "") {
      setShowFirstConfirmationModal(true);
    } else {
      alert("Please fill out both name and email address before unsubscribing.");
    }
  };

  const handleConfirmFirstUnsubscribe = () => {
    setShowFirstConfirmationModal(false);
    setShowSecondConfirmationModal(true);
  };

  const handleConfirmSecondUnsubscribe = () => {
    setIsUnsubscribed(true);
    setName("");
    setReasoning("");
    setShowFirstConfirmationModal(false);
    setShowSecondConfirmationModal(false);
  };

  const handleCancelUnsubscribe = () => {
    setShowFirstConfirmationModal(false);
    setShowSecondConfirmationModal(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative flex place-items-center">
        <Image
          src={logo}
          alt="Insta Logo"
          width={200}
          height={100}
          priority
        />
      </div>
      <div className="relative flex">
        <div className="group rounded-lg border px-8 py-8 border-slate-300">
          <div className='mb-4'>
          <h2 className={`text-2xl font-semibold`}>
            Unsubscribe
          </h2>
          <p className="text-xs opacity-50" > from James Lin Insta reels</p>
          </div>
          
          <p className={`mb-4 max-w-[41ch]  text-base opacity-70`}>
            I hope you are enjoying the Instagram Reels from me.
          </p>
          <p className={`mb-8  max-w-[41ch] text-base opacity-70`}>
            If you don't want to receive any more Reels, please complete the form below.
          </p>

          <div className="flex flex-col ">
            <p className={`mb-1 text-base opacity-70`}>
              Your Name:
            </p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-slate-300 rounded-md p-2 mb-3 bg-transparent"
            />

            <p className={`mb-1 text-base opacity-70`}>
              Your Email Address:
            </p>
            <input
              value={reasoning}
              onChange={(e) => setReasoning(e.target.value)}
              className="border border-slate-300 rounded-md p-2 mb-6 bg-transparent"
            />

            <button
              className="bg-slate-600 border border-slate-300 text-white px-4 py-2 rounded-md hover:opacity-1 hover:bg-black transition-colors"
              onClick={handleUnsubscribe}
            >
              Unsubscribe
            </button>

        
            {showFirstConfirmationModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Are you sure?</h2>
            <p className="mb-4 ">Are you sure you want to unsubscribe? after this action, you won't be receiving any more reels from James Lin.</p>
            <button
              className="bg-slate-600 text-white px-4 py-2 rounded-md mr-2"
              onClick={handleConfirmFirstUnsubscribe}
            >
              Yes
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              onClick={handleCancelUnsubscribe}
            >
              Cancel
            </button>
          </div>
        </div>
      )}


            {showSecondConfirmationModal && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                  <h2 className="text-2xl font-semibold mb-4">Are you sure?</h2>
                  <p className="mb-4  ">Hi {name}, please don't unsubscribe 🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺.  ARE YOU SURE THAT YOU WANT TO UNSUBSCRIBE?</p>
                  <button
                    className="bg-slate-600 text-white px-4 py-2 rounded-md mr-2"
                    onClick={handleCancelUnsubscribe}
                  >
                    No
                  </button>
                  <button
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                    onClick={handleConfirmSecondUnsubscribe}
                  >
                    Yes
                  </button>
                </div>
              </div>
            )}

           
            {isUnsubscribed && (
              <p className="text-red-500 mt-4">Failed to Unsubscribe!.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
