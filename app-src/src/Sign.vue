<script>
export default {
    props: {
        sign: Object
    },
  data() {
    return {
        youtubeShowing:false
    }
  },
  mounted() {
    console.log(this.sign)
  },
  methods: {
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
    <div class="video-responsive">
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/" + {{ this.sign.youtube_id }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube" 
          />
    </div>
</div>
</template>

<style scoped>

</style>