<template>
    <div>
        <layoutHeader />
        <layoutNav />
        <layoutMain />
    </div>
</template>
<script>
import layoutHeader from './Components/Headers.vue';
import layoutNav from './Components/Nav.vue';
import layoutMain from './Components/Main.vue';
export default {
    name:'layout',
    components:{layoutHeader, layoutNav, layoutMain},
    setup(){

    }
}
</script>
<style lang="scss" scoped>
    
</style>