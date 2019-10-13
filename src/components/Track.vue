<template lang="pug">
    .card(v-if="track && track.album")
        .card-image
            figure.image.is-1by1
                img(:src="track.album.images[0].url")
        .card-content
            .media
                .media-left
                    figure.image.is-48x48
                        img(:src="track.album.images[0].url")
                .media-content
                    p.title.is-6
                        strong {{ track.name }}
                    p.subtitle.is-6 {{ track.artists[0].name}}
            .content
                small {{ track.duration_ms | ms-to-mm }}
                nav.level
                    .level-left
                        button.level-item.button.is-primary
                            span(@click="selectTrack")  
                                img(src="@/assets/emoticon_music.png", alt='Escuchame!')   
                        button.level-item.button.is-warning
                            span(@click="goToTrack(track.id)")  
                                img(src="@/assets/nota.png", alt='Visualizame!')

</template>


<script>
import trackMixin from '@/mixins/track'


export default {

    mixins: [ trackMixin ],

    props: {
        track: { type: Object, requiered: true }
    },

    methods: {
        goToTrack (id) {
            if (!this.track.preview_url) { return }

            this.$router.push({ name:'track', params: { id:id } })
        }
    
    }



}
</script>

<style lang="css">



 span img{
     display: block;
     width: 1.5em;
 }


</style>