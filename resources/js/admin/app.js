import Vue from 'vue'
import App from './App.vue'
import './components'


Vue.config.productionTip = false

new Vue({

    //
    //
    // data:{
    //     dataRows: [
    //         {
    //             name: 'Jim',
    //             age: 35,
    //         },
    //         {
    //             name: 'Jill',
    //             age: 45,
    //         },
    //         {
    //             name: 'John',
    //             age: 55,
    //         },
    //     ],
    // },
    render: h => h(App),
}).$mount('#app')
