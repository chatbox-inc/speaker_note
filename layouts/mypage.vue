<template>
    <div>
        <l-header />
        <div class="l-container">
            <nuxt />
        </div>
    </div>
</template>

<script>
import lHeader from '@/components/Header'
import auth from '~/plugins/auth'
import userMapper from '@/store/user'
export default {
    components: {
        lHeader
    },
    methods: {
        ...userMapper.mapMutations(['setUser']),
    },
    async mounted(){
        const user = await auth()
        if(user){
            this.setUser({user})
        }else {
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
.l-container {
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 80px;
}
</style>
