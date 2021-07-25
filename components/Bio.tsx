/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import BLOG from '@/blog.config'

const Bio = () => {
  return (
    <div className="bio mb-6 md:mb-16">
      <div className="author">
        <div className="author-description">
          <Image
            alt={BLOG.author}
            width={80}
            height={80}
            src={`https://gravatar.com/avatar/dab63285ac3cf1d771ad62df4f853f84?size=200`}
            className="rounded-full"
            unoptimized
          />
          <div className="author-name">
            <span className="author-name-prefix">Written by</span>
            <Link href={'/about'}>
              <a className="author-name-content">
                <span>@{BLOG.author}</span>
              </a>
            </Link>
            <div className="author-introduction">{BLOG.description}</div>
            <p className="author-socials">
              <a href="https://github.com/chussum" target="_blank" rel="noreferrer">
                <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&amp;logo=GitHub&amp;logoColor=white" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio