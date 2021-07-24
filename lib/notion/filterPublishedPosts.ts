import { Post } from '@/types'

const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

const STATUS = {
  PREVIEW: 'Preview',
  PUBLISHED: 'Published'
} as const;

type Props = {
  posts: Post[] | null
  includedPages: boolean
  includedPreview: boolean
}
export const filterPublishedPosts = ({ posts, includedPages, includedPreview }: Props) => {
  if (!posts || !posts.length) return []
  const publishedPosts = posts
    .filter(post =>
      includedPages
        ? post?.type?.[0] === 'Post' || post?.type?.[0] === 'Page'
        : post?.type?.[0] === 'Post'
    )
    .filter(post => {
      const postDate = new Date(post?.date?.start_date || post.createdTime)
      const postStatus = post?.status?.[0];
      const published = includedPreview ? (postStatus === STATUS.PREVIEW || postStatus === STATUS.PUBLISHED) : postStatus === STATUS.PUBLISHED
      return (
        published &&
        post.title &&
        post.slug &&
        postDate < tomorrow
      )
    })
  return publishedPosts
}
