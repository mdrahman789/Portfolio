import { useParams } from 'react-router-dom'
import { siteData } from '@/content/siteData'
import { RouteWrapper } from '@/app/RouteWrapper'
import { ProjectDetail } from './ProjectDetail'

export function ProjectDetailWrapper() {
  const { slug } = useParams<{ slug: string }>()
  const project = siteData.projects.find((p) => p.slug === slug)

  const title = project ? project.title : 'Project Not Found'
  const description = project ? project.summary : 'Project not found'

  return (
    <RouteWrapper title={title} description={description}>
      <ProjectDetail />
    </RouteWrapper>
  )
}
