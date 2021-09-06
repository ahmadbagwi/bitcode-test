<template>
  <layout-dashboard>
    <activity/>
  </layout-dashboard>
</template>

<script>
// nuxt otomatis import komponen tanpa perlu di definisikan
// import LayoutDashboard from '~/layouts/dashboard.vue'
// import Activity from '~/components/Activity.vue'
export default {
  layout: 'dashboard'
  // middleware dipanggil di layout, lebih general
  // middleware: 'auth'
}
</script>