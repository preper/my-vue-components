import fadeupMenu from '@/components/fadeup-menu'

const components = {
  fadeupMenu
}

const install = function (Vue) {
  Object.values(components).forEach(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.0',
  install,
  ...components
}
