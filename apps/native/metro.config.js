// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withIconify } = require("@oktaytest/metro");
const path = require("path");

// Find the workspace root, this can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(__dirname, "../..");
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

const configWithIconify = withIconify(config, {
  icons: [
    "mdi:home",
    "mdi:account",
    "mdi:account-badge-outline",
    "feather:activity",
    "feather:alert-circle",
    "logos:active-campaign",
    "logos:apache-superset-icon",
  ],
  outputFileName: "native",
});

// 1. Watch all files within the monorepo
configWithIconify.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages, and in what order
configWithIconify.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
configWithIconify.resolver.disableHierarchicalLookup = true;

module.exports = configWithIconify;