import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.tsx", "src/Monicon.tsx"],
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ["cjs", "esm"],
  external: ["react", "@monicon/runtime", "react-native"],
  dts: true,
  ...options,
}));
