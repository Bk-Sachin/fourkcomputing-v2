const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden group neumorphic-shadow transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20">
      <div className="relative overflow-hidden">
        <img className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" src={project.image} alt={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
      </div>
    </div>
  );
};

export default ProjectCard;
