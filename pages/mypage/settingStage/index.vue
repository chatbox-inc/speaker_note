<template>
    <section v-if="user" class="p-settingStage">
        <h1 class="h3">登壇情報</h1>
        <form action="" class="mb-5">
            <div class="form-group">
                <input type="text" 
                    v-model="$v.form.title.$model"
                    class="form-control"  
                    placeholder="タイトル"
                    @change="inputForm('title')" >
            </div>
            <p class="text-danger" v-if="!$v.form.title.required && $v.form.title.$dirty">タイトルは必須です</p>
            <div class="form-group">
                <textarea 
                    class="form-control" 
                    v-model="$v.form.info.$model"
                    rows="5" 
                    placeholder="登壇情報入力"
                    @change="inputForm('info')">
                </textarea>
            </div>
            <p class="text-danger" v-if="!$v.form.info.required && $v.form.info.$dirty">タイトルは必須です</p>
        </form>
        <div class="pl-3 mb-5">
            <h2 class="h3">イベント情報</h2>
            <p>2019/10/01   chatbox 勉強会       ↓ 大阪</p>
        </div>
        <div class="mb-5 pl-2">
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
        <div class="text-center">
            <button class="btn btn-primary text-center" @click="addInfo">追加する</button>
        </div>
    </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import auth from '~/plugins/auth'
import userMapper from '@/store/user'
import validations from '@/service/validations/stageInfo'
import StageUsecase from '@/service/usecase/StageUsecase'

export default {
    data(){
        return {
            form: {
                title: null,
                info: null
            }
        }
    },
    computed: {
        ...userMapper.mapGetters(['user'])
    },
    methods: {
        ...userMapper.mapMutations(['initUser', 'setUser']),
        inputForm(name){
            if(name === 'title'){
                this.$v.form.title.$touch()
                if(this.$v.form.title.$invalid){
                    return ;
                }
            }
            if(name === 'info'){
                this.$v.form.info.$touch()
                if(this.$v.form.info.$invalid){
                    return ;
                }
            }
        },
        async addInfo(){
            this.$v.form.$touch()
            if(this.$v.form.$invalid) {
                console.error("エラー内容を確認してください。")
                return ;
            }try{
                this.$loader.on()
                const result = await new StageUsecase(this.$axios).create(this.form)
                console.log(result)
            }catch(error){
                console.error(error)
            }finally{
                this.$loader.off()
            }
            
        }
    },  
    async mounted() {
        const user = await auth()
        if(user){
            this.setUser({user})
        }else {
            this.$router.push('/login')
        }
    },
    validations
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
