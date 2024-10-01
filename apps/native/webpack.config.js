const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const { IconifyPlugin } = require("@oktaytest/webpack");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.plugins.push(
    new IconifyPlugin({
      icons: [
        "mdi:home",
        "mdi:account",
        "mdi:account-badge-outline",
        "feather:activity",
        "feather:alert-circle",
        "logos:active-campaign",
        "logos:apache-superset-icon",
      ],
    })
  );

  return config;
};
