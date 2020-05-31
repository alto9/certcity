<template>
  <ADropdown
    inNav
    class="a-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <AHeaderNavLink>
        <div class="a-avatar">
          <img
            src="img/avatars/6.jpg"
            class="a-avatar-img "
          />
        </div>
      </AHeaderNavLink>
    </template>
    <ADropdownHeader tag="div" class="text-center" color="light">
      <strong>Account</strong>
    </ADropdownHeader>
    <ADropdownItem>
      <CIcon name="cil-bell"/> Updates
      <ABadge color="info" class="ml-auto">{{ itemsCount }}</ABadge>
    </ADropdownItem>
    <ADropdownItem>
      <CIcon name="cil-envelope-open" /> Messages
      <ABadge color="success" class="ml-auto">{{ itemsCount }}</ABadge>
    </ADropdownItem>
    <ADropdownItem>
      <CIcon name="cil-task" /> Tasks
      <ABadge color="danger" class="ml-auto">{{ itemsCount }}</ABadge>
    </ADropdownItem>
    <ADropdownItem>
      <CIcon name="cil-comment-square" /> Comments
      <ABadge color="warning" class="ml-auto">{{ itemsCount }}</ABadge>
    </ADropdownItem>
    <ADropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>Settings</strong>
    </ADropdownHeader>
    <ADropdownItem>
      <CIcon name="cil-user" /> Profile
    </ADropdownItem>
    <ADropdownItem>
      <CIcon name="cil-settings" /> Settings
    </ADropdownItem>
    <ADropdownItem>
      <CIcon name="cil-dollar" /> Payments
      <ABadge color="secondary" class="ml-auto">{{ itemsCount }}</ABadge>
    </ADropdownItem>
    <ADropdownItem>
      <CIcon name="cil-file" /> Projects
      <ABadge color="primary" class="ml-auto">{{ itemsCount }}</ABadge>
    </ADropdownItem>
    <ADropdownDivider/>
    <ADropdownItem>
      <CIcon name="cil-shield-alt" /> Lock Account
    </ADropdownItem>
    <ADropdownItem>
      <CIcon name="cil-lock-locked" /> Logout
    </ADropdownItem>
  </ADropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42
    }
  }
}
</script>

<style scoped>
  .a-icon {
    margin-right: 0.3rem;
  }
</style>