import {createApp, defineComponent} from './vendor/vue.esm-browser.js'

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const App = defineComponent({

    name:'App',

    data(){
        return {
            inputValue: 1,
            meetupData: '',
            meetupTitle: 'MEETUP_TITLE',
        }
    },

    watch:{
      inputValue: {
        immediate: true,
        deep: true,
        handler(){
          fetchMeetupById(this.inputValue)
            .then((meetupData) => {
              this.meetupData = meetupData;
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
     
    }

});

const app = createApp(App);
const vm = app.mount('#app');
