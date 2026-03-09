interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className='mb-12 text-center md:mb-16'>
      <h2 className={'text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-primary-700'}>
        {title}
      </h2>
      <p className='mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-600 sm:mt-6 sm:text-lg'>
        {description}
      </p>
    </div>
  );
}