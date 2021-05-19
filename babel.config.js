module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['babel-plugin-styled-components'],
      ['module:react-native-dotenv'],
      ['react-native-reanimated/plugin'],
      ['module-resolver', { alias: { '@/root': '.', '@': './src' } }]
    ]
  };
};
