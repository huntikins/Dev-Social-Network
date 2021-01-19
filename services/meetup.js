/* * * * * * * * * * * *
IMPORTANT NOTE:
  MeetUp may no longer be offering access via api key.
  They have switched to OAuth.
  I have not been able to determine whether the API can still be used without a paid account.
* * * * * * * * * * * * */

const axios = require('axios');
const zipcodes = require('zipcodes');

const MEETUP_KEY = process.env.Meetup_Api_Key;

const getEvents = (zip, callback) => {

  const location = zipcodes.lookup(zip);

  if (location) {
    const { latitude, longitude } = location;
    axios.get(`https://api.meetup.com/find/upcoming_events?key=${MEETUP_KEY}&lat=${latitude}&lon=${longitude}&sign=true&photo-host=public&topic_category=292&page=20`)
      .then(res => {
        let events = [];
        res.data.events.forEach(event => {
          events.push({
            id:  event.id,
            name: event.name,
            link: event.link,
            local_date: event.local_date,
            local_time: event.local_time,
            city: event.venue ? event.venue.city : undefined,
            state: event.venue ? event.venue.state : undefined,
            groupName: event.group ? event.group.name : undefined
          });
        });
        callback(events);
      })
      .catch(err => {
        console.error(new Error('Bad MeetUp API response.'));
        console.log('  L==>', err && err.response && err.response.data);
        callback(null, ({ message: 'MeetUp API is unavailable.', status: 503 }));
      });
  }
  else callback(null, ({ message: 'Location not found.' }));
};

module.exports = { getEvents };
