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
      <div className="w-fit border-l-[5px] border-[#e0aa04] pl-4 mb-4">
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]`}
          style={{ fontWeight: 700 }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg md:text-xl lg:text-2xl ${light ? 'text-white' : 'text-[#377d87]'} font-semibold uppercase mt-1`} style={{ fontWeight: 600 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
