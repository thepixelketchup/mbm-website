import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity.client";
import SubsectionTemplate from "../subsection_template/subsection-template";

interface TeamMember {
  _key: string;
  name: string;
  role: string;
  description: any[];
  image: any;
}

interface LeadershipTeamSectionProps {
  section: {
    title: string;
    subtitle?: string;
    heroImage?: any;
    members: TeamMember[];
  };
}

export default function LeadershipTeamSection({
  section,
}: LeadershipTeamSectionProps) {
  if (!section) return null;

  return (
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      heroImage={section.heroImage}
      backTo={{
        text: "About",
        url: "/about",
      }}
    >
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-transparent via-muted/30 to-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Single column layout */}
          <div className="block md:hidden space-y-8 sm:space-y-12">
            {section.members.map((member) => (
              <article
                key={member._key}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-muted"
              >
                {/* Header with name and role */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 sm:p-6">
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                      {member.name}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  {/* Image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-32 h-40 sm:w-40 sm:h-48 relative rounded-xl overflow-hidden shadow-lg border-2 border-accent/20">
                        <Image
                          src={urlFor(member.image)
                            .width(300)
                            .height(400)
                            .url()}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 w-32 h-40 sm:w-40 sm:h-48 rounded-xl border-2 border-secondary/30 transform translate-x-1 translate-y-1 -z-10"></div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="prose prose-sm sm:prose-base max-w-none">
                    <PortableText
                      value={member.description}
                      components={{
                        block: {
                          normal: ({ children }) => (
                            <p className="text-foreground/90 leading-relaxed mb-4 text-center sm:text-left">
                              {children}
                            </p>
                          ),
                          h2: ({ children }) => (
                            <h2 className="text-lg sm:text-xl font-bold text-primary mb-3 text-center sm:text-left">
                              {children}
                            </h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="text-base sm:text-lg font-semibold text-accent mb-2 text-center sm:text-left">
                              {children}
                            </h3>
                          ),
                        },
                      }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Tablet/Medium: Flex row layout (same direction for all) */}
          <div className="hidden md:block lg:hidden space-y-12">
            {section.members.map((member) => (
              <article
                key={member._key}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-muted group"
              >
                <div className="flex items-stretch">
                  {/* Content Side */}
                  <div className="flex-1 p-8 lg:p-10">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="h-1 bg-gradient-to-r from-secondary to-accent rounded-full mb-3 w-20"></div>
                      <p className="text-accent text-lg font-semibold">
                        {member.role}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="prose prose-base lg:prose-lg max-w-none">
                      <PortableText
                        value={member.description}
                        components={{
                          block: {
                            normal: ({ children }) => (
                              <p className="text-foreground/90 leading-relaxed text-base lg:text-lg mb-5">
                                {children}
                              </p>
                            ),
                            h2: ({ children }) => (
                              <h2 className="text-xl lg:text-2xl font-bold text-primary mb-4">
                                {children}
                              </h2>
                            ),
                            h3: ({ children }) => (
                              <h3 className="text-lg lg:text-xl font-semibold text-accent mb-3">
                                {children}
                              </h3>
                            ),
                          },
                        }}
                      />
                    </div>
                  </div>

                  {/* Image Side - always on the right */}
                  <div className="w-64 lg:w-72 bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center p-6 lg:p-8">
                    <div className="relative">
                      <div className="w-48 h-60 lg:w-56 lg:h-72 relative rounded-2xl overflow-hidden shadow-xl border-3 border-white group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={urlFor(member.image)
                            .width(350)
                            .height(450)
                            .url()}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 w-48 h-60 lg:w-56 lg:h-72 rounded-2xl border-3 border-secondary/30 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Desktop: Alternating layout */}
          <div className="hidden lg:block space-y-16">
            {section.members.map((member, index) => (
              <article
                key={member._key}
                className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-muted group"
              >
                <div
                  className={`flex ${index % 2 === 1 ? "flex-row-reverse" : "flex-row"} items-stretch`}
                >
                  {/* Content Side */}
                  <div className="flex-1 p-12">
                    {/* Header */}
                    <div
                      className={`mb-8 ${index % 2 === 1 ? "text-right" : "text-left"}`}
                    >
                      <div className="inline-block">
                        <h3 className="text-3xl xl:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                          {member.name}
                        </h3>
                        <div
                          className={`h-1 bg-gradient-to-r from-secondary to-accent rounded-full mb-3 ${
                            index % 2 === 1 ? "ml-auto" : ""
                          }`}
                          style={{ width: "80px" }}
                        ></div>
                        <p className="text-accent text-xl font-semibold">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div
                      className={`prose prose-lg max-w-none ${index % 2 === 1 ? "text-right" : ""}`}
                    >
                      <PortableText
                        value={member.description}
                        components={{
                          block: {
                            normal: ({ children }) => (
                              <p
                                className={`text-foreground/90 leading-relaxed text-lg mb-6 ${
                                  index % 2 === 1 ? "text-right" : "text-left"
                                }`}
                              >
                                {children}
                              </p>
                            ),
                            h2: ({ children }) => (
                              <h2
                                className={`text-2xl font-bold text-primary mb-4 ${
                                  index % 2 === 1 ? "text-right" : "text-left"
                                }`}
                              >
                                {children}
                              </h2>
                            ),
                            h3: ({ children }) => (
                              <h3
                                className={`text-xl font-semibold text-accent mb-3 ${
                                  index % 2 === 1 ? "text-right" : "text-left"
                                }`}
                              >
                                {children}
                              </h3>
                            ),
                          },
                        }}
                      />
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="w-80 bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center p-8">
                    <div className="relative">
                      <div className="w-64 h-80 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={urlFor(member.image)
                            .width(400)
                            .height(500)
                            .url()}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="absolute inset-0 w-64 h-80 rounded-2xl border-4 border-secondary/30 transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SubsectionTemplate>
  );
}
