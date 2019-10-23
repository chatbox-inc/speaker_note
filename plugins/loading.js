export default ({ store }, inject) => {
    inject('loader', {
        on(){
            store.commit('loading/on')
        },
        off(){
            store.commit('loading/off')
        }
    })
}