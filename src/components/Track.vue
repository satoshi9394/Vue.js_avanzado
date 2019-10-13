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
                        a.level-item
                            span(@click="selectTrack")  
                                img(src="@/assets/emoticon_music.png", alt='Escuchame!')
                                p Escuchame!    
                        a.level-item
                            span(@click="goToTrack(track.id)")  
                                img(src="@/assets/nota.png", alt='Visualizame!')
                                p Visualizame!    
</template>


<script>
export default {
    props: {
        track: { type: Object, requiered: true }
    },

    methods: {
        selectTrack() {
            this.$emit('select', this.track.id)

            this.$bus.$emit('set-track', this.track)
        },

        goToTrack (id) {
            this.$router.push({ name:'track', params: { id:id } })
        }
    
    }



}
</script>

<style lang="css">

 span {
     display: flex;

 }   

 span img{
     display: block;
     width: 1.5em;
 }
 span p {
     display: block;
 }

</style>