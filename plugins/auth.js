import firebase from "~/plugins/firebase"
import {dispatchLoginAction} from "~/store/user";

export default ({$store}, inject) => {

  // FB 認証の初期化処理
  firebase.auth().onAuthStateChanged(async user => {

    // if(user){
    //   console.log("hoge",user, await firebase.auth().currentUser.getIdToken())
    // }
  })
  // firebase.auth().onAuthStateChanged(user => {
  //   console.log("piyo",user)
  // })

  inject("_auth", {
    // 認証中のユーザを取得する
    // firebase.auth().onAuthStateChanged の内部では、state に値をセットするだけ
    auth() {
      return new Promise(resolve => {
        firebase.auth().onAuthStateChanged(async user => {
          if(user){
            const idToken = await firebase.auth().currentUser.getIdToken()
            app.$axios.setToken(idToken,"Bearer")
            const {user} = await getProfile(app.$axios)
            return await dispatchLoginAction($store)
            console.log("hoge",user )
          }
        })


        firebase.auth().onAuthStateChanged(user => {
          resolve(user || false)
        })
      })
    },
    // ログイン処理を記述
    login() {},
    // ログアウト処理を記述
    logout() {}
  })
}
