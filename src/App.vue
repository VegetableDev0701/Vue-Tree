<template>
  <div id="app">
    <div class="title">
    </div>
    <div class="search-bar row">
      <div class="col-md-4">
        <input id="strSearch" class="form-control" v-model="strSearchMem"/>
      </div>
      <div class="col-md-2">
        <b-button class="form-control btnSearch" @click="onSearch">Search</b-button>
      </div>
    </div>
    <node-view />
  </div>
</template>
<script>
import NodeView from './components/NodeView.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    NodeView
  },
  data () {
    return {
      strSearchMem: '',
      new_name: '',
      new_intro: ''
    }
  },
  methods: {
    ...mapActions({
      ACT_getMainNode: 'ACT_getMainNode',
      ACT_getWidthNode: 'ACT_getWidthNode'
    }),
    onNewNode () {
      console.log('new Node')
    },
    onCancleNode () {
      console.log('no New')
    },
    onMainRoot () {
      this.ACT_getMainNode()
    },
    onSearch () {
      this.ACT_getWidthNode(this.strSearchMem)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: center;
  margin: 30px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.search-bar {
  padding: 10px;
  background-color: #eeeeee;
  border: 2px solid #8d8d8d;
  border-radius: 3px;
}
.btnSearch {
  background-color: #065394 !important;
}
</style>
