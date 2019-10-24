export default class StageUsecase {
    constructor($axios){
        this.$axios = $axios
    }
    async get(id){
        const url = `https://speaker-note.herokuapp.com/spnote/event/${id}`
        const { event } = await this.$axios.$get(url)
        return event
    }
    create(data){
        // const url = '/'
        // const result = await this.$axios.post(url, {data})
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(data)
            },3000)
        })
    }
}