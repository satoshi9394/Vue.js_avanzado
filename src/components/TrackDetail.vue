<template lang="pug">
    .container
        .columns
            .column.is-5.is-offset-4
                pm-track(:track="track")
</template>


<script>
import trackservice from '@/services/track'
import PmTrack  from '@/components/Track.vue'


export default {
    components: { PmTrack },
    
    data () {
        return {
            track: {}

        }
    },

    created () {
        const id = this.$route.params.id

        trackservice.getById(id)
            .then(res => {
                this.track = res
            })
    }
}
</script>

<style lang="scss" scoped>

    .columns {
        margin: 20px
    }

</style>