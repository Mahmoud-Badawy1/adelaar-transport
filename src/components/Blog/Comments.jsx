import React from 'react';

function Comments() {
  return (
    <>
      {/* Section Title */}
      <div className="px-4 mt-10">
        <div className="text-3xl text-green1 mt-8 mb-2 font-medium">Reacties</div>
        <hr className="w-9 border-2 border-orange mb-6" />
      </div>

      {/* Comment 1 */}
      <div className="my-5">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-greyBlue2 w-full md:w-52 h-32 rounded-lg"></div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center">
              <div className="text-2xl md:text-3xl">Mellisa Doe</div>
              <div className="ml-0 md:ml-3 text-sm text-orange mt-1 md:mt-0">OCTOBER 11, 2022</div>
            </div>
            <div className="my-3 text-sm font-light">
              Naarmate de wereld blijft vechten tegen COVID-19, zoeken sommige gebouweigenaren naar manieren om de veiligheid van hun gebouwen te verbeteren.
            </div>
            <div className="text-sm text-orange cursor-pointer hover:underline">ANTWOORDEN</div>
          </div>
        </div>
      </div>

      {/* Comment 2 */}
      <div className="mt-14 mb-14 px-4 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-greyBlue2 w-full md:w-64 h-36 rounded-lg"></div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center">
              <div className="text-2xl md:text-3xl">Rayan Kellar</div>
              <div className="ml-0 md:ml-3 text-sm text-orange mt-1 md:mt-0">OCTOBER 11, 2022</div>
            </div>
            <div className="my-3 text-sm font-light">
              Naarmate de wereld blijft vechten tegen COVID-19, zoeken sommige gebouweigenaren naar manieren om de veiligheid van hun gebouwen te verbeteren.
            </div>
            <div className="text-sm text-orange cursor-pointer hover:underline">ANTWOORDEN</div>
          </div>
        </div>
      </div>

      {/* Comment 3 */}
      <div className="my-5">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-greyBlue2 w-full md:w-52 h-32 rounded-lg"></div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center">
              <div className="text-2xl md:text-3xl">Mellisa Doe</div>
              <div className="ml-0 md:ml-3 text-sm text-orange mt-1 md:mt-0">OCTOBER 11, 2022</div>
            </div>
            <div className="my-3 text-sm font-light">
              Naarmate de wereld blijft vechten tegen COVID-19, zoeken sommige gebouweigenaren naar manieren om de veiligheid van hun gebouwen te verbeteren.
            </div>
            <div className="text-sm text-orange cursor-pointer hover:underline">ANTWOORDEN</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
