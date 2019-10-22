<template>
    <section v-if="user">
        <div class="p-mypage">
            <div class="row position-relative mb-5">
                <div class="">
                    <img :src="user.photoURL" alt="" class="p-mypage__thmb">
                </div>
                <div class="pl-5 pt-4 ">
                    <p class="p-mypage__name">{{user.displayName}}</p>
                    <p class="p-mypage__comp">株式会社hogehoge</p>
                </div>
                <nuxt-link to="#" class="p-mypage__edit">プロフィール編集</nuxt-link>
            </div>
            <nuxt-link to="/mypage/settingStage" class="btn btn-dark float-right">登壇情報を追加</nuxt-link>
            <h2 class="mb-3 h3">登壇情報</h2>
            <ul class="list-group mb-3">
                <li class="list-group-item list-group-item-dark"><span class="mr-2">10/01</span>さんまの焼き方の話</li>
                <li class="list-group-item list-group-item-dark"><span class="mr-2">10/01</span>さんまの焼き方の話</li>
                <li class="list-group-item list-group-item-dark"><span class="mr-2">10/01</span>さんまの焼き方の話</li>
            </ul>
            <h2 class="h3">管理イベント</h2>
        </div>
    </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import auth from '~/plugins/auth'
import userMapper from '@/store/user'
export default {
    methods: {
        ...userMapper.mapMutations(['initUser','setUser']),
        logout(){
            firebase.auth().signOut()
            this.initUser()
            this.$router.push('/login')
        }
    },
    computed: {
        ...userMapper.mapGetters(['user'])
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

<style lang="scss">
.p-mypage {
    &__thmb {
        width: 200px;
        border-radius: 50%;
    }
    &__name {
        font-weight: bold;
        font-size: 2rem;
    }
    &__edit {
        position: absolute;
        bottom: 0;
        right: 0;
    }
}
ul {
    list-style: none;
}
</style>
