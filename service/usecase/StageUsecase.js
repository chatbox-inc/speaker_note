export default class StageUsecase {
    constructor($axios){
        this.$axios = $axios
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