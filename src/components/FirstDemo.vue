<template>
  <div class="content">
    <div class="nav">
      <a>My First Deom</a>
    </div>
    <div class="container">
        <div class="general container-input">
          <input
           type="text"
           class="first-input"
           placeholder= "请添加条目！"
           v-model="add_val"
           @keyup.enter="addInputVal"
          />
        </div>

        <div class="general container-div">
          <div class="add-container" v-show="!arrGetValue.length">
            <div class="add-container-text">
              <img src="../assets/success.png"/>
              没有信息，请添加
            </div>
          </div>
        </div>

        <ul class="add-ul">
          <li  class="add-content add-container" v-for="item in arrGetValue" :key="item.input_val">
            <label>{{item.input_val}}</label>
              <a class="destroy" @click="deleteContent(item)">
                <img src="../assets/error.png"/>
              </a>
          </li>
        </ul>

        <div class="container-btn-remove" @click="cleanAll">清空</div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>

export default {
  name: 'myFirstDemo',
  data () {
    return {
      arrGetValue: [],
      add_val: ''
    }
  },

  methods: {
    // 添加的方法ghjgh
    addInputVal () {
      if (this.add_val === '') {
        alert('请输入')
      } else {
        this.arrGetValue.push({
          input_val: this.add_val
        })
        this.add_val = ''
      }
    },
    // 删除的方法
    deleteContent (data) {
      let index = this.arrGetValue.indexOf(data)
      this.arrGetValue.splice(index, 1)
    },
    // 清空的方法
    cleanAll () {
      // 清空数组
      this.arrGetValue = []
    }
  }
}
</script>

<!-- 样式开始 -->
<style scoped>
  .content {
    width: 100%;
    height: 100%;
  }
  .nav {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: rgb(219, 219, 219);
  }
  .nav div{
    vertical-align: middle
  }
  .nav div a{
    margin-left: 10px;
  }
  .container {
    width: 40%;
    background-color: #f9f9f9;
    position: absolute;
    left: 50%;
    transform: translate(-50%)
  }
  /*公共样式*/
  .general{
    width: 100%;
    height: 25%;
    margin: 2.5% 0;
    overflow: hidden;
    /*background-color: #442e2a;*/
  }
  .container-input{
    margin-top: 40px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }
  /*输入框的样式*/
  .first-input{
    font-size: 16px;
    width: 90%;
    padding-left: 5px;
    height: 50px;
  }
  .container-div{
    display: block;
  }
  .add-container{
    width: 90%;
    height: 50px;
    padding-left: 5px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    border:2px solid rgb(57, 212, 109)
  }
  /*提示div中的样式 */
  .add-container-text{
    color: rgb(57, 212, 109);
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .add-container-text img{
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
  .container-btn-remove {
    text-align: center;
    cursor: pointer;
    padding: 8px;
    width: 15%;
    height: 8%;
    margin-right: 8px;
    margin-bottom: 8px;
    float: right;
    border-radius: 5px;
  }
  /*按钮鼠标移入时的样式*/
  .container-btn-remove:hover {
    vertical-align: center;
    color: white;
    background-color: #76b8ff;
  }
  .container-btn-remove:active {
    vertical-align: center;
    color: white;
    background-color: #0096ff;
  }
  /*添加的div排列*/
  .add-content{
    display: flex;
    flex-flow: row wrap;
  }
  .add-ul {
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  .destroy {
    line-height: 10px;
  }
  .destroy img{
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-right: 10px;
    vertical-align: center;
  }
  .footer{
    width: 100%;
    height: 60px;
    background-color: rgb(219, 219, 219);
    position:fixed;
    bottom: 0;
  }
</style>
