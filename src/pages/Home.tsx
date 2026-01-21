import { Link } from 'react-router-dom'
import { siteData } from '@/content/siteData'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Chip } from '@/components/ui/Chip'
import { CommandSearchBar } from '@/components/layout/CommandSearchBar'
import { ScrollReveal, StaggerContainer } from '@/components/motion/ScrollReveal'
import { Parallax } from '@/components/motion/Parallax'

export function Home() {
  return (
    <div>
      <Section className="pt-36 md:pt-44 pb-24">
        <div className="grid md:grid-cols-2 gap-14 md:gap-16 items-center">
          <Parallax speed={0.3}>
            <ScrollReveal>
              <h1 className="font-display text-display-xl md:text-display-2xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
                {siteData.profile.name}
              </h1>
              <p className="text-body-lg md:text-display-sm text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
                {siteData.home.hero.introduction}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button as="link" to="/projects" variant="primary">
                  {siteData.home.hero.ctaProjects}
                </Button>
                <Button as="link" to="/contact" variant="secondary">
                  {siteData.home.hero.ctaContact}
                </Button>
              </div>
              <div className="mt-6 max-w-md">
                <CommandSearchBar variant="hero" />
              </div>
            </ScrollReveal>
          </Parallax>
        </div>
      </Section>

      <Section id="what-i-do" title={siteData.home.whatIDo.title}>
        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {siteData.home.whatIDo.items.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card hover className="h-full">
                <h3 className="font-display text-display-sm font-semibold mb-3 text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </Section>

      <Section id="projects" title="Featured Work">
        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {siteData.projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <Link to={`/projects/${project.slug}`}>
                <Card hover className="h-full block">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-display-sm font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-body-sm text-slate-500 dark:text-slate-500 mb-3">
                    {project.role} · {project.startDate} to {project.endDate}
                  </p>
                  <p className="text-body text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.summary}
                  </p>
                  {project.impact && (
                    <div className="pt-4 mt-4 border-t border-[var(--color-border)]">
                      <Chip>{project.impact}</Chip>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </Section>

      <Section id="metrics" title={siteData.home.metrics.title}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {siteData.home.metrics.items.map((metric, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="text-center">
                <Chip className="mb-3">{metric.label}</Chip>
                <div className="font-display text-display-lg md:text-display-xl font-bold text-slate-900 dark:text-white">
                  {metric.value}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section id="now" title={siteData.home.now.title}>
        <ScrollReveal>
          <div className="max-w-3xl space-y-6">
            <Card>
              <h3 className="font-display text-display-sm font-semibold mb-3 text-slate-900 dark:text-white">
                Currently Focused On
              </h3>
              <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                {siteData.home.now.focused}
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-display-sm font-semibold mb-3 text-slate-900 dark:text-white">
                Looking For
              </h3>
              <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                {siteData.home.now.lookingFor}
              </p>
            </Card>
          </div>
        </ScrollReveal>
      </Section>

      <Section id="teaching" title={siteData.home.teaching.title}>
        <ScrollReveal>
          <div className="max-w-3xl">
            <Card>
              <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                {siteData.home.teaching.description}
              </p>
            </Card>
          </div>
        </ScrollReveal>
      </Section>

      <Section id="contact" className="pt-0 pb-24">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-display-lg md:text-display-xl font-bold mb-4 text-slate-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-body-lg text-slate-600 dark:text-slate-400 mb-10">
              I am always interested in connecting with others in the tech community.
            </p>
            <Button as="link" to="/contact" variant="primary">
              View Contact Information
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </div>
  )
}
