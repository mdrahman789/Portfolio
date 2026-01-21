import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Experience } from '@/pages/Experience'
import { Projects } from '@/pages/Projects'
import { ProjectDetailWrapper } from '@/pages/ProjectDetailWrapper'
import { Contact } from '@/pages/Contact'
import { RouteWrapper } from './RouteWrapper'
import { Layout } from '@/components/layout/Layout'
import { siteData } from '@/content/siteData'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <RouteWrapper title="Home" description={siteData.profile.summary.join(' ')}>
            <Home />
          </RouteWrapper>
        ),
      },
      {
        path: '/about',
        element: (
          <RouteWrapper title="About" description={`About ${siteData.profile.name} - ${siteData.profile.education}`}>
            <About />
          </RouteWrapper>
        ),
      },
      {
        path: '/experience',
        element: (
          <RouteWrapper title="Experience" description="Professional experience and leadership roles">
            <Experience />
          </RouteWrapper>
        ),
      },
      {
        path: '/projects',
        element: (
          <RouteWrapper title="Projects" description="A collection of projects showcasing technical skills and impact">
            <Projects />
          </RouteWrapper>
        ),
      },
      {
        path: '/projects/:slug',
        element: <ProjectDetailWrapper />,
      },
      {
        path: '/contact',
        element: (
          <RouteWrapper title="Contact" description={`Contact ${siteData.profile.name}`}>
            <Contact />
          </RouteWrapper>
        ),
      },
    ],
  },
])
