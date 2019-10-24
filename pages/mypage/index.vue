<template>
  <div v-if="user">
    <div class="p-mypage">
      <div class="row position-relative mb-5">
        <div class="">
          <img :src="user.avatar_url" alt="" class="p-mypage__thmb" />
        </div>
        <div class="pl-5 pt-4 ">
          <p class="p-mypage__name">
            {{ user.name }}
          </p>
          <p class="p-mypage__comp">
            株式会社hogehoge
          </p>
        </div>
        <nuxt-link to="#" class="p-mypage__edit">
          プロフィール編集
        </nuxt-link>
      </div>
      <nuxt-link to="/mypage/settingStage" class="btn btn-dark float-right">
        登壇情報を追加
      </nuxt-link>
      <h2 class="mb-3 h3">
        登壇情報
      </h2>
      <ul class="list-group mb-3">
        <li
          v-for="talk in talklist"
          :key="talk.code"
          class="list-group-item list-group-item-dark"
          @click="$router.push(`/talk/edit/${talk.code}`)"
        >
          <span class="mr-2">10/01</span>{{ talk.talk_title }}
        </li>
      </ul>
      <h2 class="h3">
        管理イベント
      </h2>
    </div>
  </div>
</template>

<script>
import talkMapper from "@/store/talk"
export default {
  name: "Mypage",
  layout: "mypage",
  data() {
    return {
      user: null,
      talklist: []
    }
  },
  async mounted() {
    this.user = await this.$_auth.auth()
    const { talks } = await this.loadTalkList()
    this.talklist = talks
  },
  methods: {
    ...talkMapper.mapActions(["loadTalkList"])
  }
}
</script>

<style lang="scss">
.p-mypage {
  &__thmb {
    width: 200px;
    border-radius: 50%;
  }
  &__name {
    font-weight: bold;
    font-size: 2rem;
  }
  &__edit {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
ul {
  list-style: none;
}
</style>
