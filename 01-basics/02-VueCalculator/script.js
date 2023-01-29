import {createApp, defineComponent} from './vendor/vue.esm-browser.js'

const App = defineComponent({

    name:'App',

    data(){
        return {
            inputs: {
                input1: 0,
                input2: 0,
            },
            result: 0,
            operation: '',
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

    watch:{

        inputs: {
            immediate: true,
            deep: true,
            handler(){
                this.result = this.calculate()
            }
        },

        operation: {
            immediate: true,
            deep: true,
            handler(){
                this.result = this.calculate()
            }
        },

    },

});

const app = createApp(App);
const vm = app.mount('#app');

