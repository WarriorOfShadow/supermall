<template>
  <div class="tab-bar-item" @click="itemClick">
    <!--通过继承避免插槽直接被替换掉的问题-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
      type: String,
      default: "red"
    }
  },
  data(){
    return {
      // isActive: false
    }
  },
  computed:{
    isActive:{
      get(){
        return this.$route.path.indexOf(this.path)!== -1;
      },
      set(value){
        this.value = value
      }
    },
    activeStyle:{
      get(){
        return this.isActive?{color: this.activeColor}:{}
      },
      set(value){
        this.value = value
      }
    }
  },
  methods:{
    itemClick(){
      this.isActive = true
      this.$router.push(this.path);
    },

  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

#tab-bar img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}

</style>
<!--
<div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.png" alt="">
      首页
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/search.png" alt="">
      搜索
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/img.png" alt="">
      图片
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/my.png" alt="">
      我的
    </div>
-->
