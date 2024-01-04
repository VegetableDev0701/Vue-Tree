<template>
  <div>
    <node-component v-bind:NData="HNode" v-bind:isRoot="true"/>
    <div class="part-container">
      <div class="hoz-bar" v-bind:style="{'left' : calcLR(0) ? '0px' : '50%'}"></div>
      <div class="up-bar"></div>
      <div class="center-bar" :class="{'isRight': calcLR(1)}"></div>
      <div v-for="(n, index) in LNodes" :key="index" v-bind:style="calcNodePos(index)">
        <div class="hoz-bar" v-bind:style="{'left' : calcLR(index) ? '50%' : '0px'}" v-if="index != 0"></div>
          <node-component v-bind:NData="n"/>
        <div class="up-bar" v-if="index != 0"></div>
        <div class="center-bar" :class="{'isRight': calcLR(index)}" v-if="index != 0"></div>
      </div>
    </div>
    <div class="part-container">
      <div class="hoz-bar" v-bind:style="{'left' : calcLR(1) ? '0px' : '50%'}"></div>
      <div class="up-bar"></div>
      <div class="center-bar" :class="{'isLeft': calcLR(1)}"></div>
      <div v-for="(n, index) in RNodes" :key="index" v-bind:style="calcNodePos(index)">
        <div class="hoz-bar" v-bind:style="{'left' : calcLR(index) ? '50%' : '0px'}" v-if="index != 0"></div>
          <node-component v-bind:NData="n"/>
        <div class="up-bar" v-if="index != 0"></div>
        <div class="center-bar" :class="{'isRight': calcLR(index)}" v-if="index != 0"></div>
      </div>
    </div>
  </div>
</template>
<script>
import NodeComponent from './Node.vue'
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
  components: {
    NodeComponent
  },
  computed: mapState({
    HNode: state => state.headNode,
    LNodes: state => state.leftNodes,
    RNodes: state => state.rightNodes
  }),
  methods: {
    ...mapGetters({
      GET_NodeSystem: 'GET_NodeSystem'
    }),
    calcNodePos (index) {
      const divNum = Math.floor(Math.log2(index + 1))
      if (divNum === 0) {
        return {
          width: '100%',
          position: 'relative'
        }
      } else {
        return {
          width: (100 / (Math.pow(2, divNum))) + '%',
          float: 'left',
          position: 'relative'
        }
      }
    },
    calcLR (index) {
      const divNum = Math.floor(Math.log2(index + 1))
      if (divNum === 0) return
      if (index % 2 === 1) {
        return true
      } else {
        return false
      }
    },
    ...mapActions({
      ACT_getMainNode: 'ACT_getMainNode'
    })
  },
  async beforeMount () {
    await this.ACT_getMainNode()
  }
}
</script>
<style scoped>
.up-bar {
  width: 0px;
  border: 2px solid green;
  height: 20px;
  position: absolute;
  left: 50%;
  top: 20px;
  z-index: -1;
}

.hoz-bar {
  border: 2px solid green;
  position: absolute;
  top: 20px;
  width: calc(50%);
  z-index: -1;
}
.part-container {
  width: 50%;
  float: left;
  position: relative;
}
.center-bar {
  position: absolute;
  top: 0px;
  border: 2px solid green;
  height: 20px;
}
.isRight {
  right: 0px;
}
.isLeft {
  left: 0px;
}
</style>
