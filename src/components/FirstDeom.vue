<template>
  <div class="big">
    <div class="content">
      <div class="nav">
        <div><a>My First Deom</a></div>
      </div>
        <div class="blok">
        <div class="utirl blok_input">
          <input type="text" class="first_input" placeholder= "亲!添加条目" v-model="add_val" @keyup.enter="add_input_val">
        </div>
        <div class="utirl blok_div">
          <div class="add_blok_div" v-show="!arr.length">
            <div class="add_blok_text"><img src="../assets/seusse.png"/>没有信息，请添加</div>
          </div>
        </div>
        <div class="utirl blok_btn" v-for="item in arr" :key="item.input_val">
          <div class="add_blok_div">
            <ul class="add_ul">
              <li>
                <div class="add_content">
                  <label>{{item.input_val}}</label>
                </div>
              </li>
            </ul>
            <a class="destroy" @click="delete_content(item)">
              <img src="../assets/error.png"/>
            </a>
          </div>
        </div>
        <div class="blok_but_remove" @click="clean_whole">清空</div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myFirstDemo',
  data () {
    return {
      arr: [],
      add_val: ''
    }
  },
  methods: {
    // 添加的方法
    add_input_val () {
      this.arr.push({
        input_val: this.add_val
      })
      this.add_val = ''
    },
    // 删除的方法
    delete_content (data) {
      let index = this.arr.indexOf(data)
      this.arr.splice(index, 1)
    },
    // 清空的方法
    clean_whole () {
      // 清空数组
      this.arr = []
    }
  }
}
</script>

<!-- 样式开始 -->
<style scoped>
  .big {
    position:static;
  }
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
  .blok {
    width: 40%;
    background-color: #f9f9f9;
    position: absolute;
    left: 50%;
    transform: translate(-50%)
  }
  /*公共样式*/
  .utirl{
    width: 100%;
    height: 25%;
    margin: 2.5% 0;
    overflow: hidden;
    /*background-color: #442e2a;*/
  }
  .blok_input{
    margin-top: 40px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }
  /*输入框的样式*/
  .first_input{
    font-size: 16px;
    width: 90%;
    padding-left: 5px;
    height: 50px;
  }
  .blok_div{
    display: block;
    align-items: center;
  }
  .add_blok_div{
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
  .add_blok_text{
    color: rgb(57, 212, 109);
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .add_blok_text img{
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
  .blok_btn {
    position: static;
  }
  .blok_but_remove {
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
  .blok_but_remove:hover {
    vertical-align: center;
    color: white;
    background-color: #76b8ff;
  }
  .blok_but_remove:active {
    vertical-align: center;
    color: white;
    background-color: #0096ff;
  }
  /*添加的div排列*/
  .add_content{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  .add_ul {
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
