/**
 * @type {import('@/types').BlogConfig}
 */
const BLOG = {
  title: 'Chussum',
  author: 'chussum',
  email: 'flosdor@gmail.com',
  link: 'https://chussum.dev',
  description: '바다를 갈망하는 우물 속 개구리',
  lang: 'ko-KR',
  dateLang: 'en-US', // 'en-US' | 'zh-CN' | 'zh-HK' | 'zh-TW' | 'ja-JP'
  appearance: 'dark', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#282c35', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: true,
  showAbout: true, // WIP
  showArchive: true, // WIP
  autoCollapsedNavBar: false, // the automatically collapsed navigation bar
  socialLink: 'https://github.com/chussum',
  seo: {
    keywords: ['chussum', 'vanillajs', 'javascript', 'typescript', 'react', 'reactjs', 'webpack', '츄썸', '바닐라', '타입스크립트', '리액트', '리엑트', '웹팩'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: utterances, cusdis
    provider: 'utterances', // leave it empty if you don't need any comment plugin
    utterancesConfig: {
      repo: 'chussum/chussum.dev'
    },
    cusdisConfig: {
      appId: '', // data-app-id'
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

// export default BLOG
module.exports = BLOG
