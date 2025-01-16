import React from 'react';

function FormContact() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto bg-green4 pt-14 pb-14 px-6 md:px-12 lg:px-36 rounded-lg shadow-lg">
        <div>
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Drop Us A Line</h2>
            <p className="text-sm md:text-base font-semibold mb-4">
              Logisco transportation will help you to solve your problem
            </p>
            <hr className="mx-auto w-20 border-2 border-white mb-6" />
          </div>
          <form>
            <div className="flex flex-col md:flex-row md:gap-4 mb-4">
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 m-1 md:m-0"
                required
                placeholder="Name*"
              />
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border border-gray-300 m-1 md:m-0"
                required
                placeholder="Phone No."
              />
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 mb-4">
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 m-1 md:m-0"
                required
                placeholder="E-mail*"
              />
              <input
                type="text"
                id="subject"
                className="w-full p-2 border border-gray-300 m-1 md:m-0"
                required
                placeholder="Subject*"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300"
                rows="4"
                required
                placeholder="Text*"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange text-white pt-4 pb-4 px-8 font-bold rounded-lg hover:bg-gray2 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormContact;
