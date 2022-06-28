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
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-0 hover:bg-gray-600 transition-colors flex-col lg:flex-row"
    >
      <div className="bg-blue-500 h-full p-6 flex items-center justify-center lg:justify-start">
        {icon}
      </div>
      <div className="p-6 lg:px-0 leading-relaxed text-center">
        <strong className="text-2xl ">{title}</strong>
        <p className="text-sm text-gray-200 mt-2">{children}</p>
      </div>
      <div className="h-full p-6 flex items-center justify-center text-blue-300">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
