<script>
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
import Sign from './Sign.vue'
async function printSigns(){
    let signs = await window.promiseWorker.postMessage({type:'exec',command:'select * from sign limit 500'})
    console.log(signs)
}

export default {
    data(){
        return {
            signs: [],
            searchInput: ''
        }
    },
    components: {
        Sign
    },
  setup() {
    const count = ref(0)
    // expose to template and other options API hooks
    return {
      count
    }
  },
  methods: {
    async printSigns(){
        console.log('printsigns')
        console.log(window.promiseWorker)
        window.promiseWorker.postMessage({type:'exec',command:'select * from sign limit 500'}).then(signs => {
            this.signs = signs
        })
        // console.log(signs)
        // if(!true){
        //     setTimeout(this.printSigns,150)
        //     return
        // }
    },
    handleSearchInput(){
        let searchValue = this.searchInput || ''
        window.promiseWorker.postMessage({type:'searchValue',searchValue:searchValue}).then(signs => {
            this.signs = signs
        })
        console.log(this.searchInput)
    }
},
async mounted() {
    console.log(this.count) // 0
    console.log('this.count')
    setTimeout(this.printSigns,1000)
    // this.printSigns()
}
}
</script>

<template>
  <div class="container">
    <div class="header">
        <input class="sign-search" v-model="this.searchInput" @change="handleSearchInput" @input="handleSearchInput"/>
    </div>
    <div id="signs">
        <Sign :sign="sign" v-for="sign in signs">
            {{ sign }}
        </Sign>
    </div>

    <div class="footer">
        <nav>
            <a>lol</a>
            <a>lol</a>
            <a>lol</a>
        </nav>
    </div>

  </div>
</template>

<style scoped>
</style>
