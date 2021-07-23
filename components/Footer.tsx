import BLOG from '@/blog.config'
import Vercel from '@/components/Vercel'
import classNames from 'classnames'

type Props = { fullWidth?: boolean }

const Footer: React.VFC<Props> = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={classNames(
        'mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all',
        {
          'px-4 md:px-24': fullWidth,
          'max-w-2xl px-4': !fullWidth
        }
      )}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6 font-medium">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
            © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
