import {AppRoute} from './components/Router/Router';
import {NotificationsPanel} from './containers/NotificationCenterApp/NotificationsPanel/NotificationsPanel';
import {SettingsPanel} from './containers/NotificationCenterApp/SettingsPanel/SettingsPanel';
import {ROUTES} from './routes';

export const CenterRoutes: AppRoute[] = [
    {
        Component: NotificationsPanel,
        exact: true,
        path: ROUTES.NOTIFICATIONS
    },
    {
        Component: SettingsPanel,
        exact: true,
        path: ROUTES.SETTINGS
    }
];
