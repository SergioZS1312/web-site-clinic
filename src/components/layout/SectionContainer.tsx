export function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-5 md:py-10 pt-24 md:pt-28">
      {children}
    </section>
  );
}