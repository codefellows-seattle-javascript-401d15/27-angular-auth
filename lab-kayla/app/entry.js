'use strict'

context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'))
  let module = context(key)
  routesApp.service(name, module)
})

context = require.context('./component/', true, )
