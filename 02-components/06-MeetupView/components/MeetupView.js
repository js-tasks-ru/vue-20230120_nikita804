import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription';
import MeetupInfo from './MeetupInfo.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupAgenda,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  computed: {
    description() {
      return this.meetup.description;
    },
    isAgenda(){
      return this.meetup.agenda ? 'display: none' : '';
    },
  },

  template: `
    <div>
      <MeetupCover :title="meetup.title" :image="meetup.image" />      
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description="description" />
            <h3>Программа</h3>
            <MeetupAgenda :agenda="meetup.agenda" />
            <UiAlert 
            :style="isAgenda"
            >Программа пока пуста...</UiAlert>
          </div>
          <div class="meetup__aside">
          <MeetupInfo
          :organizer="meetup.organizer"
          :place="meetup.place"
          :date="meetup.date"
          />          
          </div>
        </div>
      </UiContainer>
    </div>`,
});
