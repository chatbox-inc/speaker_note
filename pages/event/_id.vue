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
            <div class="list-group-item-text">
              {{ item.person }}
            </div>
            <div class="select-btn">
              <select v-model="selected[item.id]" v-on:change="selectfunc(item.id,value)">
                <option disabled value="">
                  選んでください
                </option>
                <option value="1">
                  許可
                </option>
                <option value="2">
                  不許可
                </option>
                <option value="3">
                  要相談
                </option>
              </select>
            </div>
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
          id: 1,
          title: "Vueについて",
          person: "taro"
        },
        {
          id: 2,
          title: "楽しいVue",
          person: "hanako"
        },
        {
          id: 3,
          title: "AWSのはなし1",
          person: "tanaka"
        },
        {
          id: 4,
          title: "AWSのはなし2",
          person: "tanaka"
        },
        {
          id: 5,
          title: "AWSのはなし3",
          person: "tanaka"
        }
      ],
      selected: {}
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
    ...eventMapper.mapActions(["loadEvent"]),
    selectfunc: function(n,value){
      console.log(n,value)
    }
  },
}
</script>

<style lang="scss" scoped>
.add-btn {
  margin-bottom: 50px;
}
.speaker-list {
  margin-bottom: 40px;
}
.select-btn {
  text-align: right;
}
</style>
