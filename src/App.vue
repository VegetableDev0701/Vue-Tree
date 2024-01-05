<template>
  <div id="app">
    <div>
      <!-- <b-button variant="danger" v-b-modal="'new-node-modal'">Append</b-button> -->
      <b-button variant="success" v-on:click="onMainRoot">Search Main Root</b-button>
      <b-modal id="new-node-modal" @ok="onNewNode" @cancel="onCancleNode">
        <b-form-input v-model="new_name" placeholder="Enter your name"></b-form-input>
        <b-form-input v-model="new_intro" placeholder="Enter your Introducer" class="mt-1"></b-form-input>
      </b-modal>
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
      new_name: '',
      new_intro: ''
    }
  },
  methods: {
    ...mapActions({
      ACT_getMainNode: 'ACT_getMainNode'
    }),
    onNewNode () {
      console.log('new Node')
    },
    onCancleNode () {
      console.log('no New')
    },
    onMainRoot () {
      this.ACT_getMainNode()
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
</style>
