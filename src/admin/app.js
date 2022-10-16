import logo from './extensions/logo/HiTS_Logo.png';

export default {
  config: {
    locales: [],
    head: {
      favicon: logo,
    },
    auth: {
      logo: logo,
    },
    menu: {
      logo: logo,
    },
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap() {},
};
