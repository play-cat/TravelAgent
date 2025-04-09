import { easepick, TimePlugin } from '@easepick/bundle';

let picker = new easepick.create({
  element: '#datepicker',
  readonly: true,
  css: [
    'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
    'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
    './../css/easepick-theme.css',
  ],
  // setup(picker) {
  //   picker.on('select', e => {
  //     const { view, date, target } = e.detail;
  //     // do something
  //     console.log('select');
  //   });
  // },
  zIndex: 10,
  format: 'HH:mm, DD/MM/YY',
  header: '',
  autoApply: true,
  TimePlugin: {
    stepMinutes: 10,
    stepSeconds: 1,
  },
  plugins: [TimePlugin],
});

// add timeout defore close calendar
picker.on('select', () => {
  setTimeout(() => {
    picker.hide();
  }, 10);
});

export default easepickInit;
