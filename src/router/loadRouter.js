function lazyLoadView(AsyncView) {
    const AsyncHandler = () => ({
      component: AsyncView,
      loading: require('views/system/loading.vue').default,
      error: require('views/system/err').default,
      delay: 200,
      timeout: 10000
    });
    return Promise.resolve({
      functional: true,
      render(h, { data, children }) {
        return h(AsyncHandler, data, children);
      }
    });
  }
export default lazyLoadView
