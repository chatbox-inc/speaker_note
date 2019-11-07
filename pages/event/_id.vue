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
        <div class="text-center mt-5 add-btn">
          <router-link
            :to="{ path: `/talk/event/${event_id}` }"
            class="btn btn-dark mt-4"
          >
            このイベントに登壇情報を追加
          </router-link>
        </div>
        <div class="speaker-list">
          <h4>登壇一覧</h4>
          <div v-for="item of items" :key="item.title" class="list-group-item">
            <h4 class="list-group-item-heading">
              {{ item.title }}
            </h4>
            <a class="list-group-item-text">{{ item.person }}</a>
          </div>
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
      event: null,
      items: [
        {
          title: "Vueについて",
          person: "taro"
        },
        {
          title: "楽しいVue",
          person: "hanako"
        },
        {
          title: "AWSのはなし",
          person: "tanaka"
        },
        {
          title: "AWSのはなし",
          person: "tanaka"
        },
        {
          title: "AWSのはなし",
          person: "tanaka"
        }
      ]
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
    if (this.events[this.event_id]) {
      this.event = this.events[this.event_id]
    } else {
      this.event = await this.loadEvent({ id: this.event_id })
    }
  },
  methods: {
    ...eventMapper.mapActions(["loadEvent"])
  }
}
</script>

<style lang="scss" scoped>
.add-btn {
  margin-bottom: 50px;
}
.speaker-list {
  margin-bottom: 40px;
}
</style>
