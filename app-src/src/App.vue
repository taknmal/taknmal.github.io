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
  <article class="container">
    <header class="header">
        <span class="heading">Íslenskt Táknmál</span>
        <div class="sign-search all-signs">
            <input type="search" name="" id="search-input" placeholder="Search for a sign"  v-model="this.searchInput" @change="handleSearchInput" @input="handleSearchInput" />
        </div>
        <!-- <input type="search" class="sign-search" v-model="this.searchInput" @change="handleSearchInput" @input="handleSearchInput"/> -->
    </header>
    <div id="signs">
        <Sign :sign="sign" v-for="sign in signs">
            {{ sign }}
        </Sign>
    </div>

    <footer class="footer">
        <nav>
            <a class="nav-item" href="/"><span class="material-symbols-outlined">home</span><span class="nav-text">Heim</span></a>
            <a class="nav-item" href="/allsigns"><span class="material-symbols-outlined">sign_language</span><span class="nav-text">Öll tákn</span></a>
            <a class="nav-item" href="/collections"><span class="material-symbols-outlined">list</span><span class="nav-text">Táknasöfn</span></a>
            <a class="nav-item" href="/settings"><span class="material-symbols-outlined">account_box</span><span class="nav-text">Stillingar</span></a>
        </nav>
    </footer>

  </article>
</template>

<style scoped>
</style>
