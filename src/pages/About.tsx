import { Link } from 'react-router-dom'
import { BookOpen, BookMarked, GraduationCap } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { siteData } from '@/content/siteData'

const quickFacts = [
  { label: 'Major', value: 'Computer Science', icon: BookOpen, accent: 'indigo' },
  { label: 'Minor', value: 'Economics', icon: BookMarked, accent: 'emerald' },
  { label: 'Expected Graduation', value: 'May 2026', icon: GraduationCap, accent: 'amber' },
]

const workingWithMeBullets = [
  'Calm, thoughtful, consistent',
  'Follows through and communicates clearly',
  'Patient when debugging and teaching',
  'Cares about doing work that holds up over time',
]

const favoritesBullets = [
  'Favorite place: Cherry State Park',
  'Two cats (they run the house)',
  'Video games to unwind',
  'Traveling and road trips',
  'Camera in hand whenever I can',
]

const aiAndDataTools = [
  'ChatGPT',
  'Claude',
  'Gemini',
  'GitHub Copilot',
  'Perplexity AI',
  'Cursor AI',
  'Stata',
]

const miniCardAccent: Record<string, string> = {
  indigo: 'border-t-2 border-t-indigo-400/60 bg-indigo-50/50 dark:bg-indigo-950/20',
  emerald: 'border-t-2 border-t-emerald-400/60 bg-emerald-50/50 dark:bg-emerald-950/20',
  amber: 'border-t-2 border-t-amber-400/60 bg-amber-50/50 dark:bg-amber-950/20',
}

const cardAccent: Record<string, string> = {
  indigo: 'border-t-4 border-t-indigo-500',
  emerald: 'border-t-4 border-t-emerald-500',
  rose: 'border-t-4 border-t-rose-500',
  amber: 'border-t-4 border-t-amber-500',
  sky: 'border-t-4 border-t-sky-500',
  teal: 'border-t-4 border-t-teal-500',
  violet: 'border-t-4 border-t-violet-500',
}

const pillClasses: Record<string, string> = {
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  rose: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  violet: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
}

const cardBase =
  'rounded-2xl border border-[var(--color-border)] bg-white dark:bg-[var(--color-bg-elevated)] shadow-soft dark:shadow-dark-soft hover:shadow-md transition-shadow px-6 py-5'

