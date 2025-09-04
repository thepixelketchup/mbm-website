import { PortableText } from "@portabletext/react";
import { Link } from "sanity/router";
import clsx from "clsx";

const getComponents = (className?: string) => ({
  types: {
    image: ({ value }: any) => (
      <div className="relative my-4 sm:my-6 lg:my-8">
        <img
          src={value.asset.url}
          alt={value.alt || "Image"}
          className={clsx(
            "rounded-lg sm:rounded-xl w-full h-auto shadow-lg hover:shadow-xl transition-shadow duration-300",
            className,
          )}
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1
        className={clsx(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 lg:mb-6 mt-6 sm:mt-8 lg:mt-10 leading-tight",
          className,
        )}
      >
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2
        className={clsx(
          "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-2 sm:mb-3 lg:mb-4 mt-4 sm:mt-6 lg:mt-8 leading-tight",
          className,
        )}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3
        className={clsx(
          "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-2 sm:mb-3 lg:mb-4 mt-4 sm:mt-5 lg:mt-6 leading-snug",
          className,
        )}
      >
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4
        className={clsx(
          "text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-primary mb-2 sm:mb-3 mt-3 sm:mt-4 lg:mt-5 leading-snug",
          className,
        )}
      >
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p
        className={clsx(
          "text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed sm:leading-relaxed md:leading-loose mb-3 sm:mb-4 lg:mb-6",
          className,
        )}
      >
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote
        className={clsx(
          "border-l-2 sm:border-l-4 border-accent bg-accent/5 pl-3 sm:pl-4 md:pl-6 py-2 sm:py-3 md:py-4 italic my-4 sm:my-6 lg:my-8 rounded-r-lg text-sm sm:text-base md:text-lg text-foreground/80",
          className,
        )}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className={clsx("font-bold text-primary", className)}>
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className={clsx("italic text-accent", className)}>{children}</em>
    ),
    link: ({ value, children }: any) => (
      <Link
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "text-primary underline decoration-secondary/50 hover:decoration-secondary hover:text-accent transition-all duration-300 font-medium",
          className,
        )}
      >
        {children}
      </Link>
    ),
    code: ({ children }: any) => (
      <code
        className={clsx(
          "bg-muted text-primary px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm md:text-base font-mono border border-muted",
          className,
        )}
      >
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul
        className={clsx(
          "list-disc list-outside pl-4 sm:pl-6 md:pl-8 space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-foreground/90",
          className,
        )}
      >
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol
        className={clsx(
          "list-decimal list-outside pl-4 sm:pl-6 md:pl-8 space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-foreground/90",
          className,
        )}
      >
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li
        className={clsx(
          "text-foreground/90 leading-relaxed pl-1 sm:pl-2",
          className,
        )}
      >
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li
        className={clsx(
          "text-foreground/90 leading-relaxed pl-1 sm:pl-2",
          className,
        )}
      >
        {children}
      </li>
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
  return (
    <div
      className={clsx(
        "prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none",
        "prose-headings:font-serif prose-headings:text-primary",
        "prose-p:text-foreground/90 prose-p:leading-relaxed",
        "prose-a:text-primary prose-a:decoration-secondary/50 hover:prose-a:decoration-secondary",
        "prose-strong:text-primary prose-em:text-accent",
        "prose-blockquote:border-accent prose-blockquote:bg-accent/5",
        "prose-code:bg-muted prose-code:text-primary prose-code:border prose-code:border-muted",
        className,
      )}
    >
      <PortableText value={value} components={getComponents()} />
    </div>
  );
}
