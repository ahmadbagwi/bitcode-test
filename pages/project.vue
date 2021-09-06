<template>
  <div>
    <project/>
  </div>
</template>

<script>
// nuxt otomatis import komponen tanpa perlu di definisikan
// import LayoutDashboard from '~/layouts/dashboard.vue'
// import Project from '~/components/Project.vue'
export default {
  layout: 'dashboard'
  // middleware dipanggil di layout, lebih general
  // middleware: 'auth'
}
</script>