<template>
  <div class="root-Container">
    <div class="node-container margin-top-40 node-center" :class="{'sub-container': rootCode == NData.introducer_code, 'main-container': isRoot}">
      <span :class="{'root-code': isRoot}" v-on:click="onNodeClick(NData.code)">{{ NData.code }}</span> <br/>
      <span>{{ NData.name }}</span>
    </div>
    <div v-if="isRoot" class="up-arrow" v-on:click="onGetParent(rootCode)">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
      </svg>
    </div>
  </div>
</template>
<script>
import cons from '../constant'
import utils from '../utils'
import { mapActions } from 'vuex'
export default {
  name: 'NodeComponent',
  props: {
    NData: {
      code: {
        type: String,
        default: '00001'
      },
      name: {
        type: String,
        default: 'test1'
      },
      registration_date: {
        type: Date,
        default: new Date()
      },
      introducer_code: {
        type: String,
        default: '00001'
      }
    },
    rootCode: {
      type: String,
      default: '00001'
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      MAIN: cons.NODE_MAIN
    }
  },
  computed: {
    podNum: function () {
      return utils.pad(this.NData.idx, 10)
    }
  },
  methods: {
    ...mapActions({
      ACT_getWidthNode: 'ACT_getWidthNode'
    }),
    onNodeClick (code) {
      this.ACT_getWidthNode(code)
    },
    onGetParent (parentCode) {
      this.ACT_getWidthNode(parentCode)
    }
  }
}
</script>
<style scoped>
.node-container {
  background-color: #e6e6e6;
  padding: 10px;
  text-align: left;
  border: 3px solid #231e00;
  border-radius: 10px;
  width: 120px;
  height: 70px;
}
.node-container span:first-child {
  color: #63959e;
  text-decoration: underline;
  cursor: pointer;
}

.node-center {
  margin: 0 auto;
}

.sub-container {
  background-color: #8fd04e;
}

.main-container {
  background-color: #fef445;
}

.margin-top-40 {
  margin-top: 40px;
}

.up-arrow {
  display: none;
  position: absolute;
  left: calc(50% + 70px);
  top: 20px;
}
.root-Container {
  position: relative;
}
.root-Container:hover div.up-arrow{
  display: block;
}
.root-code {
  color: #001702;
  text-decoration:none !important;
  cursor: pointer;
}
</style>
