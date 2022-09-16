import React from 'react';

type SectionTitleProps = {
  subtitle: string;
  title: string;
  dark: string;
  darkBg: any,
  centerAlign: any;
  description: any;
}

const SectionTitle = ({ subtitle, dark, title, centerAlign, description }: SectionTitleProps) => {
  return (
    <>
      {subtitle ? (
        <div
          className={`${centerAlign ? 'section-heading text-center' : 'section-heading'
            }`}
          data-aos='fade-up'
        >
          <h4 className={`h5 ${dark ? 'text-warning' : 'text-primary'}`}>
            {subtitle}
          </h4>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ) : (
        <div
          className={`${centerAlign ? 'section-heading text-center' : 'section-heading'
            }`}
          data-aos='fade-up'
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
