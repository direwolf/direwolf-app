import { createDefaultConfig } from '@open-wc/building-rollup';
import resolve from 'rollup-plugin-node-resolve';

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });

const config = createDefaultConfig({ input: './index.html', plugins: { workbox: false } });

config.plugins = config.plugins.filter(p => p.name !== 'node-resolve');
config.plugins = [...config.plugins,
  resolve({
    browser: true
  })];
  //commonjs()];

export default config;
