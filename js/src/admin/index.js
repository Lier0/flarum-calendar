import { extend } from 'flarum/extend';
import BasicsPage from 'flarum/components/BasicsPage';

app.initializers.add('webbinaro/flarum-calendar', () => {
  console.log('[webbinaro/flarum-calendar] Hello, admin!');

  app.extensionData
    .for('webbinaro-calendar')

    .registerPermission({
        icon: 'fas fa-calendar',
        label: app.translator.trans('flarum-calendar.admin.permissions.view'),
        permission: 'event.view',
        allowGuest: true,
    }, 'view', 65)

    .registerPermission({
      icon: 'fa fa-calendar-times',
      label: app.translator.trans('flarum-calendar.admin.permissions.moderate'),
      permission: 'event.moderate',
    }, 'moderate', 65)

    .registerPermission({
      icon: 'fa fa-calendar-plus',
      label: app.translator.trans('flarum-calendar.admin.permissions.add'),
      permission: 'event.create',
    }, 'start', 65);

  extend(BasicsPage.prototype, 'homePageItems', (items) => {
    items.add('events', {
      path: '/events',
      label: app.translator.trans('flarum-calendar.admin.basics.homepage'),
    });
  });

});
