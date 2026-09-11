import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ProjectCard, EmptyProjects } from "@/components/ProjectCard";
import { setPageMeta } from "@/lib/seo";
import { sortedProjects } from "@/data/projects";

const title = "Our Work — Website Projects by SiteCrafters Rwanda";
const description =
  "A selection of business websites built by SiteCrafters in Rwanda, across real estate, restaurants, retail and local services.";

export function WorkPage() {
  const projects = sortedProjects();
  setPageMeta({ title, description });

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Websites built for real businesses"
        description="Each project starts from the client's own information — services, products, photos and prices — then gets structured so customers find what they need fast."
      />

      <Section>
        {projects.length === 0 ? (
          <EmptyProjects />
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}
        <div className="mt-10">
          <Button asChild size="lg">
            <Link to="/contact">Start your project</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
