export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5de879e5d26c65474a4c87b1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jomvwgz8',
                  apiId: 'f4b38ac3-9883-49e1-b5c6-4aeaad9512c0'
                },
                {
                  buildHookId: '5de879e6b52bcb239db4d1fc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ej52yp9y',
                  apiId: '7cc72199-e854-49b1-b1da-c3ac857cb51b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saniman/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ej52yp9y.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
