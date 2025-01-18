import React from 'react'

function Share() {
  return (
    <>
      {/* Section: Share Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-start p-4 gap-4">
        <div className="text-xl font-semibold">Delen:</div>
        <div className="flex flex-wrap gap-3">
          <div className="border rounded px-4 py-2 font-medium text-white bg-orange hover:bg-orange-600">FACEBOOK</div>
          <div className="border rounded px-4 py-2 font-medium text-blue-500 hover:text-blue-600">TWITTER</div>
          <div className="border rounded px-4 py-2 font-medium text-red-500 hover:text-red-600">PINTEREST</div>
          <div className="border rounded px-4 py-2 font-medium text-gray-500 hover:text-gray-600">GOOGLE+</div>
          <div className="border rounded px-4 py-2 font-medium text-pink-500 hover:text-pink-600">INSTAGRAM</div>
        </div>
      </div>

      {/* Section: Author Info */}
      <div className="flex flex-col lg:flex-row justify-center items-start mt-10 mb-10 gap-6 px-4">
        <div className="w-full h-full lg:w-auto flex justify-center rounded-full overflow-hidden">
          <img
            src="/images/person.jpg"
            alt="image"
            className="w-36 object-cover rounded-full shadow-lg"
          />
        </div>
        <div className="text-center lg:text-left">
          <div className="text-orange font-medium text-2xl">Rayan Kellar</div>
          <div className="text-gray-500 font-light mb-4">
          Door elke dag vanuit het perspectief van onze klanten te denken, anticiperen we op wat ze willen, bieden we aan wat ze nodig hebben en bouwen we duurzame relaties.
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <img src="/images/icon.svg" alt="icon" className="w-8 h-8" />
            <img src="/images/icon (1).svg" alt="icon" className="w-8 h-8" />
            <img src="/images/icon (2).svg" alt="icon" className="w-8 h-8" />
            <img src="/images/icon (3).svg" alt="icon" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Share
