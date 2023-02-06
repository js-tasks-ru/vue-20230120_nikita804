import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './../meetupService';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props:{
    'agenda-item':{
      type: Object,
      required: true,
    },
  },

  computed:{
    icon(){
      return "/assets/icons/icon-" + agendaItemIcons[this.agendaItem.type] + ".svg" 
    },

    title(){
      return this.agendaItem.title ? this.agendaItem.title : agendaItemDefaultTitles[this.agendaItem.type];
    },

    isTalkType(){
      return (this.agendaItem.type !== 'talk') 
      ? 'display: none;'
      : '';
    },

    isDiscption(){
      return this.agendaItem.description 
      ? '' 
      : 'display: none;';
    },
    
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src=icon class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{title}}</h3>
        <p 
        class="agenda-item__talk"
        :style="isTalkType"
        >
          <span>{{agendaItem.speaker}}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{agendaItem.language}}</span>
        </p>
        <p
        :style="isDiscption"
        >
        {{agendaItem.description}}
        </p>
      </div>
    </div>`,
});
