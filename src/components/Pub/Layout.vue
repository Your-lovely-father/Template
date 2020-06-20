<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-04-08 13:20:18
 -->
<template>
  <div class="con-layout-container">
    <myHeader/>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <myFooter/>
  </div>
</template>
 
<script>
import myHeader from "./Header/Header";
import myFooter from "./Header/Footer";

export default {
  name: "layout",

  components: {
    myHeader,
    myFooter
  },
  methods: {}
};
</script>
 
<style scoped lang="stylus">
.con-layout-container {
  width: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>