import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Painel de Status',
      icon: 'ti-panel',
      path: '/admin/overview'
    },
    {
      name: 'Mudar Perfil',
      icon: 'ti-user',
      path: '/admin/stats'
    },
    {
      name: 'Fotos Públicas',
      icon: 'ti-camera',
      path: '/admin/table-list'
    },
    {
      name: 'Fotos Premium',
      icon: 'ti-money',
      path: '/admin/typography'
    },
    {
      name: 'Região de Atendimento',
      icon: 'ti-location-pin',
      path: '/admin/maps'
    },
    {
      name: 'Notificações',
      icon: 'ti-bell',
      path: '/admin/notifications'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
