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
        SET_USER(state,user){
            state.user = user
        },
        
    },
    actions: {
        
    }
}
