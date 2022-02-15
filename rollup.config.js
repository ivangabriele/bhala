import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import builtins from 'rollup-plugin-node-builtins'

export default {
  input: 'src/index.ts',

  output: {
    dir: './dist',
    format: 'es',
  },

  plugins: [
    builtins(),
    nodeResolve({
      modulesOnly: true,
    }),
    typescript(),
  ],
}