export function About() {
  return (
    <div>
      <Section className="pt-36 md:pt-44">
        <div className="flex flex-col gap-8">
          {/* 1) Header */}
          <header>
            <ScrollReveal>
              <h1 className="font-display text-display-xl md:text-display-2xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
                About Me
              </h1>
              <p className="text-body-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                Curious by nature. Calm by default. Always building.
              </p>
            </ScrollReveal>
          </header>

        {/* 2) Quick Facts */}
        <section>
          <div className={`${cardBase} border-t-4 border-t-slate-200 dark:border-t-slate-700`}>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Quick Facts
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickFacts.map(({ label, value, icon: Icon, accent }) => (
                <div
                  key={label}
                  className={`rounded-xl px-4 py-3 ${miniCardAccent[accent]}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/80 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300">
                      <Icon className="h-4 w-4" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-base font-semibold text-slate-900 dark:text-white">{value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3) Main Story */}
        <section>
          <article className={`${cardBase} ${cardAccent.indigo}`}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${pillClasses.indigo}`}>Story</span>
              <h2 className="font-display text-display-md font-semibold text-slate-900 dark:text-white">
                How I found my way here
              </h2>
            </div>
            <div className="text-body text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
              <p>
                I started college as a pre-med student because I was drawn to people and wanted to understand life in a meaningful way. At the time, medicine felt like the most direct path to doing something that mattered.
              </p>
              <p>
                As I moved through my classes, I began to notice something about myself. I enjoyed learning the material, but I was more engaged when I was breaking systems apart, asking how things worked, and thinking about efficiency and structure.
              </p>
              <p>
                That curiosity kept showing up in how I studied and solved problems. Eventually, it became clear that computer science matched the way my mind naturally works. Switching paths wasn&apos;t easy, but it felt honest. I didn&apos;t move toward computer science to escape difficulty — I moved toward it because it lets me build, think deeply, and create solutions that can help people in a different but meaningful way.
              </p>
            </div>
          </article>
        </section>

        {/* 4) Mindset */}
        <section>
          <article className={`${cardBase} ${cardAccent.emerald}`}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${pillClasses.emerald}`}>Mindset</span>
              <h2 className="font-display text-display-md font-semibold text-slate-900 dark:text-white">
                How I approach work and learning
              </h2>
            </div>
            <div className="text-body text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
              <p>
                I&apos;m not someone who rushes through problems. I like to understand the why before writing the how. When something breaks, I want to know what caused it and fix it properly instead of applying a quick patch.
              </p>
              <p>
                Teaching kids how to code reinforced this mindset. It taught me that clarity matters more than complexity, and patience often leads to better outcomes than speed. I try to bring that into every project I work on.
              </p>
            </div>
          </article>
        </section>

        {/* 5) Tech I use */}
        <section>
          <article className={`${cardBase} ${cardAccent.teal}`}>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${pillClasses.teal}`}>Tech</span>
              <h2 className="font-display text-display-md font-semibold text-slate-900 dark:text-white">
                Tech I use
              </h2>
            </div>
            <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              These are the tools I use most often when building and shipping projects.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {siteData.skills.programming.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Frameworks / Libraries</p>
                <div className="flex flex-wrap gap-2">
                  {siteData.skills.frameworks.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Tools / Platforms</p>
                <div className="flex flex-wrap gap-2">
                  {siteData.skills.tools.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">AI & Data Tools</p>
                <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                  I use AI tools to learn faster, debug more effectively, and think through problems—not to replace understanding, but to support it.
                </p>
                <div className="flex flex-wrap gap-2">
                  {aiAndDataTools.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* 6) Life */}
        <section>
          <article className={`${cardBase} ${cardAccent.rose}`}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${pillClasses.rose}`}>Life</span>
              <h2 className="font-display text-display-md font-semibold text-slate-900 dark:text-white">
                The role nature and curiosity play in my life
              </h2>
            </div>
            <div className="text-body text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
              <p>
                Spending time outdoors helps me reset. Hiking gives me space to think without distractions, and photography helps me slow down and notice details I&apos;d otherwise miss.
              </p>
              <p>
                I&apos;m into astrophotography, nature photography, and street photography — I like catching patterns and moments people usually walk past. I also love animals, and that empathy has stuck with me since childhood. It might seem separate from computer science, but it connects back to the same curiosity and attentiveness that guide how I work.
              </p>
            </div>
          </article>
        </section>

        {/* 7) Snapshot — 2-card grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className={`${cardBase} ${cardAccent.amber}`}>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${pillClasses.amber}`}>Work</span>
                <h2 className="font-display text-display-md font-semibold text-slate-900 dark:text-white">
                  What working with me feels like
                </h2>
              </div>
              <ul className="space-y-2 text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                {workingWithMeBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-slate-400 dark:text-slate-500 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className={`${cardBase} ${cardAccent.sky}`}>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${pillClasses.sky}`}>Fun</span>
                <h2 className="font-display text-display-md font-semibold text-slate-900 dark:text-white">
                  Favorites & fun
                </h2>
              </div>
              <ul className="space-y-2 text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                {favoritesBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-slate-400 dark:text-slate-500 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* 8) Open to Opportunities */}
        <section className="mb-0">
          <article className={`${cardBase} ${cardAccent.violet}`}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${pillClasses.violet}`}>Next</span>
              <h2 className="font-display text-display-md font-semibold text-slate-900 dark:text-white">
                Open to Opportunities
              </h2>
            </div>
            <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
              I&apos;m still figuring things out, but I&apos;m intentional about where I&apos;m going. I want to build technology that feels human, useful, and thoughtfully designed — and I&apos;m excited to keep learning through work that challenges me in the right ways. If you&apos;d like to connect, feel free to reach out through my{' '}
              <Link
                to="/contact"
                className="font-medium text-slate-900 dark:text-white underline underline-offset-2 hover:no-underline"
              >
                Contact
              </Link>
              {' '}page.
            </p>
          </article>
        </section>
        </div>
      </Section>
    </div>
  )
}
