type Variant = {
  variant?: string;
  children?: any;
  href: string;
};

export function Button({ variant, children, href }: Variant) {
  return (
    <>
      {variant === "primary" && (
        <a
          href={href}
          className="p-4 flex items-center text-sm bg-blue-500 text-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-700 transition-colors"
        >
          {children}
        </a>
      )}
      {variant === "secondary" && (
        <a
          href={href}
          className="p-4 flex items-center text-sm text-gray-300 border border-gray-300 text-center rounded font-bold uppercase gap-2 justify-center hover:border-blue-300 hover:text-blue-300 transition-colors"
        >
          {children}
        </a>
      )}
      {variant === undefined && (
        <a
          href={href}
          className="p-4 flex items-center text-sm bg-blue-500 text-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-700 transition-colors"
        >
          {children}
        </a>
      )}
    </>
  );
}
