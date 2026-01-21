import { siteData } from '@/content/siteData'
import { Section } from '@/components/ui/Section'
import { ScrollReveal, StaggerContainer } from '@/components/motion/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Chip } from '@/components/ui/Chip'

export function Experience() {
  const allExperiences = [...siteData.experiences, ...siteData.leadership]

  return (
    <div>
      <Section className="pt-36 md:pt-44">
        <ScrollReveal>
          <h1 className="font-display text-display-xl md:text-display-2xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            Experience
          </h1>
          <p className="text-body-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            A timeline of my professional experience and leadership roles.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-14 space-y-8">
          {allExperiences.map((experience, index) => (
            <ScrollReveal key={experience.id} delay={index * 0.1}>
              <Card hover>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="font-display text-display-sm md:text-display-md font-semibold text-slate-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-body-lg text-slate-600 dark:text-slate-400 mt-1">
                      {experience.organization}
                    </p>
                    {(experience as { location?: string }).location && (
                      <p className="text-body-sm text-slate-500 dark:text-slate-500 mt-1">
                        {(experience as { location?: string }).location}
                      </p>
                    )}
                  </div>
                  <div className="text-body-sm text-slate-500 dark:text-slate-500 mt-2 md:mt-0 md:text-right">
                    {experience.startDate} to {experience.endDate}
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {experience.description.map((desc, idx) => (
                    <p
                      key={idx}
                      className="text-body text-slate-600 dark:text-slate-400 leading-relaxed"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
                {experience.metrics && experience.metrics.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-[var(--color-border)]">
                    <div className="flex flex-wrap gap-2">
                      {experience.metrics.map((metric, idx) => (
                        <Chip key={idx}>{metric}</Chip>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </Section>
    </div>
  )
}
