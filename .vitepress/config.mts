import { defineConfig } from 'vitepress'

const base = "/my-dayz-guide/"

export default defineConfig({
  title: "DayZ Guide",
  description: "Notes on how to set up, maintain and mod a DayZ server",
  base,
  head: [
    ['link', { rel: "icon", type: "image/ico", href: base + "favicon.ico"}],
  ],
  appearance: 'dark',
  lastUpdated: true,
  themeConfig: {
    outline: {
      level: 'deep'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Local DayZ Server', link: '/guide/local-dayz-server' }
    ],

    sidebar: [
      {
        text: 'Server Maintenance',
        items: [
          { text: 'Local DayZ Server', link: '/guide/local-dayz-server' },
        ]
      }
    ],

    search: {
        provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vincibean/my-dayz-guide' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Lethorean' },
      { icon: 'twitter', link: 'https://twitter.com/sepensai' },
    ]
  }
})
