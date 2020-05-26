export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Certificates',
        to: '/certificates/list',
        icon: 'cil-shield-alt'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Load Balancers',
        to: '/loadbalancers/list',
        icon: 'cil-cloud-download'
      }
    ]
  }
]