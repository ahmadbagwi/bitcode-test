<template>
  <layout-dashboard>
    <project/>
  </layout-dashboard>
</template>

<script>
import LayoutDashboard from '~/layouts/dashboard.vue';
import Project from '~/components/Project.vue';
export default {
  middleware: 'auth',
  components: {
    LayoutDashboard,
    Project
  }
}
</script>