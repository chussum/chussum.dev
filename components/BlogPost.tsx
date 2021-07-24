import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import { Post } from '@/types'

type Props = {
  post: Post
}

const BlogPost: React.VFC<Props> = ({ post }) => {
  return (
    <article key={post.id} className="mb-6 md:mb-8">
      <header className="flex flex-col justify-between md:flex-row md:items-baseline">
        <Link href={`${BLOG.path}/${post.slug}`}>
          <a>
            <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
              {post.title}
            </h2>
          </a>
        </Link>
        <time className="flex-shrink-0 text-gray-600 dark:text-gray-400 text-sm">
          {formatDate(post?.date?.start_date || post.createdTime, BLOG.dateLang || BLOG.lang)}
        </time>
      </header>
      <main>
        <p className="hidden md:block leading-7 text-gray-700 dark:text-gray-400">
          <Link href={`${BLOG.path}/${post.slug}`}>
            <a>
              {post.summary}
            </a>
          </Link>
        </p>
      </main>
    </article>
  )
}

export default BlogPost
