<template lang="pug">
    .content(v-if="showNotification")
        .notification.is-danger
            p Lo sentimos, la cancion no tiene un previw disponible!
    .content(v-else-if="track.album && track.preview_url")
        p
            img(:src="track.album.images[0].url")
        p
            strong  {{ track.name }}
            small   [{{ track.duration_ms | ms-to-mm }}]
        p 
            audio(controls, v-bind:src="track.preview_url" )




</template>


<script>
export default {
    
    data () {
        return {
            track: {},
            showNotification: false
        }
    },

    created () {
        this.$bus.$on('set-track', (track)=> {
            this.track = track
            if (!this.track.preview_url) {
                this.showNotification=true
            }           
        })
    },

    watch: {
        showNotification () {
            if (this.showNotification) {
            setTimeout( () => {
                this.showNotification = false
            }, 5000 )
            }
        }
    },

}
</script>


<style lang="scss" scoped>

 img {
     width: 30vh;
     border-radius: 50%;
 }

</style>>

