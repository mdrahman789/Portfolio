import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { PageTransition } from '@/components/motion/PageTransition'
import { siteData } from '@/content/siteData'

interface RouteWrapperProps {
  children: ReactNode
  title: string
  description?: string
}

export function RouteWrapper({ children, title, description }: RouteWrapperProps) {
  const location = useLocation()
  const fullTitle = `${title} | ${siteData.profile.name}`

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
        <meta property="og:title" content={fullTitle} />
        {description && <meta property="og:description" content={description} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        {description && <meta name="twitter:description" content={description} />}
      </Helmet>
      <PageTransition key={location.pathname}>
        {children}
      </PageTransition>
    </>
  )
}
