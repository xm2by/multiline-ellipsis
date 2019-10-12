<template>
  <div class="content">
    <div class="example">
      <div class="label">demo1：超出一行省略，hover上去显示title</div>
      <div v-ellipsis="{ 'line': 1, 'showTitle': true }">我和我的祖国一刻也不能分割无论我走到哪里都流出一首赞歌我歌唱每一座高山我歌唱每一条河袅袅炊烟小小村落路上一道辙你用你那母亲的脉搏和我诉说我的祖国和我像海和浪花一朵浪是海的赤子海是那浪的依托每当大海在微笑我就是笑的旋涡我分担着海的忧愁分享海的欢乐永远给我碧浪清波心中的歌啦啦</div>
    </div>
    <div class="example">
      <div class="label">demo2：超出两行省略</div>
      <div v-ellipsis="{ 'line': 2 }">我和我的祖国一刻也不能分割无论我走到哪里都流出一首赞歌我歌唱每一座高山我歌唱每一条河袅袅炊烟小小村落路上一道辙你用你那母亲的脉搏和我诉说我的祖国和我像海和浪花一朵浪是海的赤子海是那浪的依托每当大海在微笑我就是笑的旋涡我分担着海的忧愁分享海的欢乐永远给我碧浪清波心中的歌啦啦</div>
    </div>
    <div class="example">
      <div class="label">demo3：超出三行省略，省略号右侧留白10个字符串</div>
      <div v-ellipsis="{ 'line': 3, 'rightBlank': 10 }">我和我的祖国一刻也不能分割无论我走到哪里都流出一首赞歌我歌唱每一座高山我歌唱每一条河袅袅炊烟小小村落路上一道辙你用你那母亲的脉搏和我诉说我的祖国和我像海和浪花一朵浪是海的赤子海是那浪的依托每当大海在微笑我就是笑的旋涡我分担着海的忧愁分享海的欢乐永远给我碧浪清波心中的歌啦啦</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  width: 500px;
  line-height: 20px;
}
.example{
  margin-bottom: 20px;
}
.label{
  margin-bottom: 16px;
  font-weight: bold;
}
</style>