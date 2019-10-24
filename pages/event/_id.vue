<template>
    <div>
        <router-link :to="{path: `/talk/event/${params.id}`}" class="btn btn-dark float-right mt-4">登壇情報を追加</router-link>
        <h1 class="mb-5">{{event_name}}</h1>
        <img src="~assets/images/event_sample.png" class="img-fluid mb-5" alt="Responsive image">
        <dl class="mb-5">
            <dt class="float-left mr-2">日時:</dt>
            <dd>{{event_start_at}}</dd>
            <dt class="float-left mr-2">場所:</dt>
            <dd>{{address}}</dd>
        </dl>
        <div class="text-center mb-5">
            <a :href="event_url" class="btn btn-dark">commpassページへ</a>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({params,$axios}) {
        const { event } = await $axios.$get(`https://speaker-note.herokuapp.com/spnote/event/${params.id}`) 
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
    layout: 'guest',
    
}
</script>

<style lang="scss" scoped>

</style>
