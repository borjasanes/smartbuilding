import { createBrowserHistory } from 'history';

const routesConfig = {
    home: {
        route: '/home',
        title: 'routes.home'
    },
    operations: {
        route: '/operations',
        title: 'routes.operations'
    },
    management: {
        route: '/management',
        title: 'routes.management'
    },
    reporting: {
        route: '/reporting',
        title: 'routes.reporting'
    }
};

const routerHistory = createBrowserHistory();

export { routesConfig, routerHistory };
