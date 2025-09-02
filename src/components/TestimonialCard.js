import { QuoteIcon } from './icons';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl neumorphic-shadow h-full flex flex-col">
      <div className="flex-shrink-0 text-gray-400 dark:text-gray-600">
        <QuoteIcon />
      </div>
      <blockquote className="mt-6 text-gray-600 dark:text-gray-300 flex-grow">
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
      <footer className="mt-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full object-cover" src={testimonial.photo} alt={testimonial.name} />
          </div>
          <div className="ml-4">
            <div className="text-base font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
            <div className="text-base text-gray-500 dark:text-gray-400">{testimonial.company}</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TestimonialCard;
