<template>
  <div class="home">

  <!-- ここから追加 -->
    <div class="list">
    <!-- ここから追加 -->
      <Item 
        v-for="whisper in orderBy(whispers,'date',-1)"
        :key="whisper.id"
        :id="whisper.id"
        :uid="whisper.uid" 
      />
    <!-- ここまで追加-->
    </div>
  <!-- ここまで追加 -->  


  </div>
</template>

<script>
// ここを追加
// ここを追加
import Item from '@/components/Item.vue' 

import { db } from '../main' 
// ここを追加
import Vue2Filters from 'vue2-filters' 

export default {
  name: 'Home',
  // ここから追加
  components: {
    Item
  },
  // ここまで追加

// ここから追加
  data () {
    return {
      whispers: []
    }
  },
  firestore () {
    return {
      whispers: db.collection('whispers')
    }
  },
  //ここまで追加
    // ここを追加
  mixins: [Vue2Filters.mixin] 


}
</script>

<style lang="stylus" scoped>

/* ここから追加 */
.item
  list-style none
  border-top 1px solid #eee
  padding 5px 15px
  display flex
  flex-wrap no-wrap
  justify-content flex-start
  position relative
  &:first-child
    border none
  &:hover
    background rgba(0,0,0,.02)
  .user-box
    margin 10px 10px 10px 0
    .avatar
      height 50px
      width 50px
      border-radius 50%
      border 1px solid #eee
      background-size cover
    .user-name
      margin 5px 0 0 0
      text-align center
      font-size .7rem
      line-height .7rem
      width 50px
  .content
    padding 10px
/* ここまで追加 */
  
</style>
