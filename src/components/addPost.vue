<template>
  <div class="editor">
    <input type="text" placeholder="输入博文标题..." v-model="title">
    <input type="button" value="SAVE" class="saveBtn" @click="save">
    <mavon-editor ref=md v-model="content"/>
    <alertBox :option="option" v-if="option.show" @hide="option.show=false"></alertBox>
  </div>
</template>

<style lang="scss" scoped>
.editor{
  text-align: left;
  position: relative;
  input{
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    margin-bottom: 0.1rem;
    width: 80%;
    box-shadow: 0 0px 4px rgba(0,0,0,0.157), 0 0px 4px rgba(0,0,0,0.227);
  }
  .saveBtn{
    width:18%;
    position: absolute;
    top: 0;
    right: 0;
    //border-color: #1b998b;
    opacity: 0.8;
    background: #fbfbfb;
    color: #1b998b;
    cursor: pointer;
    font-weight: 600;
  }
  .saveBtn:hover{
    opacity: 1;
    background: #1b998b;
    color: #fff;
  }
}
</style>

<script>
import alertBox from './alertBox'
export default {
  data () {
    return {
      title: '',
      content: '',
      defaultData: 'preview', // 清空
      option: {
        'msg': '',
        'show': false
      },
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true// 帮助
      }
    }
  },
  components: {
    alertBox
  },
  methods: {
    save () {
      if (this.content && this.title) {
        this.axios.post('/api/addPost', {
          title: this.title,
          content: this.content
        })
          .then((response) => {
            this.option.show = true
            if (response.data) {
              this.option.msg = '保存成功！'
            } else {
              this.option.msg = '保存失败！'
            }
          })
      } else {
        this.option.show = true
        this.option.msg = '请填入内容！'
      }
    }
  }
}
</script>
