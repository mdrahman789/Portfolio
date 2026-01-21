import { siteData } from '@/content/siteData'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteData.profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      <Section className="pt-36 md:pt-44">
        <ScrollReveal>
          <h1 className="font-display text-display-xl md:text-display-2xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="text-body-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-14">
            I am always interested in connecting with others in the tech community. Feel free to reach out via email or connect on social platforms.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
          <ScrollReveal>
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-5">
                <Mail className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                <h2 className="font-display text-display-md font-semibold text-slate-900 dark:text-white">
                  Email
                </h2>
              </div>
              <div className="mb-4">
                <p className="text-body text-slate-600 dark:text-slate-400 mb-5 break-all">
                  {siteData.profile.email}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Button
                    onClick={handleCopyEmail}
                    variant="secondary"
                    className="flex items-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </Button>
                  <Button
                    as="a"
                    href={`mailto:${siteData.profile.email}`}
                    variant="primary"
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </Button>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Card className="h-full">
              <h2 className="font-display text-display-md font-semibold mb-6 text-slate-900 dark:text-white">
                Connect
              </h2>
              <div className="space-y-4">
                <a
                  href={siteData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors group focus-ring"
                >
                  <Github className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors shrink-0" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      GitHub
                    </p>
                    <p className="text-body-sm text-slate-500 dark:text-slate-500">
                      View my code and projects
                    </p>
                  </div>
                </a>
                <a
                  href={siteData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors group focus-ring"
                >
                  <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors shrink-0" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      LinkedIn
                    </p>
                    <p className="text-body-sm text-slate-500 dark:text-slate-500">
                      Connect professionally
                    </p>
                  </div>
                </a>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  )
}
