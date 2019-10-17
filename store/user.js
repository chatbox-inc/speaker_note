import {createNamespacedHelpers} from 'vuex'



export default {
    ...createNamespacedHelpers('user'),
    state(){
        return {
            user: null
        }
    },
    getters: {
        user: state => state.user
    },
    mutations: {
        setUser(state, {user}){
            const { uid, email, photoURL, displayName } = user
            state.user = { uid, email, photoURL, displayName }
        },
        initUser(state){
            state.user = null
        }
    },
    actions: {
        
    }
}
