<template>
  <section class="content">
    <div class="container" v-if="contents.length > 0">
      <h2>Why use strong password</h2>
      <hr>
      <VContentCard
        v-for="(article, index) in contents"
        :key="index"
        :article="article"
        :class="[index % 2 === 0 ? 'text-left' : 'text-right']"
      />
    </div>
  </section>
</template>

<script>
import VContentCard from '@common/VContentCard'
export default {
  name: 'VtContent',
  components: {
    VContentCard
  },
  data () {
    return {
      contents: []
    }
  },
  mounted () {
    fetch('/data/contents.json')
      .then(response => response.json())
      .then(response => {
        if (response.data.length > 0) this.contents = response.data
      })
  }
}
</script>
