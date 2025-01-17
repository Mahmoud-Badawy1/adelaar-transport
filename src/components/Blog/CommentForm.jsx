import React from 'react'

function CommentForm() {
  return (
    <>
      <div className='px-4 mt-10'>
        <div className="text-3xl text-green1 mt-8 mb-2 font-medium">Plaats een reactie
        </div>
        <hr className="w-9 border-2 border-orange mb-6" />
      </div>
      <div className='text-sm font-light text-text1 '>Uw e-mailadres wordt niet gepubliceerd. Vereiste velden zijn gemarkeerd.
      <span className='ml-5'>*</span></div>
      <form className='mt-5'>
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
                placeholder="E-Mail Address*"
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
            <div className="text-start">
              <button
                type="submit"
                className="bg-orange text-white pt-4 pb-4 mb-5 px-8 font-bold rounded-lg hover:bg-gray2 transition duration-300"
              >
                Reactie plaatsen
              </button>
            </div>
          </form>
    </>
  )
}

export default CommentForm