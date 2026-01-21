import { siteData } from '@/content/siteData'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { ScrollReveal, StaggerContainer } from '@/components/motion/ScrollReveal'

export function About() {
  return (
    <div>
      <Section className="pt-36 md:pt-44">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h1 className="font-display text-display-xl md:text-display-2xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight">
              {siteData.about.title}
            </h1>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-14 max-w-3xl space-y-8">
          {siteData.about.sections.map((section, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card>
                <p className="text-body-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {section}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.4} className="mt-14">
          <Card>
            <div className="space-y-4">
              <h2 className="font-display text-display-md font-semibold text-slate-900 dark:text-white">
                {siteData.profile.jobSeeking.title}
              </h2>
              <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                {siteData.profile.jobSeeking.description}
              </p>
            </div>
          </Card>
        </ScrollReveal>
      </Section>
    </div>
  )
}
