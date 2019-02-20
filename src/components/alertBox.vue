<template>
  <div class="alert">
    <i class="iconfont icon-xiaoxi1"></i>{{option.msg}}
  </div>
</template>
<script>
export default {
  name: 'alertBox',
  props: {
    option: Object
  },
  mounted () {
    setTimeout(() => {
      this.$emit('hide')
    }, 2000)
  }
}
</script>

<style scoped lang="scss">
  .alert{
    width: 3.8rem;
    height: 0.16rem;
    z-index: 999999;
    line-height: 0.16rem;
    border: 1px solid transparent;
    border-radius: 4px;
    position: fixed;
    left: 50%;
    top: 0.3rem;
    transform: translateX(-50%);
    background-color: #1b998b;
    color: #fff;
    transition: opacity .3s,transform .4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    font-weight: 600;
    opacity: 0.9;
    i{
      padding-right: 10px;
    }
  }
</style>
