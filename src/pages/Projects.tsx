import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { siteData } from '@/content/siteData'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Chip } from '@/components/ui/Chip'
import { ScrollReveal, StaggerContainer } from '@/components/motion/ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'

export function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    siteData.projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  const filteredProjects = useMemo(() => {
    if (!selectedTag) return siteData.projects
    return siteData.projects.filter((project) => project.tags.includes(selectedTag))
  }, [selectedTag])

  return (
    <div>
      <Section className="pt-36 md:pt-44">
        <ScrollReveal>
          <h1 className="font-display text-display-xl md:text-display-2xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            Projects
          </h1>
          <p className="text-body-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            A collection of projects I have worked on.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-10">
          <div className="flex flex-wrap gap-2">
            <Chip as="button" variant={selectedTag === null ? 'selected' : 'default'} onClick={() => setSelectedTag(null)}>
              All
            </Chip>
            {allTags.map((tag) => (
              <Chip
                key={tag}
                as="button"
                variant={selectedTag === tag ? 'selected' : 'default'}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Chip>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTag || 'all'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <AnimatePresence>
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
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
                            <div className="pt-4 mt-4 border-t border-[var(--color-border)] mb-4">
                              <Chip>{project.impact}</Chip>
                            </div>
                          )}
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Chip key={tag}>{tag}</Chip>
                            ))}
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </StaggerContainer>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>
    </div>
  )
}
