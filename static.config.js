import makeStaticConfig from '@riboseinc/paneron-website-common/scaffolding/makeStaticConfig'


export default {
  ...makeStaticConfig(),

  getRoutes: async () => {
    return [
      {
        path: '/',
        template: 'src/containers/Home',
        getData: () => ({
        }),
      },
    ];
  },
};
