<template>
  <div class="wrap">
    <div class="header">
      <div class="content">
        <a href="/">
          <img src="https://www.chelun.com/static/dist/img/logo.png" alt="">
        </a>
        <ul class="contentUl">
          <li>产品</li>
          <li>关于我们</li>
          <li>大数据</li>
          <li>新闻</li>
          <li>招聘</li>
          <li class="header_after">商场
            <span class="login_btn">登录</span>
          </li>
        </ul>
        
      </div>
      <img src="../assets/genduo.png" alt="" class="displayImg">
    </div>
    <div class="banners">
      <img src="http://picture.eclicks.cn/g1/l/2018/04/17/2e324eb8e740788b_2633_960.png" alt="">
    </div>
    <div class="list_cont">
      <span><router-link to="/talk">分析评论</router-link></span>
      <span><router-link to="/trend">趋势榜单</router-link></span>
      <span><router-link to="/research">研究报告</router-link></span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @media all and (max-width: 1000px) {
      .contentUl{
        display: none;
        // z-index: 999;
      }
      .header{
        width: 100%;
        height: 64px;
        line-height: 64px;
        display: flex;
        justify-content: space-between;
        padding: 23px 0;
        .displayImg{
          display: block;
          margin-right: 20px;
        }
        a{
          width: 120px;
          height: 100%;
          display: flex;
          align-items: center;
          margin-left: 120px;
          img{
            width: 100%;
          }
        }
      }
  }
  .displayImg{
    display: none;
  }
  @media screen and (min-width: 1000px) {
    .header{
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      z-index: 100;
      padding: 23px 0;
      height: 64px;
      border-bottom: solid 1px #d6d6d6;
      border-bottom: solid 1px rgba(50,50,50,.2);
      transition: padding .3s,background-color .3s,box-shadow .3s,border-bottom .3s;
      .content{
        width: 100%;
        height: 100%;
        display: flex; 
        margin-left: 120px;
        justify-content: space-between;
        a{
          width: 120px;
          height: 100%;
          display: flex;
          align-items: center;
          img{
            width: 100%;
          }
        }
        .contentUl{
          flex: 1;
          display: flex;
          align-items: center;
          height: 100%;
          padding-left: 100px;
          box-sizing: border-box;
          li{
            height: 100%;
            width: 14%;
            display: flex;
            align-items: center;
            font-size:20px;
            color: #333;
          }
          .header_after{
              position: relative;
            }
          .login_btn{
            position: absolute;
            left: 60px;
            top:25px;
            font-size:14px; 
          }
        }
      }
    }
  }
  *{
    margin: 0;
    padding: 0;
    list-style:none;
    text-decoration: none;
  }
  .wrap{
    width:100%;
    height:100%;
    overflow: hidden;
  }
  .list_cont{
    width: 100%;
    height: 70px;
    line-height: 70px;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    span{
      width: 60px;
      margin-right: 140px;
      height: 70px;
      line-height: 70px;
      display: inline-block;
      font-size:14px;
      font-weight: 600;
      color: #999;
    }
  }
  .banners{
    position: relative;
    margin: 0 auto;
    height: 700px;
    width: 100%;
    max-width: 1920px;
    img{
      position: absolute;
      left: 50%;
      top: 0;
      z-index: 10;
      margin-left: -960px;
      width: 1920px;
      height: 100%;
    }
  }
  
</style>
