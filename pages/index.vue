<template>
  <section class="p-top">
      <a @click="googleLogin" href="#" >GoogleLogin</a>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'
import auth from '@/plugins/auth'
import userMapper from '@/store/user.js'

export default {
  name: "TOP",
  layout: "guest",
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

<style　lang="scss" scoped>
.p-top {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
