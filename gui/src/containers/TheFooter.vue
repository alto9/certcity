<template>
  <AFooter :fixed="false">
    <div>
      <a href="https://alto9.com" target="_blank">Alto9</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} Winn Technology Group.</span>
    </div>
    <div class="ml-auto">
      <span class="mr-1">Powered by</span>
      <a href="https://github.com/alto9/alto9-vue" target="_blank">alto9-vue</a>
    </div>
  </AFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
