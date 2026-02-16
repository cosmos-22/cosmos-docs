import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
   base: '/cosmos-docs/',
  title: "COSMOS dev.",
  description: "Creating FiveM NUI & systems",
  head: [['link', { rel: 'icon', href: '/cosmos-docs/cosmos_logo_c_t.png' }]],
  locales: {
    root: {
      label: 'English',
      lang: 'en',

      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Documentation', link: '/introduction' }
        ],
        

        sidebar: [
          {
            text: 'Introduction',
            link: '/introduction'
          },
          {
            text: 'Troubleshooting',
            link: '/troubleshooting'
          },
          {
            text: 'Free resources',
            items: [
            {
              text: '🛠️ csms_crafting',
              collapsed: false,
              link: '/crafting/',
              items: [
                { text: 'Installation', link: 'crafting/installation' },
                { 
                  text: 'Configuration', 
                  items: [
                    { text: 'General', link: 'crafting/config/general' },
                    { text: 'NUI Settings', link: 'crafting/config/nui' },
                    { text: 'Workbenches', link: 'crafting/config/workbench' },
                    { text: 'Crafting Items', link: 'crafting/config/crafting_items' },
                    { text: 'Dismantle Items', link: 'crafting/config/dismantle_items' },
                  ], 
                  collapsed: true
                },
                { 
                  text: 'Exports', 
                  items: [
                    { text: 'Server', link: 'crafting/exports/server' },
                  ], 
                  collapsed: true
                },
                { text: 'Commands', link: 'crafting/commands' },
              ]
            }
            ]
          }
        ],
      },
    },
    zhHK: {
      label: '繁體中文',
      lang: 'zhHK', // optional, will be added  as `lang` attribute on `html` tag
      themeConfig: {
        nav: [
          { text: '主頁', link: '/zhHK/' },
          { text: '開發文件', link: '/zhHK/introduction' }
        ],
        

        sidebar: [
          {
            text: '簡介',
            link: '/zhHK/introduction'
          },
          {
            text: '疑難排解',
            link: '/zhHK/troubleshooting'
          },
          {
            text: '免費插件',
            items: [
            {
              text: '🛠️ 工作台系統',
              collapsed: false,
              link: '/zhHK/crafting/',
              items: [
                { text: '安裝指南', link: '/zhHK/crafting/installation' },
                { 
                  text: '配置設定', 
                  items: [
                    { text: '一般', link: '/zhHK/crafting/config/general' },
                    { text: 'NUI 設定', link: '/zhHK/crafting/config/nui' },
                    { text: '工作台', link: '/zhHK/crafting/config/workbench' },
                    { text: '合成物品', link: '/zhHK/crafting/config/crafting_items' },
                    { text: '拆解物品', link: '/zhHK/crafting/config/dismantle_items' },
                  ], 
                  collapsed: true
                },
                { 
                  text: '匯出 (Exports)', 
                  items: [
                    { text: '伺服器端', link: '/zhHK/crafting/exports/server' },
                  ], 
                  collapsed: true
                },
                { text: '指令', link: '/zhHK/crafting/commands' },
              ]
            }
            ]
          }
        ],
        darkModeSwitchLabel: '切換主題',
        lightModeSwitchTitle: '切換至淺色主題',
        darkModeSwitchTitle: '切換至深色主題',
        sidebarMenuLabel: '目錄',
        returnToTopLabel: '回到最上面',
        outline: {
          label: '本頁目錄'
        },
        docFooter: {
          prev: '上一頁',
          next: '下一頁'
        }
      },
    }
  },
  themeConfig: {
    logo: '/cosmos_logo_c_t.png',
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/pjuPHPrHnx' }
    ],

    search: {
        provider: 'local',
        options: {
          locales: {
            zhHK: { // make this `root` if you want to translate the default locale
              translations: {
                button: {
                  buttonText: '搜尋',
                  buttonAriaLabel: '搜尋'
                },
                modal: {
                  displayDetails: '顯示詳細列表',
                  resetButtonTitle: '重置搜尋',
                  backButtonTitle: '關閉搜尋',
                  noResultsText: '沒有結果',
                  footer: {
                    selectText: '選擇',
                    selectKeyAriaLabel: '輸入',
                    navigateText: '導航',
                    navigateUpKeyAriaLabel: '上箭頭',
                    navigateDownKeyAriaLabel: '下箭頭',
                    closeText: '關閉',
                    closeKeyAriaLabel: 'esc'
                  }
                }
              }
            }
          }
        }},

    footer: {
      copyright: 'Copyright © 2026 COSMOS dev.'
    }
  }
})
