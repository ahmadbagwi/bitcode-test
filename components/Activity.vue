<template>
  <!-- Activity feed -->
  <div class="bg-white lg:min-w-0 lg:flex-1">
    <div class="pl-6">
      <div class="pt-6 pb-2">
        <h1 class="flex-1 text-lg font-medium">Activity</h1>
      </div>
      <div>
        <ul v-for="(activity, index) in activities" :key="index" role="list" class="divide-y divide-gray-200">
          <li class="py-4">
            <div class="flex space-x-3">
              <img class="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="">
              <div class="flex-1 space-y-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium">{{activity.account}}</h3>
                  <p class="text-sm text-gray-500">{{activity.times}}</p>
                </div>
                <p class="text-sm text-gray-500">{{activity.description}}</p>
              </div>
            </div>
          </li>

          <!-- More items... -->
        </ul>
        <div class="py-4 text-sm border-t border-gray-200">
          <a href="#" class="text-indigo-600 font-semibold hover:text-indigo-900">View all activity <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      activities: [
        {
          account: "You",
          times: "3h",
          description: "Deployed Workcation (2d89f0c8 in master) to production"
        },
        {
          account: "You",
          times: "4h",
          description: "Push Workcation (2d89f0c8 in master)"
        },
        {
          account: "You",
          times: "4h",
          description: "Commit Workcation (2d89f0c8 in master)"
        },
        {
          account: "You",
          times: "8h",
          description: "Create Workcation"
        },
      ]
    }
  }
}
</script>