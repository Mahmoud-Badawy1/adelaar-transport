import React from "react"
import Image from "next/image"
function DescripitionBlog() {
    return (
        <>
            <div className="font-light text-text1 mt-2">
                <div>Onze zakelijke adviesprogramma's helpen de prestaties van uw bedrijf op te splitsen in klant- en productgroepen, zodat u precies weet welke klanten of productgroepen goed presteren en welke niet. Dit stelt u in staat de nodige veranderingen door te voeren om de beste resultaten uit uw bedrijf te halen.</div>
                <div className="my-3">
                In de afgelopen 35 jaar hebben we een sterke impact gehad en er ligt nog een lange weg voor ons.
                </div>
                <div>
                Dit zijn de concepten die onze onderscheidende cultuur vormgeven en ons onderscheiden van anderen. Ze belichamen de unieke geest van ons bedrijf en sturen het gedrag dat ons in staat stelt de beloften die we aan onze klanten en medewerkers maken, na te komen.
                </div>
            </div>

            <div className="mt-3">
                <div className="px-4">
                    <div className="text-3xl text-green1 mt-8 mb-2 font-medium">Go trans Waarden</div>
                    <hr className="w-9 border-2 border-orange mb-6" />
                </div>
                <div className="px-4">
                    <div className="font-light text-text1 mb-2">Bij Adelaar Transport komt onze cultuur tot leven door drie kernwaarden:</div>
                    <div className="ml-7">
                        {[
                            "We seize opportunities to innovate and grow",
                            "We are one firm with a shared sense of purpose",
                            "We care about each other and the world around us",
                        ].map((item, index) => (
                            <div key={index} className="flex items-center">
                                <Image width={17} height={17} src="/images/true.svg" alt="Icon" />
                                <div className="ml-1 text-green1 text-base font-light">{item}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex my-5">
                <div className="h-80 w-full bg-gray1 lg:mr-3"></div>
                <div className="h-80 w-full bg-gray2 lg:ml-3"></div>
            </div>

            <div className="my-8">
                <div className="font-light text-text1 mb-2">We begeleiden onze klanten door moeilijke kwesties, waarbij we onze inzichten en oordelen toepassen op elke situatie. Onze innovatieve benaderingen creëren originele oplossingen voor de meest complexe binnenlandse en internationale deals en geschillen van onze klanten.</div>
                <div className="font-light text-text1 mb-2">Door elke dag vanuit het perspectief van onze klanten te denken, anticiperen we op wat ze willen, bieden we aan wat ze nodig hebben en bouwen we duurzame relaties. Dit zijn de concepten die onze onderscheidende cultuur vormgeven en ons onderscheiden van anderen.</div>
            </div>

            <div className="bg-gray1 w-full h-96 flex justify-center items-center">
                <div>
                    <Image width={81} height={81} src="/images/play Button.svg" alt="" />
                </div>
            </div>

            <div className="my-8">
                <div className="font-light text-text1 mb-2"> Door elke dag vanuit het perspectief van onze klanten te denken, anticiperen we op wat ze willen, bieden we aan wat ze nodig hebben en bouwen we duurzame relaties. Dit zijn de concepten die onze onderscheidende cultuur vormgeven en ons onderscheiden van anderen.</div>
                <div className="font-light text-text1 mb-2"> We begeleiden onze klanten door moeilijke kwesties, waarbij we onze inzichten en oordelen toepassen op elke situatie. Onze innovatieve benaderingen creëren originele oplossingen voor onze klanten.</div>
            </div>
        </>
    )
}

export default DescripitionBlog