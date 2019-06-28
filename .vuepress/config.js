module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Hello', link: '/hello/' },
    
      ],
      sidebarDepth : 2,

      sidebar: [
        '/hello',
        '/',
      ]
    }
  }