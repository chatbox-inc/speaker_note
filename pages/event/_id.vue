<template>
  <div>
    <div class="row justify-content-center mt-5">
      <div class="col-sm-8">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              {{ event_name }}
            </h5>
            <dl class="mb-4">
              <dt class="float-left mr-2">
                日時:
              </dt>
              <dd>{{ event_start_at }}</dd>
              <dt class="float-left mr-2">
                場所:
              </dt>
              <dd>{{ address }}</dd>
            </dl>
            <div class="text-center">
              <a :href="event_url" class="btn btn-dark" target="_blank">
                connpass
              </a>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <router-link
            :to="{ path: `/talk/event/${params.id}` }"
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
import StageUsecase from "@/service/usecase/StageUsecase"

export default {
  async asyncData({ params, $axios }) {
    const event = await new StageUsecase($axios).get(params.id)
    return {
      id: event.id,
      team_id: event.team_id,
      connoass_event_id: event.connoass_event_id,
      event_name: event.event_name,
      event_url: event.event_url,
      event_start_at: event.event_start_at,
      event_end_at: event.event_end_at,
      address: event.address,
      params
    }
  },
  layout: "guest"
}
</script>

<style lang="scss" scoped></style>
