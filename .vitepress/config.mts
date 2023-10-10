import { defineConfig } from 'vitepress'

const base = "/my-dayz-guide/"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My DayZ Guide",
  description: "My notes on how to set up, maintain and mod a DayZ server",
  base,
  head: [
    ['link', { rel: "icon", type: "image/ico", href: base + "favicon.ico"}],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    search: {
        provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vincibean/my-dayz-guide' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Ledoryan' },
      { icon: 'twitter', link: 'https://twitter.com/sepensai' },
    ]
  }
})
