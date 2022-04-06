const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  base: '/mechaneyes-projects/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        betterbreaks: resolve(__dirname, 'projects/better-breaks/index.html'),
        loops: resolve(__dirname, 'projects/loops/index.html'),
        formalism: resolve(__dirname, 'projects/formalism/index.html'),
        gossamer: resolve(__dirname, 'projects/gossamer/index.html'),
        monolyth: resolve(__dirname, 'projects/monolyth/index.html'),
        munariveil: resolve(__dirname, 'projects/munari-veil/index.html'),
        objects: resolve(__dirname, 'projects/objects/index.html'),
        soundnoir: resolve(__dirname, 'projects/sound-noir/index.html'),
        stereoh: resolve(__dirname, 'projects/stereoh/index.html'),
        whirligrid: resolve(__dirname, 'projects/whirligrid/index.html'),
      }
    }
  }
})