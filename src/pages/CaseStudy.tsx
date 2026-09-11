// Optional case-study detail page for a portfolio project.
// Only projects with a `caseStudy` object show meaningful content here.
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/Section";
import { setPageMeta } from "@/lib/seo";
import { findProject } from "@/data/projects";
import { siteConfig } from "@/config/site";

export function CaseStudyPage() {
  const params = useParams();
  const project = findProject(params["slug"] ?? "");

  if (!project) {
    setPageMeta({
      title: `Project unavailable — ${siteConfig.legalName}`,
    });
    return (
      <Section>
        <SectionHeading
          level={1}
          title="Project not found"
          description="This project may have been removed. Browse our other work instead."
        />
        <Button asChild className="mt-6">
          <Link to="/work">Back to Our Work</Link>
        </Button>
      </Section>
    );
  }

  const title = `${project.business} — ${project.category} Website | ${siteConfig.legalName}`;
  setPageMeta({ title, description: project.description });

  return (
    <>
      <Section>
        <Link
          to="/work"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft size={15} aria-hidden="true" /> All work
        </Link>
        <span className="mx-3 text-border" aria-hidden="true">
          /
        </span>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
          aria-label="Back to home page"
        >
          <ArrowLeft size={15} aria-hidden="true" /> Back to home
        </Link>
        <SectionHeading
          level={1}
          eyebrow={project.category}
          title={project.business}
          description={project.description}
        />
        {project.websiteUrl ? (
          <Button asChild className="mt-6">
            <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
              Visit website <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </Button>
        ) : null}
      </Section>

      <Section tone="surface">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">The challenge</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.caseStudy?.challenge ?? "[ADD CHALLENGE]"}
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Our approach</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.caseStudy?.approach ?? "[ADD APPROACH]"}
            </p>
          </div>
        </div>

        {project.caseStudy?.result ? (
          <div className="mt-8 rounded-xl border border-border bg-card p-5">
            <h2 className="font-display text-base font-semibold text-foreground">
              Verified result
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.caseStudy.result}
            </p>
          </div>
        ) : null}
      </Section>

      <Section>
        <SectionHeading title="Screenshots" />
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {(project.caseStudy?.screenshots?.length ? project.caseStudy.screenshots : [""]).map(
            (src, i) => (
              <div
                key={`${src}-${i}`}
                className="aspect-16/10 overflow-hidden rounded-xl border border-border bg-muted"
              >
                {src ? (
                  <img
                    src={src}
                    alt={`${project.business} website screenshot ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground">
                    <ImageIcon size={20} aria-hidden="true" />
                    <span className="text-xs">Screenshots coming soon</span>
                  </div>
                )}
              </div>
            ),
          )}
        </div>
      </Section>
    </>
  );
}
