<template>
  <article class="article">
    <div class="article__content">
      <em>{{ article.description }}</em>
    </div>
    - <a :href="article.url" target="_blank">
      <em>{{ article.source }}</em>
    </a>
  </article>
</template>

<script>
export default {
  name: 'VContentCard',
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
