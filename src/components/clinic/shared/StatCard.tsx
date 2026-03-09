import CounterAnimation from './CounterAnimation';

interface StatCardProps {
  target: number;
  suffix?: string;
  label: string;
}

export default function StatCard({ target, suffix = '', label }: StatCardProps) {
  return (
    <div className="border-t-4 border-primary-600 bg-surface-0 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="text-5xl font-black text-primary-700">
        <CounterAnimation target={target} suffix={suffix} />
      </div>
      <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-secondary-600">{label}</div>
    </div>
  );
}
