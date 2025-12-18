/** biome-ignore-all lint/performance/noImgElement: Using img for design consistency */
"use client";

import DashedBorder from "@/components/shared/dashed-border";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Description, Title } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  href?: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Filip Patkovic ",
    title: "CEO",
    href: " https://www.linkedin.com/in/filip-patkovic/",
    description: "Here for the long game.",
    image: "/images/no-img.jpg",
  },
  {
    id: 2,
    name: "Ivan Soc",
    title: " CTO",
    href: " https://www.linkedin.com/in/ivan-soc/",
    description: "Transforms vision into reality.",
    image: "/images/no-img.jpg",
  },
  {
    id: 3,
    name: "Aleksa Covic ",
    title: "CPO",
    href: "https://www.linkedin.com/in/aleksa-%C4%8Dovi%C4%87/",
    description: "Solving problems before they appear.",
    image: "/images/no-img.jpg",
  },
  {
    id: 4,
    name: "Nebojsa Markovic",
    title: "Project Manager",
    href: "https://www.linkedin.com/in/nebojsa001/",
    description: "Bringing chaos to order.",
    image: "/images/no-img.jpg",
  },
];

export function TeamSection() {
  return (
    <DashedBorder
      sides="all"
      className="flex flex-col items-center gap-8 py-12"
    >
      <div className="flex flex-col items-center gap-4">
        <Title className="text-3xl font-medium text-center">Our team</Title>
        <Description className="max-w-2xl text-center">
          Meet our team, experts in the field of gambling and online gaming.
        </Description>
      </div>

      <div className="w-full mx-auto md:max-w-4xl lg:max-w-7xl ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {teamMembers.map((member) => (
              <CarouselItem
                key={member.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <TeamMemberCard member={member} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </DashedBorder>
  );
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="border rounded-xl p-2 w-full h-[450px]">
      <DashedBorder
        sides="all"
        className="justify-between w-full h-full p-0 mx-0 rounded-lg md:mx-0"
      >
        <Image
          src={member.image}
          alt={member.name}
          width={500}
          height={300}
          className="w-full h-[70%] rounded-sm object-cover mb-2"
        />
        <Title className="text-xl md:text-2xl lg:text-2xl">{member.name}</Title>
        <Link href={member.href || "#"} target="_blank" className="mb-1">
          <Description className="text-primary">{member.title}</Description>
        </Link>
        <DashedBorder sides="top" className="w-full px-0 mx-0 md:mx-0">
          <Description className="text-sm text-center">
            {member.description}
          </Description>
        </DashedBorder>
      </DashedBorder>
    </div>
  );
}
