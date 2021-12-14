module.exports = {
  title: 'esbuild 文档',
  description: 'esbuild 最新官方文档翻译',
  base: '/esbuild-learning/'
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { 
        text: 'gueson的 JavaScript 博客', 
        items: [
            { text: 'Github', link: 'https://github.com/ygs1990' }
        ]
      }
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "学前必读", path: "/" }
        ]
      },
      {
        title: "开始",
        path: '/handbook/install-esbuild',
        collapsable: true, // 折叠
        children: [
          { title: "安装esbuild", path: "/handbook/install-esbuild" },
          { title: "你的第一个bundle", path: "/handbook/first-bundle" }
        ]
      }
    ]
  } 
}