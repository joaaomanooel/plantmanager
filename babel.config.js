module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['babel-plugin-styled-components'],
      ['module:react-native-dotenv'],
      ['module-resolver', { alias: { '@/root': '.', '@': './src' } }],
    ],
    env: { production: { plugins: ['transform-remove-console'] } },
  };
};
