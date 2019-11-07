<template>
  <div>
    <div class="row justify-content-center mt-5">
      <div class="col-sm-8">
        <div class="group">
          <h3>関西フロントエンドUG</h3>
          <div class="group-event">
            <div v-for="item of items" class="list-group-item">
              <a class="list-group-item-text test">{{ item.date }}</a>
              <router-link :to="{ path: `/event/150932` }">
                <h4 class="list-group-item-heading">
                  {{ item.title }}
                </h4>
              </router-link>
              <p class="list-group-item-text">管理者 : {{ item.speaker }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "guest",
  data: function() {
    return {
      items: [
        {
          date: "2019/11/02 10:30-",
          title: "FRONTEND CONFERENCE 2019",
          speaker: "person"
        },
        {
          date: "2019/11/20 19:30-",
          title: "FRONTEND CONFERENCE 2018",
          speaker: "person"
        },
        {
          date: "2019/11/20 19:30-",
          title: "FRONTEND CONFERENCE 2017",
          speaker: "person"
        },
        {
          date: "2019/11/20 19:30-",
          title: "FRONTEND CONFERENCE 2016",
          speaker: "person"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
