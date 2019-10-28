import firebase from "~/service/firebase"
import { dispatchLoginAction, dispatchLogoutAction } from "~/store/user"

export default ({ app, store }, inject) => {
  inject("_auth", {
    // 認証中のユーザを取得する
    // firebase.auth().onAuthStateChanged の内部では、state に値をセットするだけ
    auth() {
      return new Promise(resolve => {
        firebase.auth().onAuthStateChanged(async user => {
          console.log("auth state changed", user)
          if (user) {
            const idToken = await firebase.auth().currentUser.getIdToken()
            console.log(idToken,app)
            app.$axios.setToken(idToken, "Bearer")
            resolve(await dispatchLoginAction(store))
          } else {
            resolve(null)
          }
        })
      })
    },
    // ログイン処理を記述
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope("https://www.googleapis.com/auth/userinfo.email")
      const { user } = await firebase.auth().signInWithPopup(provider)
      return user
    },
    // ログアウト処理を記述
    async logout() {
      firebase.auth().signOut()
      await dispatchLogoutAction(store)
    }
  })
}
