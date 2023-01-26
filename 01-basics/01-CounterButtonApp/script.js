// import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

// import { template } from 'lodash'
import {createApp, defineComponent} from './vendor/vue.esm-browser.js'

// const button = document.querySelector('button')

const App = defineComponent({

    name:'App',

    data(){
        return {
            hello: 'world',
            counter: 0,
        }
    },

});

const app = createApp(App);
const vm = app.mount('#app');

window.vm = vm;


