module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: false,
      },
    ],
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        root: ['./'],
        alias: {
          // 'resources': ['./resources'],
          // 'app': ['./src/app'],
          // 'api': ['./src/api'],
          // 'entities/shared': ['./src/entities'],
          // 'entities': ['./src/entities'],
          // 'localization': ['./src/localization'],
          // 'navigation': ['./src/navigation'],
          // 'components/shared': ['./src/components'],
          // 'components': ['./src/components'],
          // 'hooks': ['./src/hooks'],
          // 'screens': ['./src/screens'],
          // 'screens/laundry': ['./src/screens'],
          // 'state': ['./src/state'],
          // 'utils': ['./src/utils'],
          // 'auth': ['./src/auth'],
          // 'services': ['./src/services'],
        },
      },
    ],
  ],
};