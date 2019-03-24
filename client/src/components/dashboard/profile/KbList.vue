<template>
  <div class="kb-feed grid" data-masonry='{ "itemSelector": ".grid-item" }'>
    <app-kb-list-item 
      v-for="article in kbArticles" :key="article._id"
      :title="article.title"
      :link="article.url"
      :body="article.body"
      :comments="article.comments"
      :postId="article.postId"
    />
  </div>
</template>

<script>
import kbListItem from './KbListItem';
export default {
  props: ['kbArticles'],
  components: {
    appKbListItem: kbListItem
  }
}
</script>

<style>
@media (max-width: 767.5px) {
  .kb-feed {
    padding-top: 80px;
  }
}
</style>