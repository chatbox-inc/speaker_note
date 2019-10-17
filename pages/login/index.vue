<template>
    <div>
        <button @click="googleLogin">GoogleLogin</button>
    </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import auth from '@/plugins/auth'
import userMapper from '@/store/user.js'
export default {
    async mounted(){
        const user = await auth()
        if(user){
            this.setUser({user})
            this.$router.push('/mypage')
        }
    },
    methods: {
        ...userMapper.mapMutations(['setUser']),
        googleLogin(){
            firebase
            .auth()
            .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
