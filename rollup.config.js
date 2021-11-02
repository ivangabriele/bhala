import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import nodePolyfills from 'rollup-plugin-node-polyfills'

export default {
  external: ['chalk', 'node-emoji'],

  input: 'src/index.ts',

  output: {
    dir: 'dist',
    exports: 'default',
    format: 'cjs',
  },

  plugins: [nodePolyfills(), nodeResolve(), typescript()],
}
