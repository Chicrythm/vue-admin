<template>
    <!-- 注意当进行对vuex全局状态使用的时候，需要用computed属性对其进行监听  -->
    <div :class="[menuStatus ? 'close' : 'open']">
        <layoutHeader />
        <layoutNav />
        <layoutMain />
    </div>
</template>
<script>
import layoutHeader from './Components/Headers.vue';
import layoutNav from './Components/Nav.vue';
import layoutMain from './Components/Main.vue';
import { computed } from '@vue/composition-api';
export default {
    name:'layout',
    components:{layoutHeader, layoutNav, layoutMain},
    setup(props, {root}){
        const menuStatus = computed(() => root.$store.state.app.isCollapse)

        return {
            menuStatus
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>