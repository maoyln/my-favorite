const utils = require('./utils')

module.exports = {
  title: 'maoyl-favorite',
  description: '个人收藏夹',
  base: '/maoyl-favorite/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '库',
        link: '/repository/'
      },
      {
        text: '网站',
        link: '/website/'
      },
      {
        text: '最近阅读',
        link: '/diary/read'
      },
      {
        text: '文章',
        link: '/article/'
      },
      {
        text: 'Blog',
        link: '/blog/'
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'maoyln/my-favorite',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1',
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
}
