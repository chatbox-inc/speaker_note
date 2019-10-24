export const getTalkList = async $axios => {
  const { talks } = await $axios.$get(`/talks`)
  return {
    talks: talks.map(talk => {
      return {
        code: talk.code,
        talk_title: talk.title,
        talk_summary: talk.detail,
        user_name: talk.speaker_name,
        user_img: talk.speaker_photo,
        user_title: talk.speaker_title,
        user_profile: talk.speaker_profile
      }
    })
  }
}

export const getTalk = async ($axios, { code }) => {
  const { talk } = await $axios.$get(`/talk/${code}`)
  return {
    talk: {
      talk_title: talk.title,
      talk_summary: talk.detail,
      user_name: talk.speaker_name,
      user_img: talk.speaker_photo,
      user_title: talk.speaker_title,
      user_profile: talk.speaker_profile
    },
    event: {
      title: talk.event.event_name,
      event_start_at: talk.event.event_start_at,
      address: talk.event.address
    }
  }
}

export const putTalk = async ($axios, { event_id, form }) => {
  const { talk } = await $axios.$put(`/talk/event/${event_id}`, {
    talk: form
  })
  return {
    code: talk.code
  }
}
