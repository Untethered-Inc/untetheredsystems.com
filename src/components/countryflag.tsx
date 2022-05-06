import ReactCountryFlag from 'react-country-flag';

type CountryFlagProps = {
  lang: string;
};

const CountryFlag = ({ lang }: CountryFlagProps): JSX.Element => {
  return (
    <ReactCountryFlag
      style={{
        fontSize: '1.5em',
        lineHeight: '1.5em',
      }}
      countryCode={lang.toUpperCase()}
      aria-label={`${lang.toUpperCase()}'s Flag`}
    />
  );
};

export default CountryFlag;
