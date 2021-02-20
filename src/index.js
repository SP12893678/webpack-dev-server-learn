import './style.css'
import './style.scss'
import Vue from 'vue'
import App from './App.vue'

console.log('Hello World')
console.log(()=>{return 'es6'})
new Promise((resolve,reject)=>{
    console.log('promise')
})

new Vue({
  el: '#app',
  render: h => h(App)
})