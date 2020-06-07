<!-- Editor.vue -->

<template>
  <li class="item">
    <div class="user-box">
      <div class="avatar" :style="'background-image: url('+currentUser.photoURL+')'"></div>
      <p class="user-name">{{currentUser.displayName}}</p>
    </div>
    <div class="editor">
    
      <textarea placeholder="new whisper" v-model="newWhisper" @keypress.enter="createWhisper"> <!-- 'v-model','@keypress.enter'を追加 -->

      </textarea>
      <p class="message">Press Enter to Whisper</p>
    </div>
  </li>
</template>

<script>

import { db } from '../main' // ここを追加
// ここを追加
// ここを追加
// ここを追加
// ここを追加
// ここを追加
// ここを追加
// ここを追加
// ここを追加
export default {
  props: ['currentUser'],
  
  // ここから追加
  data () {
    return {
      newWhisper: ''
    }
  },
  methods: {
    createWhisper () {
      const date = new Date()
      console.log(date)
      db.collection('whispers').add({
        'content': this.newWhisper,
        'date': date,
        'uid': this.$props.currentUser.uid
      })
      .then(
        this.newWhisper = ''
      )
    }
  }
  
  }
</script>

<!-- 略 -->