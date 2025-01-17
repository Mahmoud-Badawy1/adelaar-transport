"use client";

const ServiceOptions = () => {
  const services = [
    {
      id: 1,
      title: "Intermodal Shipping",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et"
    },
    {
      id: 2,
      title: "Freeze product Shipping",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et"
    },
    {
      id: 3,
      title: "Hot Shot Trucking",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et"
    },
    {
      id: 4,
      title: "Container Freight",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et"
    },
    {
      id: 5,
      title: "Intermodal Shipping",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et"
    },
    {
      id: 6,
      title: "Flatbed Shipping",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Service Options
          </h2>
          <div className="w-12 h-1 bg-orange mt-2"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex items-start space-x-4">
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 text-orange font-semibold rounded-full ">
                  {service.id}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;