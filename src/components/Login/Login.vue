<template>
<div class="login">
  <div class="login-wrap">
    <div class="avatar">
      <img src="./monkey.png" class="img-circle" alt="">
    </div>
    <form @submit.prevent="handleLogin" class="col-md-offset-1 col-md-10">
      <div class="input-group input-group-lg">
        <span class="input-group-addon">
                      <i class="fa fa-user"></i>
                  </span>
        <input v-model="formData.tc_name" class="form-control" placeholder="用户名" required>
      </div>
      <div class="input-group input-group-lg">
        <span class="input-group-addon">
                      <i class="fa fa-key"></i>
                  </span>
        <input type="password" v-model="formData.tc_pass" class="form-control" placeholder="密码" required>
      </div>
      <button type="submit" class="btn btn-lg btn-primary btn-block">登 录</button>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
    formData: {
        tc_name: '',
        tc_pass: ''
      }
	}
  },
  methods:{
  handleLogin(){
  var params=new URLSearchParams();
  params.append('tc_name', this.formData.tc_name);
  params.append('tc_pass', this.formData.tc_pass);
  axios.post('/api/login', params).then(res => {
        console.log(res)
      })
}
}

}
</script>

<style>
</style>