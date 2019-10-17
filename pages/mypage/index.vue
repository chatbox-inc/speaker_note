<template>
    <section v-if="user">
        <button @click="logout">ログアウト</button>
        <div class="p-mypage">
            <div class="row justify-content-start position-relative mb-5">
                <div class="">
                    <img :src="user.photoURL" alt="" class="p-mypage__thmb">
                </div>
                <div class="ml-5 pt-4 ">
                    <p class="p-mypage__name">{{user.displayName}}</p>
                    <p class="p-mypage__comp">株式会社hogehoge</p>
                </div>
                <span class="p-mypage__edit">プロフィール編集</span>
            </div>
            <h2>登壇情報</h2>
            <ul>
                <li><span class="mr-2">10/01</span>さんまの焼き方の話</li>
                <li><span class="mr-2">10/01</span>さんまの焼き方の話</li>
                <li><span class="mr-2">10/01</span>さんまの焼き方の話</li>
            </ul>
            <h2>管理イベント</h2>
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
            this.$router.push('/')
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
