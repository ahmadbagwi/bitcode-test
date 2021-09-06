<template>
  <layout-dashboard>
    <statistic/>
  </layout-dashboard>
</template>

<script>
// nuxt otomatis import komponen tanpa perlu di definisikan
// import LayoutDashboard from '~/layouts/dashboard.vue'
// import Statistic from '~/components/Statistic.vue'
export default {
  layout: 'dashboard'
  // middleware dipanggil di layout, lebih general
  // middleware: 'auth'
}
</script>