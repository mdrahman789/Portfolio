import { useParams, Link } from 'react-router-dom'
import { siteData } from '@/content/siteData'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Chip } from '@/components/ui/Chip'
import { ScrollReveal, StaggerContainer } from '@/components/motion/ScrollReveal'
import { ArrowLeft } from 'lucide-react'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = siteData.projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div>
        <Section className="pt-36 md:pt-44">
          <ScrollReveal>
            <h1 className="font-display text-display-lg font-bold mb-4 text-slate-900 dark:text-white">
              Project Not Found
            </h1>
            <Link to="/projects" className="text-body text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors focus-ring rounded-lg">
              Back to Projects
            </Link>
          </ScrollReveal>
        </Section>
      </div>
    )
  }

  return (
    <div>
      <Section className="pt-36 md:pt-44">
        <ScrollReveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-body text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-10 transition-colors focus-ring rounded-lg px-1 -mx-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <h1 className="font-display text-display-xl md:text-display-2xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            {project.title}
          </h1>
          <p className="text-body-lg text-slate-600 dark:text-slate-400 mb-2">
            {project.role}
          </p>
          <p className="text-body-sm text-slate-500 dark:text-slate-500 mb-10">
            {project.startDate} to {project.endDate}
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-14 space-y-8">
          <ScrollReveal delay={0.1}>
            <Card>
              <h2 className="font-display text-display-md font-semibold mb-4 text-slate-900 dark:text-white">
                Overview
              </h2>
              <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.overview}
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card>
              <h2 className="font-display text-display-md font-semibold mb-4 text-slate-900 dark:text-white">
                Problem
              </h2>
              <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.problem}
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Card>
              <h2 className="font-display text-display-md font-semibold mb-4 text-slate-900 dark:text-white">
                Approach
              </h2>
              <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.approach}
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <Card>
              <h2 className="font-display text-display-md font-semibold mb-4 text-slate-900 dark:text-white">
                Solution
              </h2>
              <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.solution}
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <Card>
              <h2 className="font-display text-display-md font-semibold mb-4 text-slate-900 dark:text-white">
                Impact
              </h2>
              <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.impactDetails}
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <Card>
              <h2 className="font-display text-display-md font-semibold mb-4 text-slate-900 dark:text-white">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <Card>
              <h2 className="font-display text-display-md font-semibold mb-4 text-slate-900 dark:text-white">
                What I Would Improve Next
              </h2>
              <ul className="space-y-3">
                {project.improvements.map((improvement, index) => (
                  <li
                    key={index}
                    className="text-body text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-slate-400 dark:text-slate-500 mt-1.5">·</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        </StaggerContainer>
      </Section>
    </div>
  )
}
