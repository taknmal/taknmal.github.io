<script>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
export default {
    setup(){
    },
    props: {
        sign: Object
    },
    // components: [LiteYouTubeEmbed],
    data() {
        return {
            youtubeShowing:false
        }
    },
    mounted() {
        console.log(this.sign)
    },
    methods: {
    onReady: ((event) => {
          event.target.playVideo();
      }),
    showYoutube() {
        this.youtubeShowing = !this.youtubeShowing
    }
  }
}

</script>

<template>
<div class="sign" @click="this.showYoutube" id="sign.id" youtube_id="sign.youtube_id">
    <div class="sign-phrase">
        <span>{{ this.sign.phrase }}</span>
    </div>
    <LiteYouTubeEmbed
    :id="this.sign.youtube_id"
    title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
    />
  </div>
</template>

<style scoped>

</style>