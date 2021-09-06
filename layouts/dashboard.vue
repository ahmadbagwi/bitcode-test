<template>
  <div class="dashboard">
    <div class="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true"></div>
    <div class="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true"></div>
    <div class="relative min-h-screen flex flex-col">
      
      <TheHeader/>

      <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
        <div class="flex-1 min-w-0 bg-white xl:flex">
          <!-- Projects List -->
          <slot/>  
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>