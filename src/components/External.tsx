import { CaretRight } from "phosphor-react";

interface External {
  href: string;
  children: string;
  icon?: any;
  title: string;
}

export function External({ href, icon, title, children }: External) {
  return (
    <a
      href={href}
      target="_blank"
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
    >
      <div className="bg-blue-500 h-full p-6 flex items-center">{icon}</div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{title}</strong>
        <p className="text-sm text-gray-200 mt-2">{children}</p>
      </div>
      <div className="h-full p-6 flex items-center text-blue-300">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
