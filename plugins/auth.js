import firebase from "~/plugins/firebase"

export default (ctx, inject) => {
  inject("_auth", {
    // 認証中のユーザを取得する
    auth() {
      return new Promise(resolve => {
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
