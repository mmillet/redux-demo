fis
  .hook('module')
  .match('*.less', {
    parser: fis.plugin('less'), //启用fis-parser-less插件
    rExt: '.css'
  })
  .match('js/*.js', {
    isMod: true,
    parser: fis.plugin('es6-babel',
      {
        blacklist: ["strict"]
      }
    )
  })
  .match('js/*.tmpl', {
    parser: fis.plugin('utc'),
    isJsLike: true
  })
  .match('::package', {
    postpackager: fis.plugin('loader', {
      resourceType: 'amd',
      useInlineMap: true // 资源映射表内嵌
    })
  })