interface SectionTitleProps {
  title: string;
  headline: string;
  desc?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  headline,
  desc,
}) => {
  return (
    <div className=' flex flex-col gap-5 items-center'>
      <strong className='text-blue underline underline-offset-8'>{title}</strong>
      <h2 className='font-semibold max-lg:text-xl lg:text-4xl w-3/5 text-center'>{headline}</h2>
      <p className='hover:text-light/70 eq '>{desc}</p>
    </div>
  );
};

export default SectionTitle;
