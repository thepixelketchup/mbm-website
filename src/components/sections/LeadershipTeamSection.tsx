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
      <section className="py-20 bg-gradient-to-b from-transparent to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {section.members.map((member) => (
              <div
                key={member._key}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-purple-100 text-lg font-medium">
                    {member.role}
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-12">
                  <div className="lg:col-span-2">
                    <div className="prose prose-lg prose-purple max-w-none">
                      <PortableText
                        value={member.description}
                        components={{
                          block: {
                            normal: ({ children }) => (
                              <p className="text-gray-700 leading-relaxed text-lg mb-6 text-justify">
                                {children}
                              </p>
                            ),
                            h2: ({ children }) => (
                              <h2 className="text-2xl font-bold text-purple-700 mb-4">
                                {children}
                              </h2>
                            ),
                            h3: ({ children }) => (
                              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                                {children}
                              </h3>
                            ),
                          },
                        }}
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-1 flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="w-64 h-80 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                          src={urlFor(member.image)
                            .width(400)
                            .height(500)
                            .url()}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 w-64 h-80 rounded-2xl border-4 border-purple-200 transform translate-x-2 translate-y-2 -z-10"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SubsectionTemplate>
  );
}
