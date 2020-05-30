export default [
  {
    _name: 'ASidebarNav',
    _children: [
      {
        _name: 'ASidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'ASidebarNavItem',
        name: 'Certificates',
        to: '/certificates/list',
        icon: 'cil-shield-alt'
      },
      {
        _name: 'ASidebarNavItem',
        name: 'Load Balancers',
        to: '/loadbalancers/list',
        icon: 'cil-cloud-download'
      }
    ]
  }
]