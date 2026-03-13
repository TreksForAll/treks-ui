import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-left items-start',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} ${className}`}>
      <div className="w-fit flex flex-col">
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] mb-4 bg-gradient-to-b from-[#3b3939] to-[#929192] bg-clip-text text-transparent`}
        style={{ fontWeight: 700 }}
      >
        {title}
      </h2>
      <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#f3b815' }}></div>
      </div>
      {subtitle && (
        <p className={`text-lg md:text-xl lg:text-2xl ${light ? 'text-white' : 'text-earth-600'} font-semibold uppercase`} style={{ fontWeight: 600 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
