import { PortableText } from "@portabletext/react";

const components = {
    types: {
        image: ({ value }: any) => (
            <img
                src={value.asset.url}
                alt={value.alt || "Image"}
                className="rounded-xl my-6"
            />
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-4xl font-bold my-4">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-3xl font-semibold my-3">{children}</h2>
        ),
        normal: ({ children }: any) => (
            <p className="text-base leading-relaxed text-gray-700 mb-4">
                {children}
            </p>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4">
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }: any) => (
            <strong className="font-bold text-gray-900">{children}</strong>
        ),
        em: ({ children }: any) => (
            <em className="italic text-gray-600">{children}</em>
        ),
        link: ({ value, children }: any) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
            >
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="list-disc list-inside pl-4 space-y-2">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="list-decimal list-inside pl-4 space-y-2">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }: any) => <li className="text-gray-700">{children}</li>,
    },
};

export default function PortableTextComponent({ value }: { value: any }) {
    return <PortableText value={value} components={components} />;
}
