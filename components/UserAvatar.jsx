'use client';

export default function UserAvatar({ name, size = 'md' }) {
  const colors = [
    '#F4A261',
    '#B8E6D5',
    '#C8B3E6',
    '#2C2C2C',
    '#E8DCC4'
  ];

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getColor = (name) => {
    const index = name.length % colors.length;
    return colors[index];
  };

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  const bgColor = getColor(name);
  const textColor = bgColor === '#2C2C2C' ? '#B8E6D5' : '#2C2C2C';

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold border-4 border-white`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {getInitials(name)}
    </div>
  );
}
