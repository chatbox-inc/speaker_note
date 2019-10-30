<template>
  <div v-if="event">
    <div class="row justify-content-center mt-5">
      <div class="col-sm-8">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              {{ event.title }}
            </h5>
            <dl class="mb-4">
              <dt class="float-left mr-2">
                日時:
              </dt>
              <dd>{{ event.event_start_at }}</dd>
              <dt class="float-left mr-2">
                場所:
              </dt>
              <dd>{{ event.address }}</dd>
            </dl>
            <div class="text-center">
              <a :href="event.event_url" class="btn btn-dark" target="_blank">
                connpass
              </a>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <router-link
            :to="{ path: `/talk/event/${event_id}` }"
            class="btn btn-dark mt-4"
          >
            このイベントに登壇情報を追加
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventMapper from "~/store/event"

export default {
  layout: "guest",
  data() {
    return {
      event: null
    }
  },
  computed: {
    ...eventMapper.mapState(["events"]),
    event_id() {
      return this.$route.params.id
    }
  },
  async mounted() {
    await this.$_auth.auth()
    this.event = await this.loadEvent({ id: this.event_id })
  },
  methods: {
    ...eventMapper.mapActions(["loadEvent"])
  }
}
</script>

<style lang="scss" scoped></style>
