import Image from 'next/image';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="text-center">
      <Image className="mx-auto h-40 w-40 rounded-full object-cover neumorphic-shadow" src={member.photo} alt={member.name} width={400} height={400} />
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{member.name}</h3>
        <p className="text-blue-500">{member.title}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
