import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props:{
    count:{
      type: Number,
      default: 0,
    },
  },

  emits: ['update:count'],

  methods:{
    increment(value){
      this.$emit('update:count', value + 1);
    } ,
  },



  template: `<button 
  type="button"
  @click="increment(count)"
  >{{count}}</button>`,
});
