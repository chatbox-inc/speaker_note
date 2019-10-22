<template>
    <div class="c-login">
        <a @click="googleLogin" href="#" >GoogleLogin</a>
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
.c-login {
    width: 100%;
    height: 100vh;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
</style>
