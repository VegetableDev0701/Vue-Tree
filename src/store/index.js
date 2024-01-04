import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import MockFunction from '@/mock'

MockFunction(axios)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headNode: {},
    leftNodes: [],
    rightNodes: []
  },
  getters: {
    GET_NodeSystem (state) {
      return state.nodes
    }
  },
  mutations: {
    MUT_addNewNode (state, nodeInfo) {
      state.nodes.push(nodeInfo)
    },
    MUT_setNode (state, info) {
      state.headNode.code = info.code
      state.headNode.name = info.name
      state.headNode.registration_date = info.registration_date
      state.headNode.introducer_code = info.introducer_code
      state.leftNodes = info.l
      state.rightNodes = info.r
      console.log(state)
    }
  },
  actions: {
    ACT_addNewNode (context, nodeInfo) {
      context.commit('MUT_addNewNode', nodeInfo)
    },
    ACT_getMainNode (context) {
      return axios.get('/api/policyholders')
        .then((res) => {
          context.commit('MUT_setNode', res.data)
        })
    }
  },
  modules: {
  }
})
