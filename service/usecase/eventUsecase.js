export const getEvent = async ($axios, { id }) => {
  const url = `/event/${id}`
  const { event } = await $axios.$get(url)
  return {
    event: {
      id,
      title: event.event_name,
      event_start_at: event.event_start_at,
      address: event.address,
      event_url: event.event_url
    }
  }
}
