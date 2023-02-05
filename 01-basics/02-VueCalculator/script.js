import {createApp, defineComponent} from './vendor/vue.esm-browser.js'

const App = defineComponent({

    name:'App',

    data(){
        return {
            inputs: {
                input1: 0,
                input2: 0,
            },
            operation: '',
        }
    },

    computed:{
        result(){
            return this.calculate()
        }
    },

    methods:{
        calculate(){
            if (this.operation === 'sum'){
                return this.inputs.input1 + this.inputs.input2
            } else if (this.operation === 'subtract'){
                return (this.inputs.input1 - this.inputs.input2)
            } else if (this.operation === 'multiply'){
                return (this.inputs.input1 * this.inputs.input2)
            } else if (this.operation === 'divide'){
                return (this.inputs.input1 / this.inputs.input2)
            }
        }
    },

});

const app = createApp(App);
const vm = app.mount('#app');

