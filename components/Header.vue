<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">speaker note stg</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01" v-if="user">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Mypage <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                <button class="btn btn-secondary my-2 my-sm-0" type="submit" @click="logout">ログアウト</button>
            </div>
        </nav>
    </header>
</template>
<script>
import userMapper from '@/store/user'
import auth from '@/plugins/auth'
import firebase from '@/plugins/firebase'

export default {
    computed: {
        ...userMapper.mapGetters(['user'])
    },
    methods: {
        ...userMapper.mapMutations(['initUser']),
        logout(){
            firebase.auth().signOut()
            this.initUser()
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss">

</style>
