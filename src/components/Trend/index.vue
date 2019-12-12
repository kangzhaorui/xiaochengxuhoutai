<template>
  <div class="ant-pro-trend" :class="[reverseColor && 'reverse-color' ]">
    <span>
      <slot name="term"></slot>
      <span class="item-text">
        <slot></slot>
      </span>
    </span>
    <span :class="[flag]">
      <a-icon :type="`caret-${flag}`" />
    </span>
  </div>
</template>

<script>
export default {
  name: "Trend",
  props: {
    /**
     * 上升下降标识：up|down
     */
    flag: {
      type: String,
      required: true
    },
    /**
     * 颜色反转
     */
    reverseColor: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
.ant-pro-trend {
  display: inline-block;
  font-size: 14px;
  line-height: 22px;
  .up,
  .down {
    margin-left: 4px;
    position: relative;
    top: 1px;

    i {
      font-size: 12px;
      transform: scale(0.83);
    }
  }

  .item-text {
    display: inline-block;
    margin-left: 8px;
    color: rgba(0, 0, 0, 0.85);
  }

  .up {
    color: #f5222d;
  }
  .down {
    color: #52c41a;
    top: -1px;
  }

  &.reverse-color .up {
    color: #52c41a;
  }
  &.reverse-color .down {
    color: #f5222d;
  }
}
</style>
