import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from './MeetupView.js';
import { fetchMeetupById } from './../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props:{
    meetupId:{
      type: Number,

    }
  },

  data(){
    return {
        meetupData: {},
        loading: true,
        meetupError: '',
    }
},

watch:{
  meetupId: {
    immediate: true,
    deep: true,
    handler(){
      this.loading = true;
      this.meetupError = '';
      fetchMeetupById(this.meetupId)
        .then((meetupData) => {
          this.meetupData = meetupData;
          this.loading = false;
        })
        .catch((error) => {
          // this.loading = false;
          this.meetupError = error;
        });
    }
  },
 
},  

  template: `
    <div class="page-meetup">
      <MeetupView 
      :meetup="meetupData"
      v-if="!loading"
      />
      <UiContainer>
        <UiAlert 
        v-if="loading && !meetupError">
        Загрузка...
        </UiAlert>
      </UiContainer>

      <UiContainer>
        <UiAlert 
        v-if="meetupError">
        {{ meetupError }}
        </UiAlert>
      </UiContainer>
    </div>`,
});
