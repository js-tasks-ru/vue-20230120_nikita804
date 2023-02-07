import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props:{
    organizer:{
      type: String,
      required: true,
    },
    place:{
      type: String,
      required: true,
    },
    date:{
      type: Number,
      required: false,
    },
  },

  computed: {
    formattedDate() {
      const date = new Date(this.date);
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return date.toLocaleDateString('en-EN', options);
    },

    testDate(){
      const date = new Date(this.date);
      // const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return date.toISOString().substr(0, 10);
    }
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{organizer}}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{place}}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime=testDate>{{formattedDate}}</time>
      </li>
    </ul>`,
});
