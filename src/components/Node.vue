<template>
  <div>
    <div class="node-container text-center margin-top-40 node-center" :class="{'blue-container': rootCode == NData.introducer_code, 'main-container': isRoot}">
      <p>{{ NData.code }}</p>
      <span>{{ NData.name }}</span>
    </div>
  </div>
</template>
<script>
import cons from '../constant'
import utils from '../utils'
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
      type: Number,
      default: 1
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
  }
}
</script>
<style scoped>
.node-container {
  border: 1px solid black;
  border-radius: 5%;
  width: 120px;
  height: 80px;
}

.node-center {
  margin: 0 auto;
}

.blue-container {
  border: 1px solid green;
  background-color: green;
}

.main-container {
  background-color: yellow;
}

.margin-top-40 {
  margin-top: 40px;
}
</style>
