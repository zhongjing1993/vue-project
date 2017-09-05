<template>
  <header>
    <div class="header-com">
      <div class="left">
          <img src="../../static/image/login-header.png" height="30" width="30" alt="" />
          <div class="left-content">
            <span class="login">登录</span>
            <span class="long-string">|</span>
            <span class="register">注册</span>
          </div>
          
      </div>
      <div class="right">
          <ul>
            <li>
              <p>我的订单</p>
              <span>|</span>
            </li>
            <li>
              <p>帮助中心</p>
              <span>|</span>
            </li>
            <li>
              <p>联系客服</p>
            </li>
          </ul>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'header'
  }
</script>
<style lang="sass">
  @import '../../static/css/header'
</style>
