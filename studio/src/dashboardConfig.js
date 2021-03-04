export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60402591771993108c876a1d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8naopjtt',
                  apiId: 'e62960d2-e106-4447-99cf-406f7c1cfbae'
                },
                {
                  buildHookId: '60402591631f7410f314f2c5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-b62vq7c8',
                  apiId: 'edae27f7-ad63-4090-a5cf-b894ac9b70c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crazybaud/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-b62vq7c8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
