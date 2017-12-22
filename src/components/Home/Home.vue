<template>
	<div>

	<app-header></app-header>
  	    <!-- 主体 -->
    <div class="main">
        <!-- 侧边栏 -->
       <app-aside></app-aside>
       <router-view></router-view>
    </div>
	</div>
</template>

<script>
import AppAside from '../AppAside/AppAside'
import AppHeader from '../AppHeader/AppHeader'

export default {
  data () {
    return {}
  },
  components: {
  AppAside,
  AppHeader
  }
}
</script>

<style>
</style>