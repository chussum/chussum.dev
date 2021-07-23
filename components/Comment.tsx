import { fetchCusdisLang } from '@/lib/cusdisLang'
import BLOG from '@/blog.config'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import type { ReactCusdis as ReactCusdisType } from 'react-cusdis'
import { Post } from '@/types'

const UtterancesComponent = dynamic(
  () => {
    return import('@/components/Utterances')
  },
  { ssr: false }
)

const CusdisComponent = dynamic(
  () => {
    return import('react-cusdis').then(m => m.ReactCusdis)
  },
  { ssr: false }
) as typeof ReactCusdisType

type Props = {
  post: Post
}

const Comments: React.VFC<Props> = ({ post }) => {
  const router = useRouter()
  return (
    <div>
      {BLOG.comment && BLOG.comment.provider === 'utterances' && (
        <UtterancesComponent issueTerm={post.id} />
      )}
      {BLOG.comment && BLOG.comment.provider === 'cusdis' && (
        <CusdisComponent
          lang={fetchCusdisLang() ?? 'en'}
          attrs={{
            host: BLOG.comment.cusdisConfig.host,
            appId: BLOG.comment.cusdisConfig.appId,
            pageId: post.id,
            pageTitle: post.title,
            pageUrl: BLOG.link + router.asPath,
            theme: BLOG.appearance
          }}
        />
      )}
    </div>
  )
}

export default Comments
