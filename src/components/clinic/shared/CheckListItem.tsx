import { Check } from 'lucide-react';

interface CheckListItemProps {
  text: string;
}

export default function CheckListItem({ text }: CheckListItemProps) {
  return (
    <div className="flex items-center gap-4 border-l-4 border-primary-600 bg-primary-50 p-4 transition-all duration-300 hover:bg-primary-100">
      <Check className="h-6 w-6 shrink-0 text-primary-600" strokeWidth={2.5} />
      <span className="font-semibold text-secondary-800">{text}</span>
    </div>
  );
}
