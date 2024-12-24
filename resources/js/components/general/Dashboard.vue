<template>
  <div class="pl-flex">
    <!-- Sidebar -->
    <div class="pl-sidebar pl-sidebar-light bg-gray-800 text-white pl-w-64">
      <div class="pl-sidebar-header">
        <h2 class="pl-text-2xl pl-font-bold">LaraVue</h2>
      </div>
      <ul class="pl-sidebar-nav">
        <li class="pl-sidebar-item">
          <a href="#" class="pl-sidebar-link">Dashboard</a>
        </li>
        <li class="pl-sidebar-item">
          <a href="#" class="pl-sidebar-link">Users</a>
        </li>
        <li class="pl-sidebar-item">
          <a href="#" class="pl-sidebar-link">Reports</a>
        </li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="pl-main-content pl-w-full pl-p-6">
      <h1 class="pl-text-3xl pl-font-bold">Dashboard</h1>
      <div class="pl-grid pl-grid-cols-2 pl-gap-6">
        <!-- Example Card -->
        <div class="pl-card pl-shadow-lg pl-rounded-lg pl-bg-white">
          <div class="pl-card-body">
            <h3 class="pl-text-xl">Total Users</h3>
            <p class="pl-text-2xl">1,234</p>
          </div>
        </div>
        <div class="pl-card pl-shadow-lg pl-rounded-lg pl-bg-white">
          <div class="pl-card-body">
            <h3 class="pl-text-xl">Revenue</h3>
            <p class="pl-text-2xl">$12,345</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style scoped>
.pl-sidebar {
  min-height: 100vh;
}
.pl-sidebar-item {
  margin-bottom: 20px;
}
.pl-sidebar-link {
  color: white;
  text-decoration: none;
}
.pl-sidebar-link:hover {
  color: #4db8ff;
}
</style>
