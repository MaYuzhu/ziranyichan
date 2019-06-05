<template>
  <div class="wrap">
    <div class="info">
      <iframe id="iframe1" src='http://36.110.66.218:8081/data/private-data'
              name="sonIframe" width="1202" height="800" scrolling="yes" />

    </div>
  </div>
</template>

<script>
    import Cookies from 'js-cookie'
    export default {
      data(){
        return{
          //username:sessionStorage.getItem("token")?sessionStorage.getItem("token"):null,
          username:'123',
          url_data:''
        }
      },
      mounted(){
        if(this.username){
          //this.url_data = 'http://192.168.10.10/data/private-data'
        }
        var user = Cookies.get("token")
        //var user = sessionStorage.getItem("token")
        //var user = localStorage.getItem("token")
        console.log(user)
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    position relative
    width 1000px
    height 750px
    overflow hidden
    //border 1px solid #f00
    .info
      width 1600px
      height 2000px
      position absolute
      top -74px
      //top -4px
      left -164px
      //border 1px solid #00a0db
</style>
