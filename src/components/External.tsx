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
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-1 hover:bg-gray-600 transition-colors lg:flex-row lg:gap-6"
    >
      <div className="bg-blue-500 h-full p-6 flex items-center justify-center lg:justify-start">
        {icon}
      </div>
      <div className="p-2 lg:px-0 leading-relaxed lg:text-left lg:py-8">
        <strong className="text-1xl lg:text-2xl">{title}</strong>
        <p className="text-sm text-gray-200 mt-2">{children}</p>
      </div>
      <div className="h-full p-1 flex items-center justify-center text-blue-300 lg:p-6">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
