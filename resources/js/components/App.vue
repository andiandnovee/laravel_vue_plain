<template>
     <div>
        <Navbar />  <!-- Komponen Navbar -->
        <Dashboard />  <!-- Komponen Dashboard -->
        </div>
</template>

<script>
import Navbar from '@components/general/Navbar.vue'; 
import Dashboard from '@components/general/Dashboard.vue'; 
export default {
    name: 'App',
    components: {
        Navbar,
        Dashboard,
    }, 
}
</script>

<style scoped>
</style>
