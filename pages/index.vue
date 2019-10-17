<template>
  <section class="container">
    <button @click="googleLogin">GoogleLogin</button>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'
import auth from '@/plugins/auth'
import userMapper from '@/store/user.js'
export default {
  components: {
  },
  async mounted(){
    const user = await auth()
    if(user){
      // this.SET_USER(user)
      this.$router.push('/Top')
    }
  },
  methods: {
    ...userMapper.mapMutations(['SET_USER']),
    googleLogin(){
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
