
const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/Index.vue') },
            { path: 'select_crate', component: () => import('pages/SelectCrate.vue') },
            { path: 'select_crop', component: () => import('pages/SelectCrop.vue') },
            { path: 'select_place', component: () => import('pages/SelectPlace.vue') },
            { path: 'save_harvest', component: () => import('pages/SaveHarvest.vue') },
            { path: 'dev0', component: () => import('pages/Dev0.vue') },
            { path: 'about', component: () => import('pages/About.vue') },
            { path: 'settings', component: () => import('pages/Settings.vue') }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () => import('pages/Error404.vue')
    }
]

export default routes

export const linksData = [
    {
        title: 'Welcome',
        icon: 'home',
        link: '/'
    },
    {
        title: 'Select Crate',
        icon: 'aspect_ratio',
        link: 'select_crate'
    },
    {
        title: 'Select Crop',
        icon: 'local_florist',
        link: 'select_crop'
    },
    {
        title: 'Select Place',
        icon: 'place',
        link: 'select_place'
    },
    {
        title: 'Save Harvest',
        icon: 'save_alt',
        link: 'save_harvest'
    },
    {
        title: 'Dev0',
        icon: 'code',
        link: 'dev0'
    },
    {
        title: 'About',
        icon: 'information-variant',
        link: 'about'
    },
    {
        title: 'Settings',
        icon: 'settings',
        link: 'settings'
    }
]
