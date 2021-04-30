const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(path.resolve(__dirname));

// Remove all console logs in production...
config.transformer.minifierConfig.compress.drop_console = true;

module.exports = config;
