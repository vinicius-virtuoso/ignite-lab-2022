type Variant = {
  variant?: string;
  children?: any;
  href: string;
};

export function Button({ variant, children, ...rest }: Variant) {
  return (
    <>
      {variant === "primary" && (
        <a
          className="p-4 flex items-center text-sm bg-blue-500 text-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-700 transition-colors"
          {...rest}
        >
          {children}
        </a>
      )}
      {variant === "secondary" && (
        <a
          className="p-4 flex items-center text-sm text-gray-300 border border-gray-300 text-center rounded font-bold uppercase gap-2 justify-center hover:border-blue-300 hover:text-blue-300 transition-colors"
          {...rest}
        >
          {children}
        </a>
      )}
      {variant === undefined && (
        <a
          className="p-4 flex items-center text-sm bg-blue-500 text-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-700 transition-colors"
          {...rest}
        >
          {children}
        </a>
      )}
    </>
  );
}
