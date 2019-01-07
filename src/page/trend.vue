<template>
  <div class="trendBody">
    <p class="trendBody_p">
      SUV TOP10
    </p>
    <div class="trendBody_eacharts">
      <div id="myChart" :style="{width: '650px', height: '300px'}"></div>
      <div class="rights">
        <p><span>关注指数</span></p>
        <ul>
          <li>
            <span>1</span>
            哈弗H6
            <span>138,279</span>
          </li>
          <li>
            <span>2</span>
            本田CR-V
            <span>70,198</span>
          </li>
          <li>
            <span>3</span>
            奥迪Q5
            <span>138,279</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
              trigger: 'axis'
          },
          grid: {
              left: '2%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Jan /18','Mar /18','May /18','Jul /18','Sep /18','Nov /18']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330, 410]
              },
              {
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330, 320]
              },
              {
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330, 1320]
              }
            ]
        })
    }
  }
}
</script>

<style lang="scss">
  .trendBody{
    width: 100%;
    padding: 20px;
    .trendBody_eacharts{
      width: 100%;
      display: flex;
      .rights{
        flex:1;
        padding: 20px;
        background: #fbfbfb;
        ul{
          padding: 0;
          margin: 0;
          list-style: none;
          border: none;
          li{
            font-size: 14px;
            margin-top: 16px;
            height: 20px;
            line-height: 20px;
            color: #333;
          }
          li:nth-child(1) span:nth-child(1) {
            background: #f30;
            padding: 6px 8px;
            color: #fff;
          }
          li span:nth-child(2) {
              float: right;
              color: #999;
          }
          li:nth-child(2) span:nth-child(1) {
            background: #f60;
            padding: 6px 8px;
            color: #fff;
          }
          li:nth-child(3) span:nth-child(1) {
            background: #f90;
            padding: 6px 8px;
            color: #fff;
          }
        }
        p{
          font-size:14px;
          border-left:3px solid #3aaffd;
          span{
            margin-left: 6px;
          }
        }
      } 
    }
    
    .trendBody_p{
      font-size: 24px;
      color: #999;
      border-left: 4px solid #3aaffd;
      padding-left: 6px;
      line-height: 1;
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }
</style>
