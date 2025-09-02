const ServiceCard = ({ service }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl neumorphic-shadow transition-transform transform hover:-translate-y-2">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-6 neumorphic-shadow-inset">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
      <p className="mt-4 text-gray-600 dark:text-gray-300">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
