<template>
  <div class="bot_cont">
    <p class="year_tag">
      <span>2016</span>
      <span>2017</span>
      <span>2018</span>
      年份
    </p>
    <p class="label_tag">
      <span>数据理论</span>
      <span>涨姿势</span>
      <span>市场动态</span>
      <span>原创</span>
      年份
    </p>
    <div class="data_cont">
      <div class="dataCont_left">
        <div v-for="(data,index) in dataList" :key="index">
          <dl>
            <dt>
              <img :src="data.img" alt="">
            </dt>
            <dd>
              <h2>{{data.title}}</h2>
              <div class="tags">
                <span class="shichang">市场动态</span>
                <span class="yuanchuang">原创</span>
              </div>
              <p class="decsc">{{data.description}}</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="dataCont_right">
        <div class="data-hot-title">
          最热
        </div>
        <ol>
          <li class="dataContli">新车市场的新阵地：三四线汽车消费者</li>
          <li class="dataContli">大数据在热销车型预测领域的初探</li>
          <li class="dataContli">90后女性车主的崛起带来了汽车个性化的春天</li>
          <li class="dataContli">流言终结！宝马车主都是暴发户么？</li>
          <li class="dataContli">人以类聚，车以群分</li>
          <li class="dataContli">中低端SUV之战进入下半场</li>
          <li class="dataContli">华南被日系车占领那些年</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import request from '../util/request.js';
import axios from 'axios';

export default {
  data () {
    return {
      dataList:[]
    }
  },
  mounted () {
    request.get('http://localhost:8080/src/mock/list.json').then(res=>{
      this.dataList = res
    })
  }
}
</script>

<style lang="scss">
  .bot_cont{
    width: 100%;
    .data_cont{
      width: 100%;
      display: flex;
      padding: 12px;
      .dataCont_right{
        width: 30%;
        padding:20px 16px;
        background: #fbfbfb;
        ol{
          width: 100%;
          .dataContli{
            position: relative;
            padding-left: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 244px;
            line-height: 35px;
            font-size: 12px;
          }
          .dataContli:before{
            content: '';
            position: absolute;
            left: 0;
            top: 14px;
            z-index: 10;
            width: 7px;
            height: 7px;
            background-color: #333;
          }
        }
        .data-hot-title{
          position: relative;
          margin-bottom: 15px;
          padding-left: 12px;
          line-height: 14px;
          color: #999;
        }
        .data-hot-title:before{
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 2px;
          width: 3px;
          height: 14px;
          background-color: #3aaffd;
        }
      }
      .dataCont_left{
        width: 70%;
        margin-top:30px;
        dl{
          width: 100%;
          display: flex;
          dt{
            width: 168px;
            img{
              width: 100%;
              border-radius: 16px;
            }
          }
          dd{
            padding:6px 12px;
            box-sizing: border-box;
            flex: 1;
            border-bottom: 1px solid #ccc;
            padding-bottom: 6px;
            .tags{
              margin-top: 18px;
            }
            .decsc{
              color: #999;
              margin-top:16px;
              font-size:12px;
            }
            .shichang{
              font-size: 12px;
              color: #f90;
              border: 1px solid #f90;
              padding: 2px;
              margin-right: 0;
            }
            .yuanchuang{
              font-size: 12px;
              color: #f66;
              border: 1px solid #f66;
              padding: 2px;
              margin-left: 5px;
            }
            h2{
              font-size:16px;
            }
          }
        }
      }
      
    }
    .year_tag{
      width: 100%;
      text-align: right;
      height: 40px;
      line-height: 40px;
      padding-right: 20px;
      box-sizing: border-box;
      font-size:14px;
      span{
        color:#3aaffd;
        margin-right:7px;
        font-size:12px;
      }
    }
    .label_tag{
      width: 100%;
      text-align: right;
      height: 40px;
      line-height: 40px;
      padding-right: 20px;
      box-sizing: border-box;
      font-size:14px;
      span{
        color:#3aaffd;
        margin-right:7px;
        font-size:12px;
      }
    }
  }
</style>
