import Image from "next/image";
const cardData = [
    {
      image:(
        "/Maritiem.png"),
      icon: (
       "/maritiem.svg"
      ),
      title: "Zeevracht",
      description:
        "Met Adelaar Transport bieden wij betrouwbare en efficiënte zeevrachtservices. Wij garanderen dat uw zending veilig en op tijd in elke haven ter wereld aankomt. Kies voor uw ideale partner in zeevracht!",
        buttonText: "Lees meer",
        href: "/services/details" 
    },
    // Add more cards here...
    {
      image:(
        "/train.jpg"
      ),
      icon: (
       "/Weg.svg"
      ),
      title: "Wegtransport",
      description:
        "Of u nu goederen binnen steden of tussen landen moet vervoeren, Adelaar Transport biedt snelle en veilige wegtransportoplossingen. Wij gebruiken de nieuwste technologieën om uw zending op elk moment te volgen.",
      buttonText: "Lees meer",
      href: "/services/details" 
    },
    {
      image:(
        "/plane.jpg"
      ),
      icon: (
      "/plane1.svg"
      ),
      title: "Intermodal Shipping",
      description:
        "Maak uw transport efficiënter met de multimodale transportdiensten van Adelaar Transport. Wij combineren zee-, weg- en luchttransport om u de beste logistieke oplossingen te bieden.",
      buttonText: "Lees meer",
      href: "/services/details" 
    },
    
    // Add more cards to test pagination
  ];
  export default cardData;