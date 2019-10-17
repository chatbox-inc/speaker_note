<template>
    <div>
        <div>TOPですね</div>
        <button @click="logout">ログアウト</button>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
    methods: {
        logout(){
            firebase.auth().signOut()
        }
    }
}
</script>

<style lang="scss">

</style>
