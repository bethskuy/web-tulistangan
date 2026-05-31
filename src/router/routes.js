const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Landing Page tetep pake MainLayout bawaan
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },

  // SEPARATE/FULL SCREEN ROUTE: Workspace berdiri sendiri khusus full layar
  {
    path: '/nulis',
    name: 'workspace',
    component: () => import('pages/WorkspacePage.vue'),
  },

  // Jalur Auto-Catch All untuk Halaman 404 Not Found
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
