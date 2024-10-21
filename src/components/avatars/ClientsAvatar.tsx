import React from 'react';
import { FaPlus } from 'react-icons/fa';

interface Avatar {
  src: string;
}

interface ClientsAvatarProps {
  avatars: Avatar[];
}

const ClientsAvatar: React.FC<ClientsAvatarProps> = ({ avatars }) => {
  // Get the avatars to display (limit to 3)
  const avatarsToShow = avatars.slice(0, 3);
  // Calculate surplus (avatars.length - 3)
  const surplus = avatars.length - 3;

  // Helper function to format the surplus count (K for thousands, M for millions, B for billions)
    const formatSurplus = (surplus: number): string => {
    if (surplus > 999999999) {
        return `${(surplus / 1000000000).toFixed(1)}B`;
        }
    if (surplus > 999999) {
      return `${(surplus / 1000000).toFixed(1)}M`;
    }
    else if (surplus > 999) {
      return `${(surplus / 1000).toFixed(1)}K`;
    }
    return surplus.toString();
  };

  return (
    <div className="flex items-center justify-center lg:justify-start w-full max-w-[20rem]">
      {avatarsToShow.map((avatar, index) => (
        <div
          key={index}
          className={`w-[2.7rem] h-[2.7rem] lg:w-[4rem] lg:h-[4rem] shadow-xl rounded-full border-2 border-white overflow-hidden -ml-9 ${
            index === 0 ? '' : 'z-' + index
          }`}
          style={{ marginLeft: index === 0 ? 0 : '-1rem' }}
        >
          <img
            src={avatar.src}
            alt={`Avatar ${index + 1}`}
            className="w-full h-full object-cover border-2 rounded-full border-white"
          />
        </div>
      ))}
      {surplus > 0 && (
        <div
          className="w-full max-w-[9rem] h-8 flex flex-col justify-center rounded-full bg-transparent pl-6"
          style={{ marginLeft: '-0.8rem' }}
        >
          <span className="flex items-center font-bold">
            {formatSurplus(surplus)}&nbsp;<FaPlus className='text-[0.6rem]'/>
          </span>
          <p className='text-sm md:text-md'>Worldwide clients</p>
        </div>
      )}
    </div>
  );
};

export default ClientsAvatar;
