/* eslint-disable camelcase */
import type { ReactCusdis } from 'react-cusdis'

export type PostType = 'Post' | 'Page'

export type PostStatus = 'Idea' | 'Published' | 'Revise' | 'Published'

export type Post = {
  id: string
  createdTime: string
  fullWidth: boolean
  title?: string
  slug?: string
  summary?: string
  tags?: string[]
  date: {
    start_date?: string
  }
  status?: [PostStatus]
  type?: [PostType]
}

export type TagObj = { [key: string]: 1 }

export type BlogConfig = {
  title: string
  author: string
  email: string
  link: string
  description: string
  lang: 'en-US' | 'zh-CN' | 'zh-HK' | 'zh-TW' | 'ja-JP'
  dateLang: 'en-US' | 'zh-CN' | 'zh-HK' | 'zh-TW' | 'ja-JP'
  appearance: 'auto' | 'dark' | 'light'
  font: 'sans-serif' | 'serif'
  lightBackground: `#${string}`
  darkBackground: `#${string}`
  path: string
  since: number
  postsPerPage: number
  sortByDate: boolean
  showAbout: boolean
  showArchive: boolean
  autoCollapsedNavBar: boolean
  socialLink: string
  seo: {
    keywords: string[]
    googleSiteVerification: string
  }
  notionPageId: string
  notionAccessToken: string
  analytics: {
    provider: 'ga' | 'ackee'
    ackeeConfig: {
      tracker: string
      dataAckeeServer: string
      domainId: string
    }
    gaConfig: {
      measurementId: `G-${string}`
    }
  }
  comment: {
    provider: 'utterances' | 'cusdis' | ''
    utterancesConfig: {
      repo: string
    }
    cusdisConfig: Parameters<typeof ReactCusdis>[0]['attrs'] & {
      scriptSrc: string
    }
  }
  isProd: 'development' | 'preview' | 'production'
}
