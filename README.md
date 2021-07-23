# Chussum.dev

<p>
  <a aria-label="GitHub commit activity" href="https://github.com/chussum/chussum.dev/commits/main" title="GitHub commit activity">
    <img src="https://img.shields.io/github/commit-activity/m/chussum/chussum.dev?style=for-the-badge">
  </a>
  <a aria-label="GitHub contributors" href="https://github.com/chussum/chussum.dev/graphs/contributors" title="GitHub contributors">
    <img src="https://img.shields.io/github/contributors/chussum/chussum.dev?color=orange&style=for-the-badge">
  </a>
  <a aria-label="Build status" href="#" title="Build status">
    <img src="https://img.shields.io/github/deployments/chussum/chussum.dev/Preview?logo=Vercel&style=for-the-badge">
  </a>
</p>

## Quick Start

- Star this repo 😉
- Duplicate [this Notion template](https://www.notion.so/68be9021bca34b8e89f0246f27e608df), and share it to the public
- [Fork](https://github.com/craigary/nobelium/fork) this project
- Customize `blog.config.js`
- _(Optional)_ Replace `favicon.svg`, and `favicon.ico` in `/public` folder with your own
- Deploy on [Vercel](https://vercel.com), set following environment variables：
  - `NOTION_PAGE_ID` (Required): The ID of the Notion page you previously shared to the web, usually has 32 digits after your workspace address
  - `NOTION_ACCESS_TOKEN` (Optional): If you decide not to share your database, you can use token to let Nobelium grab data from Notion database. You can find it in your browser cookies called `token_v2`
    - Keep in mind Notion token is only valid for 180 days, make sure to update manually in vercel dashboard, we probably switch to Official API to resolve this issue in the future. Also, images in Notion database will not properly rendered
- **That's it!** Easy-peasy?
