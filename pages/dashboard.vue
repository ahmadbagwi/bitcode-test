<template>
  <layout-dashboard>
    <statistic/>
  </layout-dashboard>
</template>

<script>
import LayoutDashboard from '~/layouts/dashboard.vue';
import Statistic from '~/components/Statistic.vue';
export default {
  middleware: 'auth',
  components: {
    LayoutDashboard,
    Statistic
  },
}
</script>