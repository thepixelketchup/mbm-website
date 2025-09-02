import { PortableText } from "@portabletext/react";
import { Link } from "sanity/router";
import clsx from "clsx";

const getComponents = (className?: string) => ({
  types: {
    image: ({ value }: any) => (
      <img
        src={value.asset.url}
        alt={value.alt || "Image"}
        className={clsx("rounded-xl my-6", className)}
      />
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className={clsx("text-4xl font-bold my-4", className)}>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className={clsx("text-3xl font-semibold my-3", className)}>
        {children}
      </h2>
    ),
    normal: ({ children }: any) => (
      <p className={clsx("text-lg leading-relaxed text-black mb-4", className)}>
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote
        className={clsx(
          "border-l-4 border-gray-400 pl-4 italic my-4",
          className,
        )}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className={clsx("font-bold text-gray-900", className)}>
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className={clsx("italic text-gray-600", className)}>{children}</em>
    ),
    link: ({ value, children }: any) => (
      <Link
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "text-blue-600 underline hover:text-blue-800",
          className,
        )}
      >
        {children}
      </Link>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className={clsx("list-disc list-inside pl-4 space-y-2", className)}>
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol
        className={clsx("list-decimal list-inside pl-4 space-y-2", className)}
      >
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className={clsx("text-gray-700", className)}>{children}</li>
    ),
  },
});

export default function PortableTextComponent({
  value,
  className = "",
}: {
  value: any;
  className?: string;
}) {
  return <PortableText value={value} components={getComponents(className)} />;
}
