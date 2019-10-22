<template>
    <section v-if="user" class="p-settingStage">
        <h1 class="h3">登壇情報</h1>
        <form action="" class="mb-5">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="タイトル">
            </div>
            <div class="form-group">
                <textarea class="form-control" rows="5" placeholder="登壇情報入力"></textarea>
            </div>
        </form>
        <div class="pl-3 mb-5">
            <h2 class="h3">イベント情報</h2>
            <p>2019/10/01   chatbox 勉強会       ↓ 大阪</p>
        </div>
        <div class="b-5 pl-2">
            <h2 class="h3">登壇者情報</h2>
            <div class="row position-relative">
                <div class="">
                    <img :src="user.photoURL" alt="" class="p-settingStage__profThmb">
                </div>
                <div class="pl-5 pt-4 ">
                    <p class="p-settingStage__profName">{{user.displayName}}</p>
                    <p class="p-settingStage__profComp">株式会社hogehoge</p>
                </div>
                <nuxt-link to="/mypage" class="p-link">戻る</nuxt-link>
            </div>
        </div>
        
    </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import auth from '~/plugins/auth'
import userMapper from '@/store/user'

export default {
    computed: {
        ...userMapper.mapGetters(['user'])
    },
    methods: {
        ...userMapper.mapMutations(['initUser', 'setUser'])
    },  
    async mounted() {
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
.p-settingStage {
    &__profThmb {
        width: 200px;
        border-radius: 50%;
    }
}
.p-link {
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>
