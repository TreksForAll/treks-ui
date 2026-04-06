import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
  light = false
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  const textAlignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} ${className}`}>
      <div className={`w-fit border-l-[5px] border-[#e0aa04] pl-3 sm:pl-4 mb-2 sm:mb-3`}>
        <h2
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.04em] sm:tracking-[0.08em] text-[#e0aa04] leading-tight`}
          style={{ fontWeight: 700 }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${light ? 'text-white' : 'text-[#377d87]'} font-semibold uppercase mt-0.5 sm:mt-1 leading-snug`} style={{ fontWeight: 600 }}>
            {subtitle}
          </p>
        )}
      </div>
      {description && (
        <p className={`text-sm sm:text-base md:text-lg ${light ? 'text-gray-300' : 'text-earth-600'} ${textAlignClass} max-w-3xl font-medium mt-1.5 sm:mt-2 mb-3 sm:mb-4 ml-0 leading-snug sm:leading-normal`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
