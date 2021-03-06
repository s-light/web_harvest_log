
export const childrenCommon = [
    {
        title: 'Welcome',
        icon: 'home',
        path: '/',
        component: () => import('pages/Index.vue')
    },
    {
        title: 'About',
        icon: 'mdi-information-variant',
        path: 'about',
        component: () => import('pages/About.vue')
    },
    {
        title: 'Settings',
        icon: 'settings',
        path: 'settings',
        component: () => import('pages/Settings.vue')
    }
]

export const childrenDebug = [
    {
        title: 'Debug',
        icon: 'mdi-bug',
        path: 'debug',
        component: () => import('pages/Debug.vue')
    }
]

export const childrenWizard = [
    {
        title: 'Select Crate',
        icon: 'aspect_ratio',
        path: 'select_crate',
        component: () => import('pages/SelectCrate.vue')
    },
    {
        title: 'Select Crop',
        icon: 'local_florist',
        path: 'select_crop',
        component: () => import('pages/SelectCrop.vue')
    },
    {
        title: 'Select Place',
        icon: 'place',
        path: 'select_place',
        component: () => import('pages/SelectPlace.vue')
    },
    {
        title: 'Save Harvest',
        icon: 'save_alt',
        path: 'save_harvest',
        component: () => import('pages/SaveHarvest.vue')
    }
]

export const childrenDev = [
    {
        title: 'Dev0',
        icon: 'code',
        path: 'dev0',
        component: () => import('pages/Dev0.vue')
    },
    {
        title: 'Dev1',
        icon: 'code',
        path: 'dev1',
        component: () => import('pages/Dev1.vue')
    },
    {
        title: 'Dev2Layout',
        icon: 'code',
        path: 'dev2_Layout',
        component: () => import('pages/Dev2Layout.vue')
    },
    {
        title: 'DevList',
        icon: 'code',
        path: 'dev_list',
        component: () => import('pages/DevList.vue')
    }
]

const routes = function ({ store }) {
    return [
        // {
        //     path: '/dev/',
        //     name: 'develop',
        //     component: () => import('layouts/DevLayout.vue'),
        //     children: [
        //         ...childrenCommon,
        //         ...childrenWizard,
        //         ...childrenDev
        //     ]
        // },
        {
            path: '/',
            component: () => import('layouts/WizardLayout.vue'),
            children: [
                ...childrenCommon,
                ...childrenDebug,
                ...childrenWizard,
                ...childrenDev
            ]
        },

        // Always leave this as last one,
        // but you can also remove it
        {
            path: '*',
            component: () => import('pages/Error404.vue')
        }
    ]
}

export default routes
