import Image from 'next/image';

const ProjectCard = ({ project }) => {
  const handleCardClick = () => {
    if (project.website) {
      window.open(project.website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden group neumorphic-shadow transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 ${
        project.website ? 'cursor-pointer' : ''
      }`}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        <Image 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
          src={project.image} 
          alt={project.title} 
          width={600} 
          height={400} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {project.website && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/50 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        {project.website && (
          <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
            <span>Visit Project</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
