import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import {
  Services,
  BigMarquee,
  ChipMarquee,
  About,
  Capabilities,
  Work,
  Faq,
  CtaFooter,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sharma Cloud Technologies | Software, Apps & AI Agents" },
      {
        name: "description",
        content:
          "Sharma Cloud Technologies builds custom software, mobile apps, AI agents and cloud solutions that automate and grow modern businesses.",
      },
      { property: "og:title", content: "Sharma Cloud Technologies | Software, Apps & AI Agents" },
      {
        property: "og:description",
        content:
          "Custom software, mobile apps and intelligent AI agents built for modern businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sharma Cloud Technologies" },
      {
        name: "twitter:description",
        content: "Custom software, mobile apps and intelligent AI agents built for modern businesses.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <BigMarquee />
        <div className="py-6">
          <ChipMarquee />
        </div>
        <About />
        <Capabilities />
        <Work />
        <Faq />
        <CtaFooter />
      </main>
    </div>
  );
}
