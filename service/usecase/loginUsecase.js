export const putLogin = async $axios => {
  return await $axios.post("/login")
}

export const getProfile = async $axios => {
  const { user } = await $axios.$get("/profile")
  return {
    user: {
      name: user.display_name,
      email: user.email,
      avatar_url: user.photo_url
    }
  }
}
