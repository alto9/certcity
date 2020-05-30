<template>
  <AHeader fixed with-subheader light>
    <AToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <AToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <AHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo"/>
    </AHeaderBrand>
    <AHeaderNav class="d-md-down-none mr-auto">
      <AHeaderNavItem class="px-3">
        <AHeaderNavLink to="/dashboard">
          Dashboard
        </AHeaderNavLink>
      </AHeaderNavItem>
      <AHeaderNavItem class="px-3">
        <AHeaderNavLink to="/users" exact>
          Users
        </AHeaderNavLink>
      </AHeaderNavItem>
      <AHeaderNavItem class="px-3">
        <AHeaderNavLink>
          Settings
        </AHeaderNavLink>
      </AHeaderNavItem>
    </AHeaderNav>
    <AHeaderNav class="mr-4">
      <AHeaderNavItem class="d-md-down-none mx-2">
        <AHeaderNavLink>
          <CIcon name="cil-bell"/>
        </AHeaderNavLink>
      </AHeaderNavItem>
      <AHeaderNavItem class="d-md-down-none mx-2">
        <AHeaderNavLink>
          <CIcon name="cil-list"/>
        </AHeaderNavLink>
      </AHeaderNavItem>
      <AHeaderNavItem class="d-md-down-none mx-2">
        <AHeaderNavLink>
          <CIcon name="cil-envelope-open"/>
        </AHeaderNavLink>
      </AHeaderNavItem>
      <TheHeaderDropdownAccnt/>
    </AHeaderNav>
    <ASubheader class="px-3">
      <ABreadcrumbRouter class="border-0 mb-0"/>
    </ASubheader>
  </AHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  }
}
</script>
