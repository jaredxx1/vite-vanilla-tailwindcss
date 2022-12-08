/** @type {import('vite').UserConfig} */

export default {
  build: {
    manifest: false,
    outDir: 'build',
    rollupOptions: {
      output: {
        entryFileNames: 'static/js/app-[hash].js',
        chunkFileNames: 'static/js/chunk-[hash].js',
        assetFileNames: (asset) => {
          const info = asset.name.split('.')
          let ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            ext = 'img'
          } else if (/woff|woff2/.test(ext)) {
            ext = 'css'
          }
          return `static/${ext}/app-[hash].[ext]`
        }
      }
    }
  }
}
