export default class TestUsecase{
    constructor($axios){
        this.$axios = $axios
    }
    async postStageinfo(data){
        // const url = '/'
        // const result = await this.$axios.post(url, {data})
        setTimeout(() => {
            return true
        }, 3000)
    }
}