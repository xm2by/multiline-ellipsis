import ellipsis from './ellipsis.js';

export default {
  install(Vue) {
    Vue.directive('ellipsis', ellipsis);
  },
};