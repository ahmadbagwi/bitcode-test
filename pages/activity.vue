<template>
  <layout-dashboard>
    <activity/>
  </layout-dashboard>
</template>

<script>
import LayoutDashboard from '~/layouts/dashboard.vue';
import Activity from '~/components/Activity.vue';
export default {
  middleware: 'auth',
  components: {
    LayoutDashboard,
    Activity
  }
}
</script>