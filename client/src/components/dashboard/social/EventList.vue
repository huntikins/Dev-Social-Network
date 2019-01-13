<template>
    <div class="list-feed">
        <div class="event-item" v-for="(event, index) in events" :key="index">
            <h3 class="title-wrapper">
                <i class="meetup-icon fab fa-meetup"></i> 
                <span class="event-title">{{ event.name }}</span>
            </h3>
            <div class="event-info">
                <h6 class="event-date"><i class="event-icon fas fa-calendar-alt"></i>{{ event.local_date + ' ' + event.local_time | formatDate }}</h6>
                <h6 class="event-date"><i class="event-icon fas fa-external-link-alt"></i><a class="event-link" :href="event.link" target="_blank"> More info</a></h6>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data(){
        return {
            events: [
                    {
                        "created": 1546124793000,
                        "duration": 5400000,
                        "id": "257623262",
                        "name": "Custom Dynamic Forms and Controls & Javascript / Not Javascript",
                        "status": "upcoming",
                        "time": 1547598600000,
                        "local_date": "2019-01-15",
                        "local_time": "18:30",
                        "updated": 1546987271000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 28,
                        "venue": {
                            "id": 26059148,
                            "name": "Artisan Technology Group",
                            "lat": 38.9633674621582,
                            "lon": -94.60299682617188,
                            "repinned": false,
                            "address_1": "9201 Ward Pkwy",
                            "address_2": "#200",
                            "city": "Kansas City ",
                            "country": "us",
                            "localized_country_name": "USA",
                            "zip": "64114",
                            "state": "mo"
                        },
                        "group": {
                            "created": 1508170677000,
                            "name": "AngularKC",
                            "id": 26284491,
                            "join_mode": "open",
                            "lat": 39.099998474121094,
                            "lon": -94.5999984741211,
                            "urlname": "angularkc",
                            "who": "Angulaires",
                            "localized_location": "Kansas City, MO",
                            "state": "MO",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/angularkc/events/257623262/",
                        "description": "<p>Custom Dynamic Forms and Controls:<br/>Almost all web apps require forms and fields, and some apps are almost all forms and fields. As the number and types of fields increase, these forms can become unmanageable. Configurable dynamic form libraries are a great alternative to hard coding, but they often don't cover all the needs of our apps. It could be that they are missing date-range pickers, min-max inputs, range sliders, etc. Or maybe they don't offer fine control over validation or styling.<br/>In this talk, we will see how to create our own dynamic forms and custom fields with Angular Forms Module and Material.</p> <p>Javascript / Not Javascript:<br/>If you have been using Typescript for a while you may have missed out on some of the new features in Javascript. Language features you thought were unique to Typescript may be available in Javascript as well. So just how different are these two today? Let's test your knowledge of the Javascript and Typescript by looking at code snippets and determining if it is Javascript or Not Javascript.</p> ",
                        "visibility": "public"
                    },
                    {
                        "created": 1546445968000,
                        "duration": 9000000,
                        "id": "257710568",
                        "name": " KC Unreal Dev Meetup",
                        "status": "upcoming",
                        "time": 1548806400000,
                        "local_date": "2019-01-29",
                        "local_time": "18:00",
                        "updated": 1546446027000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 10,
                        "venue": {
                            "id": 6652442,
                            "name": "Johnson County Community College",
                            "lat": 38.924461364746094,
                            "lon": -94.728515625,
                            "repinned": true,
                            "address_1": "12345 College Blvd.",
                            "city": "Overland Park",
                            "country": "us",
                            "localized_country_name": "USA",
                            "zip": "66210",
                            "state": "KS"
                        },
                        "group": {
                            "created": 1520452707000,
                            "name": "Kansas City Unreal Engine Developers UG",
                            "id": 27757173,
                            "join_mode": "open",
                            "lat": 39.150001525878906,
                            "lon": -94.61000061035156,
                            "urlname": "Kansas-City-Unreal-Engine-Developers-UG",
                            "who": "Members",
                            "localized_location": "Kansas City, KS",
                            "state": "KS",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/Kansas-City-Unreal-Engine-Developers-UG/events/257710568/",
                        "description": "<p>Come join other Unreal Developers as we kick off a new year and discuss tools, resources, and our plans for a 6-part series on creating an Unreal project from start to finish.</p> <p>Meetup Information:<br/>Come meet other local Unreal Engine/Game Developers, discuss the latest tech and ideas in game development, showcase your own game dev work, engage in round-table discussions, and network with other professionals.</p> <p>The KC Unreal Devs User Group will be meeting at the Johnson County Community College CoLab. The CoLab is located on the ground floor of the Office and Classroom Building.</p> <p>Exact location: <a href=\"https://goo.gl/maps/ZkSmkNcbv9o\" class=\"linkified\">https://goo.gl/maps/ZkSmkNcbv9o</a></p> <p>The easiest parking location is to the North West of the Office and Classroom Building (OCB). Here's a .PDF map of the CoLab and parking locations: <a href=\"https://goo.gl/ucwUh8\" class=\"linkified\">https://goo.gl/ucwUh8</a></p> <p>Also, be sure to follow the KC Unreal Game Devs User Group on Twitter (@KCUnrealDevs) and join our Discord channel ( <a href=\"https://discord.gg/Dnk9YvZ\" class=\"linkified\">https://discord.gg/Dnk9YvZ</a> ) for on-going discussions, tips-and-tricks, and other industry news happening in the world of Game Dev.</p> ",
                        "how_to_find_us": "We're meeting in the CoLab located in the Office and Classroom Building",
                        "visibility": "public",
                        "pro_is_email_shared": false
                    },
                    {
                        "created": 1542046354000,
                        "id": "nknvlqyzcbdc",
                        "name": "KC Video Game Developers Regular Meetup",
                        "status": "upcoming",
                        "time": 1548205200000,
                        "local_date": "2019-01-22",
                        "local_time": "19:00",
                        "updated": 1542046354000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 3,
                        "venue": {
                            "id": 25990673,
                            "name": "Denny's Restaurant",
                            "lat": 39.0952262878418,
                            "lon": -94.58892822265625,
                            "repinned": true,
                            "address_1": "1600 Broadway Blvd",
                            "city": "Kansas City",
                            "country": "US",
                            "localized_country_name": "USA"
                        },
                        "group": {
                            "created": 1321414558000,
                            "name": "KC Video Game Developers",
                            "id": 2820512,
                            "join_mode": "open",
                            "lat": 39.08000183105469,
                            "lon": -94.58000183105469,
                            "urlname": "KC-Video-Game-Developers",
                            "who": "Game Devs",
                            "localized_location": "Kansas City, MO",
                            "state": "MO",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/KC-Video-Game-Developers/events/nknvlqyzcbdc/",
                        "description": "<p>Open to anyone in the area who is interested in developing video games. In order to have a little structure, we'll try to do a couple things each week:</p> <p>Introduce new members. What have you worked on, game related or not? What do you want to work on next?</p> <p>Discuss this week's conversation starter. Some article, video or game that we can dig into a little.</p> <p>Members can present any games they're working on, for feedback or just to brag.</p> <p>Of course, it's all very informal. The main goal is interesting conversation(s) about our passion.</p> <p>Looking forward to it!</p> ",
                        "visibility": "public"
                    },
                    {
                        "created": 1546621707000,
                        "duration": 7200000,
                        "id": "257783734",
                        "name": "The Front-end and Back-end Explained",
                        "rsvp_limit": 25,
                        "status": "upcoming",
                        "time": 1548894600000,
                        "local_date": "2019-01-30",
                        "local_time": "18:30",
                        "updated": 1546975164000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 9,
                        "venue": {
                            "id": 26058234,
                            "name": "Built Interior Construction",
                            "lat": 39.09046936035156,
                            "lon": -94.5798568725586,
                            "repinned": true,
                            "address_1": "1833 McGee St",
                            "city": "Kansas City",
                            "country": "us",
                            "localized_country_name": "USA",
                            "zip": "64108",
                            "state": "MO"
                        },
                        "group": {
                            "created": 1546118361000,
                            "name": "Tech, Managed",
                            "id": 30796406,
                            "join_mode": "open",
                            "lat": 39.08000183105469,
                            "lon": -94.58000183105469,
                            "urlname": "techmanaged",
                            "who": "Members",
                            "localized_location": "Kansas City, MO",
                            "state": "MO",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/techmanaged/events/257783734/",
                        "description": "<p>For our first meeting, we're going to start with the basics by explaining the separation of Front-end and Back-end for web and mobile development:</p> <p>* What separates the Front-end and the Back-end?<br/>* How does a typical application fit in these schemes?<br/>* What kinds of folks do you need to hire for work on both sides?<br/>* Where do things blur between them?</p> <p>We like meetups that respect everyone's time, so we aim to follow this schedule:</p> <p>* 6:30pm - Doors Open/Networking<br/>* 7:00pm - Presentation &amp; Questions<br/>* 8:00pm - Follow-up/Networking<br/>* 8:30pm - Doors Close</p> <p>Our meeting will be hosted at Built Interior:</p> <p>* 1833 McGee St, Kansas City, MO, 64108<br/>* Cross-streets: E 19th St and McGee St<br/>* Parking: Free Lot (rear) and Street (front) is available<br/>* KC Street Car stop nearby at Main &amp; 19th</p> <p>If you have specific questions or topics for this event, please send your inquiries to:</p> <p>Megan Schemmel at [masked]</p> ",
                        "how_to_find_us": "E 19th St and McGee St, Corner Entrance, Free Parking Lot (rear) and Street Parking (front) is available, KC Street Car stop nearby at Main & 19th",
                        "visibility": "public"
                    },
                    {
                        "created": 1523415557000,
                        "duration": 5400000,
                        "id": "rnlcppyzcbdc",
                        "name": "Open Web App Security Project - Kansas City Chapter Monthly Meeting",
                        "rsvp_limit": 40,
                        "status": "upcoming",
                        "time": 1548203400000,
                        "local_date": "2019-01-22",
                        "local_time": "18:30",
                        "updated": 1523415557000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 4,
                        "venue": {
                            "id": 23751621,
                            "name": "Kauffman Foundation Conference Center",
                            "lat": 39.039878845214844,
                            "lon": -94.57929992675781,
                            "repinned": false,
                            "address_1": "4801 Rockhill Road",
                            "city": "Kansas City",
                            "country": "us",
                            "localized_country_name": "USA",
                            "zip": "",
                            "state": "MO"
                        },
                        "group": {
                            "created": 1523374158000,
                            "name": "OWASP Kansas City",
                            "id": 28113059,
                            "join_mode": "open",
                            "lat": 39.099998474121094,
                            "lon": -94.5999984741211,
                            "urlname": "OWASP-Kansas-City",
                            "who": "Members",
                            "localized_location": "Kansas City, MO",
                            "state": "MO",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/OWASP-Kansas-City/events/rnlcppyzcbdc/",
                        "description": "<p>Meetings of the Kansas City chapter of the Open Web Application Security Project are held at 6:30pm on the fourth Tuesday of each month, usually at the Kauffman Foundation Conference Center at 4801 Rockhill Rd, Kansas City, MO. Attendance is open to everyone - membership is not required (though we invite you to join the global OWASP organization and list our chapter as your home chapter)! RSVPs are not required - we don't track membership - but it's definitely helpful for planning!</p> <p>Watch this space for more specific meeting details closer to the meeting date!</p> ",
                        "how_to_find_us": "Brookside Room",
                        "visibility": "public",
                        "pro_is_email_shared": false
                    },
                    {
                        "created": 1547221917000,
                        "duration": 5400000,
                        "id": "257989923",
                        "name": "Operation Code and Open Source",
                        "status": "upcoming",
                        "time": 1548718200000,
                        "local_date": "2019-01-28",
                        "local_time": "17:30",
                        "updated": 1547221981000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 1,
                        "venue": {
                            "id": 12276102,
                            "name": "YRC Worldwide Inc",
                            "lat": 38.930538177490234,
                            "lon": -94.6397705078125,
                            "repinned": true,
                            "address_1": "10990 Roe Avenue",
                            "city": "Overland Park",
                            "country": "us",
                            "localized_country_name": "USA",
                            "zip": "66211",
                            "state": "KS"
                        },
                        "group": {
                            "created": 1542588647000,
                            "name": "Operation Code: Kansas City",
                            "id": 30553628,
                            "join_mode": "open",
                            "lat": 39.099998474121094,
                            "lon": -94.5999984741211,
                            "urlname": "Operation-Code-Kansas-City",
                            "who": "Members",
                            "localized_location": "Kansas City, MO",
                            "state": "MO",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/Operation-Code-Kansas-City/events/257989923/",
                        "description": "<p>Operation Code has several Open Source code projects. Let's get together to talk about how we can jump in and contribute, mentor, and learn using Open Source projects. There are many Open Source projects out there beyond Operation Code as well. This meetup will give you a chance to learn more about Operation Code, our mission, and Open Source projects. EVERYONE is invited. You don't need to be a developer (beginner or otherwise) to contribute to Open Source projects. You don't need to be a developer to help mentor, coach or be involved.</p> <p>How to get to YRC:</p> <p>Traveling Westbound on 435:<br/>* Take the Roe exit and turn left. Once over the 435 bridge, take the first right into the YRC parking lot.</p> <p>Traveling Eastbound on 435:<br/>* After you pass the Metcalf Ave exit, make sure you are in the second rightmost lane (not the outermost lane) and take the Roe/Nall turn off. The outermost right lane will exit to Nall while the left lane of the turn off will continue on to Roe Ave. When you get to Roe, turn right and make the first right into the YRC parking lot.<br/>* If you accidentally exit at Nall, you can turn right on Nall and then turn left at the first stoplight which is 110th Street. Stay on 110th until you reach Roe Ave and turn left and then you can take the first left into the YRC parking lot.</p> <p>Traveling Northbound on Roe:<br/>* Stay in the left lane until you pass 110th Street and take the first left into the YRC parking lot.</p> <p>Traveling Southbound on Roe:<br/>* Stay in the right lane until you cross over 435 and take the first right into the YRC parking lot.</p> ",
                        "visibility": "public",
                        "pro_is_email_shared": false
                    },
                    {
                        "created": 1513698270000,
                        "duration": 7200000,
                        "id": "bmwtcpyzcbzb",
                        "name": "Coffee Shop Hangout",
                        "status": "upcoming",
                        "time": 1547929800000,
                        "local_date": "2019-01-19",
                        "local_time": "14:30",
                        "updated": 1545022513000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 5,
                        "venue": {
                            "id": 668678,
                            "name": "Black Dog Coffee House",
                            "lat": 38.970943450927734,
                            "lon": -94.7343978881836,
                            "repinned": false,
                            "address_1": "12815 W 87th St",
                            "city": "Lenexa",
                            "country": "us",
                            "localized_country_name": "USA",
                            "phone": "913-894-4024",
                            "zip": "66215",
                            "state": "KS"
                        },
                        "group": {
                            "created": 1338326491000,
                            "name": "Kansas City's PHP User Group",
                            "id": 3964682,
                            "join_mode": "open",
                            "lat": 39.08000183105469,
                            "lon": -94.58000183105469,
                            "urlname": "kcphpug",
                            "who": "PHP Developers",
                            "localized_location": "Kansas City, MO",
                            "state": "MO",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/kcphpug/events/bmwtcpyzcbzb/",
                        "description": "<p>Saturday Meeting Format</p> <p>Our Saturday meetings are free-formed. Attendees bring up topics that interest them or that they want feedback on. Attendees are welcome to participate or just kick back and soak in the discussions. There are also no dumb questions! If you're just starting out this is a great opportunity to ask questions.</p> <p>The meeting structure usually follows this format:</p> <p>* Introductions / meet and greet new members<br/>* Open group discussion on any development topic, concern or question; discussing any new happenings that interest the group<br/>* Get help setting up your development environment, looking at code, quick demos, etc. (time permitting)</p> <p>All levels welcome!</p> <p>Maybe you have been using using PHP for a week or even a decade--we all have things to learn and share. If you enjoy working with PHP, or want to learn more about it this meeting is for you.</p> <p>Get Involved</p> <p>If you're looking for a presentation-focused event with talks and demos, check out our weeknight meetups. We would also love to have you present! Please contact an organizer through Meetup or talk after a meeting to tell us more about your topic.</p> ",
                        "how_to_find_us": "Hopefully the big room in back--look for the group with laptops",
                        "visibility": "public"
                    },
                    {
                        "created": 1546886651000,
                        "duration": 7200000,
                        "id": "257870893",
                        "name": "Presentation Meetup - TBA",
                        "status": "upcoming",
                        "time": 1549497600000,
                        "local_date": "2019-02-06",
                        "local_time": "18:00",
                        "updated": 1546886651000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 3,
                        "venue": {
                            "id": 23717656,
                            "name": "Stowers Institute",
                            "lat": 39.03627014160156,
                            "lon": -94.57493591308594,
                            "repinned": true,
                            "address_1": "1000 E 50th St",
                            "city": "Kansas City",
                            "country": "US",
                            "localized_country_name": "USA"
                        },
                        "group": {
                            "created": 1338326491000,
                            "name": "Kansas City's PHP User Group",
                            "id": 3964682,
                            "join_mode": "open",
                            "lat": 39.08000183105469,
                            "lon": -94.58000183105469,
                            "urlname": "kcphpug",
                            "who": "PHP Developers",
                            "localized_location": "Kansas City, MO",
                            "state": "MO",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/kcphpug/events/257870893/",
                        "description": "<p>Please join us for an evening of looking at the exciting past month of PHP news and learning about interesting concepts and projects in PHP and software development.</p> <p>Light refreshments will be provided. Join us to meet new people, discuss PHP, and learn something new.</p> <p>Our Evening Meeting Format</p> <p>We love Web Development and all things PHP. Our meetings are often a little free-formed, but we shoot for this schedule:</p> <p>6:00pm - Mingling / Meet and Greet</p> <p>6:15pm - Lightning Talk: Last Month in PHP</p> <p>6:30pm - TBA</p> <p>Your topic here? Contact us to speak (<a href=\"http://www.meetup.com/kcphpug/suggestion/\" class=\"linkified\">http://www.meetup.com/kcphpug/suggestion/</a>)!</p> <p>Rate the talks!</p> <p>All Developers Welcome!</p> <p>We understand Web Developers often come from all backgrounds, and many work in more languages than PHP. Whether you're curious and just starting out, dabble in PHP on the weekends, write custom PHP on a daily basis, work in a framework like Symfony, Zend Framework, Silex, Slim, Laravel, CakePHP or customize CMS products like WordPress, Drupal or Joomla; our goal is that you will find something new, useful and thought provoking.</p> <p>Interested in giving a presentation to the group, or demoing something you're working on? Contact one of the organizers through Meetup or talk after a monthly meeting to sign up!</p> ",
                        "how_to_find_us": "Park in the garage and enter the main building to the west of the garage. Follow the signs and turn right at the security desk.",
                        "visibility": "public"
                    },
                    {
                        "created": 1546886682000,
                        "duration": 7200000,
                        "id": "257870901",
                        "name": "Presentation Meetup - TBA",
                        "status": "upcoming",
                        "time": 1551916800000,
                        "local_date": "2019-03-06",
                        "local_time": "18:00",
                        "updated": 1546886682000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 3,
                        "venue": {
                            "id": 23717656,
                            "name": "Stowers Institute",
                            "lat": 39.03627014160156,
                            "lon": -94.57493591308594,
                            "repinned": true,
                            "address_1": "1000 E 50th St",
                            "city": "Kansas City",
                            "country": "US",
                            "localized_country_name": "USA"
                        },
                        "group": {
                            "created": 1338326491000,
                            "name": "Kansas City's PHP User Group",
                            "id": 3964682,
                            "join_mode": "open",
                            "lat": 39.08000183105469,
                            "lon": -94.58000183105469,
                            "urlname": "kcphpug",
                            "who": "PHP Developers",
                            "localized_location": "Kansas City, MO",
                            "state": "MO",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/kcphpug/events/257870901/",
                        "description": "<p>Please join us for an evening of looking at the exciting past month of PHP news and learning about interesting concepts and projects in PHP and software development.</p> <p>Light refreshments will be provided. Join us to meet new people, discuss PHP, and learn something new.</p> <p>Our Evening Meeting Format</p> <p>We love Web Development and all things PHP. Our meetings are often a little free-formed, but we shoot for this schedule:</p> <p>6:00pm - Mingling / Meet and Greet</p> <p>6:15pm - Lightning Talk: Last Month in PHP</p> <p>6:30pm - TBA</p> <p>Your topic here? Contact us to speak (<a href=\"http://www.meetup.com/kcphpug/suggestion/\" class=\"linkified\">http://www.meetup.com/kcphpug/suggestion/</a>)!</p> <p>Rate the talks!</p> <p>All Developers Welcome!</p> <p>We understand Web Developers often come from all backgrounds, and many work in more languages than PHP. Whether you're curious and just starting out, dabble in PHP on the weekends, write custom PHP on a daily basis, work in a framework like Symfony, Zend Framework, Silex, Slim, Laravel, CakePHP or customize CMS products like WordPress, Drupal or Joomla; our goal is that you will find something new, useful and thought provoking.</p> <p>Interested in giving a presentation to the group, or demoing something you're working on? Contact one of the organizers through Meetup or talk after a monthly meeting to sign up!</p> ",
                        "how_to_find_us": "Park in the garage and enter the main building to the west of the garage. Follow the signs and turn right at the security desk.",
                        "visibility": "public"
                    },
                    {
                        "created": 1547204451000,
                        "duration": 5400000,
                        "id": "vzqspqyzcbbc",
                        "name": "Weekend Coffee for Startup People",
                        "rsvp_limit": 20,
                        "status": "upcoming",
                        "time": 1548007200000,
                        "local_date": "2019-01-20",
                        "local_time": "12:00",
                        "updated": 1547204477000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 1,
                        "venue": {
                            "id": 26069224,
                            "name": "Starbucks",
                            "lat": 39.10005187988281,
                            "lon": -94.58343505859375,
                            "repinned": true,
                            "address_1": "1100 Main St Suite 119",
                            "city": "Kansas City",
                            "country": "us",
                            "localized_country_name": "USA",
                            "zip": "64105",
                            "state": "MO"
                        },
                        "group": {
                            "created": 1530622732000,
                            "name": "StartupBlink Kansas City",
                            "id": 29085609,
                            "join_mode": "open",
                            "lat": 39.099998474121094,
                            "lon": -94.5999984741211,
                            "urlname": "StartupBlink-Kansas-City",
                            "who": "StartupBlinkers",
                            "localized_location": "Kansas City, MO",
                            "state": "MO",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/StartupBlink-Kansas-City/events/vzqspqyzcbbc/",
                        "description": "<p>Any plans for the weekend?</p> <p>This event brings together a small group of local entrepreneurs over a cup of coffee, in a relaxing and informal atmosphere. It's your chance to make new connections, share advice, and brainstorm new ideas with the people that are trying to build a new project or start a freelancing career.</p> <p>This event is self-organized for the local startup community. If you arrive first at the cafe, just pick a table and post in the group comments below where you are sitting and how to identify you (e.g. shirt color).</p> <p>Are you interested in leading this event on a weekly basis? Send us a quick email to [masked] to get more details.</p> <p>Enjoy your coffee with new friends!</p> <p>_ _ _</p> <p>Do you Telegram?<br/>Join the conversation in our global startup chat and connect with entrepreneurs from all over the world. <a href=\"https://t.me/workjams\" class=\"linkified\">https://t.me/workjams</a></p> <p>_ _ _</p> <p>Looking for more networking opportunities?<br/>Join a coworking space to increase your work efficiency and meet your new clients, team members, and investors. Our partners at WeWork have an exclusive offer for you in over 280 locations around the world.<br/>Schedule a free tour and apply through this link, to get up to 15% discount.<br/><a href=\"https://wework.startupblink.com\" class=\"linkified\">https://wework.startupblink.com</a></p> ",
                        "how_to_find_us": "Know a better location for this meetup? Just send us a message, and we'll change it for you!",
                        "visibility": "public"
                    },
                    {
                        "created": 1459800669000,
                        "id": "xnlfslyzcbwb",
                        "name": "Code & Coffee",
                        "status": "upcoming",
                        "time": 1547730900000,
                        "local_date": "2019-01-17",
                        "local_time": "07:15",
                        "updated": 1459800669000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 7,
                        "venue": {
                            "id": 7863672,
                            "name": "Opera House Coffee & Food Emporium",
                            "lat": 39.108543395996094,
                            "lon": -94.58162689208984,
                            "repinned": false,
                            "address_1": "500 Walnut Street",
                            "city": "Kansas City",
                            "country": "us",
                            "localized_country_name": "USA",
                            "zip": "64106",
                            "state": "MO"
                        },
                        "group": {
                            "created": 1459523982000,
                            "name": "Kansas City CodeAnd Meetup",
                            "id": 19785666,
                            "join_mode": "open",
                            "lat": 39.209999084472656,
                            "lon": -94.62999725341797,
                            "urlname": "Kansas-City-CodeAnd-Meetup",
                            "who": "Developers",
                            "localized_location": "Kansas City, MO",
                            "state": "MO",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/Kansas-City-CodeAnd-Meetup/events/xnlfslyzcbwb/",
                        "description": "<p>Join us for a pre-work meetup to have some coffee, get your day started, and hang out with some fellow developers.</p> ",
                        "how_to_find_us": "http://codeand.us/",
                        "visibility": "public"
                    },
                    {
                        "created": 1459800669000,
                        "id": "xnlfslyzdbcc",
                        "name": "Code & Coffee",
                        "status": "upcoming",
                        "time": 1550754900000,
                        "local_date": "2019-02-21",
                        "local_time": "07:15",
                        "updated": 1459800669000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 3,
                        "venue": {
                            "id": 7863672,
                            "name": "Opera House Coffee & Food Emporium",
                            "lat": 39.108543395996094,
                            "lon": -94.58162689208984,
                            "repinned": false,
                            "address_1": "500 Walnut Street",
                            "city": "Kansas City",
                            "country": "us",
                            "localized_country_name": "USA",
                            "zip": "64106",
                            "state": "MO"
                        },
                        "group": {
                            "created": 1459523982000,
                            "name": "Kansas City CodeAnd Meetup",
                            "id": 19785666,
                            "join_mode": "open",
                            "lat": 39.209999084472656,
                            "lon": -94.62999725341797,
                            "urlname": "Kansas-City-CodeAnd-Meetup",
                            "who": "Developers",
                            "localized_location": "Kansas City, MO",
                            "state": "MO",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/Kansas-City-CodeAnd-Meetup/events/xnlfslyzdbcc/",
                        "description": "<p>Join us for a pre-work meetup to have some coffee, get your day started, and hang out with some fellow developers.</p> ",
                        "how_to_find_us": "http://codeand.us/",
                        "visibility": "public"
                    },
                    {
                        "created": 1544828488000,
                        "duration": 7200000,
                        "id": "257226344",
                        "name": "FlipSwitchVR - Multiplayer Free-Roam VR Gaming in Downtown KC",
                        "status": "upcoming",
                        "time": 1548459000000,
                        "local_date": "2019-01-25",
                        "local_time": "17:30",
                        "updated": 1544828488000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 23,
                        "group": {
                            "created": 1418415159000,
                            "name": "KCVR",
                            "id": 18249383,
                            "join_mode": "open",
                            "lat": 38.95000076293945,
                            "lon": -94.73999786376953,
                            "urlname": "KC-VR1",
                            "who": "ARgonauts",
                            "localized_location": "Lenexa, KS",
                            "state": "KS",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/KC-VR1/events/257226344/",
                        "description": "<p>Join us for the next KCVR meetup at FlipSwitchVR in downtown KC! FlipSwitchVR is the first free-roam, multiplayer VR location in the Kansas City area. Bring your friends and check out some VR games with up to 6 players in an over 4,000 square foot VR arena. The FlipSwitchVR team will join us to talk about their location that recently opened in December 2018, chat about their custom-developed game \"Skeleton Crew,\" and talk about their plans for the future.</p> <p>If you are interested in learning more about VR and local development, this will be a really great event to check out! Bring friends and family and join us for an exciting evening that is guaranteed to offer an entirely unique VR experience.</p> <p>For more information, check them out at <a href=\"https://www.flipswitchvr.com/\" class=\"linkified\">https://www.flipswitchvr.com/</a><br/><a href=\"https://twitter.com/flipswitchvr\" class=\"linkified\">https://twitter.com/flipswitchvr</a><br/><a href=\"https://www.facebook.com/flipswitchvr/\" class=\"linkified\">https://www.facebook.com/flipswitchvr/</a></p> <p>Food will be provided. We hope to see you there!</p> <p>The KCVR Team</p> ",
                        "visibility": "public"
                    },
                    {
                        "created": 1538151748000,
                        "duration": 7200000,
                        "id": "prsbhqyzcbgc",
                        "name": "AgileKC Monthly Meet-up - DIFFERENT DATE AND TIME",
                        "rsvp_limit": 50,
                        "status": "upcoming",
                        "time": 1547767800000,
                        "local_date": "2019-01-17",
                        "local_time": "17:30",
                        "updated": 1546893577000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 11,
                        "venue": {
                            "id": 26053658,
                            "name": "VeriShip",
                            "lat": 38.96770095825195,
                            "lon": -94.60555267333984,
                            "repinned": false,
                            "address_1": "8880 Ward Pkwy #300",
                            "city": "Kansas City",
                            "country": "us",
                            "localized_country_name": "USA",
                            "zip": "64114",
                            "state": "MO"
                        },
                        "group": {
                            "created": 1508604994000,
                            "name": "Agile KC",
                            "id": 26338437,
                            "join_mode": "open",
                            "lat": 38.95000076293945,
                            "lon": -94.73999786376953,
                            "urlname": "Agile-KC",
                            "who": "Members",
                            "localized_location": "Lenexa, KS",
                            "state": "KS",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/Agile-KC/events/prsbhqyzcbgc/",
                        "description": "<p>REGISTER HERE ------&gt; <a href=\"https://www.eventbrite.com/e/noestimates-game-tickets-54326958395?utm-medium=discovery&amp;utm-campaign=social&amp;utm-content=attendeeshare&amp;aff=escb&amp;utm-source=cp&amp;utm-term=listing\" class=\"linkified\">https://www.eventbrite.com/e/noestimates-game-tickets-54326958395?utm-medium=discovery&amp;utm-campaign=social&amp;utm-content=attendeeshare&amp;aff=escb&amp;utm-source=cp&amp;utm-term=listing</a></p> <p>It's BACK! The popular #NoEstimates Game Workshop quickly filled to capacity during the Lean Agile KC conference. Luckily, Matt Philip is traveling back to KC to run the game again for us! For more information, please see Matt's blog at <a href=\"https://mattphilip.wordpress.com/noestimates-game/\" class=\"linkified\">https://mattphilip.wordpress.com/noestimates-game/</a> and his bio at <a href=\"https://mattphilip.wordpress.com/about/\" class=\"linkified\">https://mattphilip.wordpress.com/about/</a>. 5:30 - 5:50 - Networking 5:50 - 6:00 - Agilehood announcements (Agile KC, Coaching Dojo, Agile Game Night, Lean Agile KC) 6:00 - 8:00 - Game Play Parking Instructions: Please feel free to park anywhere in the attached parking garage. The public entrance to the garage is on Ward Parkway. Bottled water and tap beer provided. If you'd like to bring your own beverage (adult or otherwise), please do so! Please RSVP so we can plan food and game setup! SPECIAL THANKS: Location sponsored by: VeriShip Game sponsored by: Lean Agile KC Conference, Kanflow, and Blueshift Innovation.</p> ",
                        "visibility": "public"
                    },
                    {
                        "created": 1530536493000,
                        "duration": 9000000,
                        "id": "252360069",
                        "name": "Cassandra, Java, and Multi-Cloud: Let’s just do ALL THE THINGS!",
                        "status": "upcoming",
                        "time": 1547681400000,
                        "local_date": "2019-01-16",
                        "local_time": "17:30",
                        "updated": 1544829229000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 32,
                        "venue": {
                            "id": 24349951,
                            "name": "YRC Worldwide",
                            "lat": 38.93052673339844,
                            "lon": -94.6407241821289,
                            "repinned": true,
                            "address_1": "10990 Roe Ave.",
                            "city": "Overland Park",
                            "country": "us",
                            "localized_country_name": "USA",
                            "zip": "",
                            "state": "KS"
                        },
                        "group": {
                            "created": 1498591393000,
                            "name": "Kansas City Java Users Group",
                            "id": 24708999,
                            "join_mode": "open",
                            "lat": 38.9900016784668,
                            "lon": -94.68000030517578,
                            "urlname": "KansasCityJUG",
                            "who": "Java Enthusiasts",
                            "localized_location": "Overland Park, KS",
                            "state": "KS",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/KansasCityJUG/events/252360069/",
                        "description": "<p>Abstract<br/>So, you have an amazing Java application supported by the awesome distributed database Apache Cassandra providing a powerful application for your users. Sure, your on-prem deployment was working great... but then you went viral! Now you have decided to leverage the power of the cloud to burst your database in a hybrid-cloud fashion. You also decide to go full multi-cloud because who wants to be locked into a single vendor? How does one go about doing this? David Gilardi will demonstrate live how to expand an Apache Cassandra cluster into multiple cloud vendors using the KillrVideo Java reference application (<a href=\"https://killrvideo.github.io\" class=\"linkified\">https://killrvideo.github.io</a>). Now you’re ready to go viral and SCALE!</p> <p>Bio<br/>David Gilardi (@SonicDMG) is a Developer Advocate at DataStax who is a total nerd for distributed databases. He has over 20 years of relevant experience in programming, database administration, cloud, server/network monitoring, and analytics. Before his time at DataStax he was Senior Development Manager at Hobsons, an education services company, responsible for a flagship SaaS CRM product deployed on hybrid cloud using a combination of relational and NoSQL database technologies.</p> ",
                        "visibility": "public"
                    },
                    {
                        "created": 1538619698000,
                        "duration": 7200000,
                        "id": "255250790",
                        "name": "Vault, Credhub and OSB",
                        "rsvp_limit": 75,
                        "status": "upcoming",
                        "time": 1547508600000,
                        "local_date": "2019-01-14",
                        "local_time": "17:30",
                        "updated": 1547076665000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 30,
                        "venue": {
                            "id": 25078606,
                            "name": "Burns & McDonnell",
                            "lat": 38.95810317993164,
                            "lon": -94.59725952148438,
                            "repinned": true,
                            "address_1": "9450 Ward Parkway",
                            "city": "Kansas City",
                            "country": "us",
                            "localized_country_name": "USA",
                            "zip": "",
                            "state": "MO"
                        },
                        "group": {
                            "created": 1405959049000,
                            "name": "Kansas City Cloud Foundry PaaS:Platform as a Service Meetup",
                            "id": 15871002,
                            "join_mode": "open",
                            "lat": 38.959999084472656,
                            "lon": -94.68000030517578,
                            "urlname": "KansasCity-Cloud-Foundry-PaaS-Meetup",
                            "who": "Members",
                            "localized_location": "Overland Park, KS",
                            "state": "KS",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/KansasCity-Cloud-Foundry-PaaS-Meetup/events/255250790/",
                        "description": "<p>5:30-6:15 Waldos Pizza catering sponsored by Pivotal / Networking</p> <p>6:15 Announcements</p> <p>6:30 Presentation by Jonathan &amp; Anand</p> <p>Vault, Credhub and OSB<br/>Garmin’s journey to providing credentials to cloud native applications.</p> <p>Our goal was secure, robust, and automated application credential storage and distribution.</p> <p>Agenda<br/>*The problem we wanted to solve<br/>*v1 design, implementation, successes and failures<br/>*v2 Design leveraging CredHub<br/>Service Broker Architecture<br/>Local Development<br/>Broker Credentials (Which came first? The chicken or the egg? )<br/>*Credential Lifecycle &amp; Management</p> <p>Jonathan is a System Architect with Garmin International.  He is a thought leader when it comes to developing applications that run in Pivotal Cloud Foundry.  He is passionate about CI/CD pipelines and automation.  Making sure that we \"automate all the things\" is one of his ongoing goals.</p> <p>Jonathan has over 19 years of development and architecture experience. Jonathan's history includes IT experience in manufacturing and digital marketing firms as well as various flavors of Sprint IT. Jonathan grew up and attended college in Canada but made a remarkable recovery to became a successful member of the Kansas City IT community. If you kick him in the shins he'll probably say \"Sorry.\"</p> <p>Anand is shy. He also works for Garmin.</p> ",
                        "visibility": "public"
                    },
                    {
                        "created": 1546985037000,
                        "duration": 7200000,
                        "id": "257907233",
                        "name": "The .NET Cloud-Native Renaissance - Richard Seroter",
                        "status": "upcoming",
                        "time": 1548201600000,
                        "local_date": "2019-01-22",
                        "local_time": "18:00",
                        "updated": 1546985037000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 31,
                        "venue": {
                            "id": 24196243,
                            "name": "VinSolutions",
                            "lat": 39.02508544921875,
                            "lon": -94.6659927368164,
                            "repinned": false,
                            "address_1": "5700 Broadmoor Street",
                            "city": "Mission",
                            "country": "us",
                            "localized_country_name": "USA",
                            "zip": "",
                            "state": "KS"
                        },
                        "group": {
                            "created": 1329853268000,
                            "name": "KC .NET User Group",
                            "id": 3337952,
                            "join_mode": "open",
                            "lat": 38.95000076293945,
                            "lon": -94.62999725341797,
                            "urlname": "KC-NET-User-Group",
                            "who": "Coders",
                            "localized_location": "Leawood, KS",
                            "state": "KS",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/KC-NET-User-Group/events/257907233/",
                        "description": "<p>The .NET Cloud-Native Renaissance</p> <p>The .NET renaissance is underway. .NET devs like you now have access to a growing community of open source projects that support resilient cloud-native web applications. At this meetup, we'll explore what to do with your existing .NET apps, discuss the new libraries you should care about, and review all the (new) ways to run .NET apps. Oh, and we'll probably have a demo or two.</p> <p>Richard Seroter (<a href=\"https://twitter.com/rseroter\" class=\"linkified\">https://twitter.com/rseroter</a>)<br/>Richard is Senior Director of Product at Pivotal, an 11-time Microsoft MVP, and author of the new book \"Modernizing .NET Applications\".</p> <p>See Sharper:<br/>TBA</p> <p>Sponsor:<br/>TBA</p> ",
                        "how_to_find_us": "9th floor, through the glass doors and around the reception desk to the break room and training rooms.",
                        "visibility": "public"
                    },
                    {
                        "created": 1539899843000,
                        "duration": 7200000,
                        "id": "pttnkqyzdbcc",
                        "name": "Lean Coffee (@VinSolutions)",
                        "status": "upcoming",
                        "time": 1550770200000,
                        "local_date": "2019-02-21",
                        "local_time": "11:30",
                        "updated": 1542083354000,
                        "utc_offset": -21600000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 4,
                        "venue": {
                            "id": 24196243,
                            "name": "VinSolutions",
                            "lat": 39.02508544921875,
                            "lon": -94.6659927368164,
                            "repinned": true,
                            "address_1": "5700 Broadmoor Street",
                            "city": "Mission",
                            "country": "us",
                            "localized_country_name": "USA",
                            "zip": "",
                            "state": "KS"
                        },
                        "group": {
                            "created": 1345223388000,
                            "name": "LAKC Lean Coffee",
                            "id": 4572762,
                            "join_mode": "open",
                            "lat": 38.97999954223633,
                            "lon": -94.87000274658203,
                            "urlname": "LAKCLeanCoffee",
                            "who": "Lean-Agile Heads",
                            "localized_location": "Lenexa, KS",
                            "state": "KS",
                            "country": "us",
                            "region": "en_US",
                            "timezone": "US/Central"
                        },
                        "link": "https://www.meetup.com/LAKCLeanCoffee/events/pttnkqyzdbcc/",
                        "description": "<p>You’re invited to join us for lunch and great conversation on the top Lean-Agile topics of the day.</p> <p>Format: Lean Coffee topical format<br/>Where: VinSolutions, 5700 Broadmoor St #900, Mission, KS 66202</p> <p>This is a BYOL (bring your own lunch) event.</p> <p>Parking is available in the areas marked in green. Areas in red could result in a towed car. Vin's meeting space is located on the 9th floor.</p> <p><img src=\"http://photos1.meetupstatic.com/photos/event/4/f/f/5/600_452060469.jpeg\" /></p> ",
                        "visibility": "public",
                        "pro_is_email_shared": false
                    }
                ]
            
        }
    },
    filters: {
        formatDate(value){
            return moment(value, "YYYY-MM-DD HH:mm").format("LLLL")
        },
        caps(value){
            return value.toUpperCase()
        }
    }
}
</script>

<style>
.list-feed::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
    background-color: #f39121;
}
.list-feed::-webkit-scrollbar {
	width: 15px;
	background-color: #f39121;
}
.list-feed::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: rgb(61,192,236);
}
.list-feed {
    background-color: rgba(61,192,236, 0);
    padding: 0px 0px 50% 10px;
    border-radius: 25px 0 0 25px;
    height: 100%;
    overflow: scroll;
}
.event-item {
    margin: 10px;
    padding: 10px 0 10px 10px;
    border-radius: 25px 0 0 25px;
    border: 3px solid rgb(61,192,236);
    background-color: rgba(61,192,236, 0.6); 
}
.event-date {
    clear: both;
    text-align: left;
    font-family: roboto, sans-serif;
    margin-right: 10px;
    font-size: .75em;
    color: white;
    margin-top: 10px;
}
.event-link {
    text-align: left;
    font-family: roboto, sans-serif;
    margin-right: 10px;
    color: white;
    margin-top: 10px;
    text-decoration: none;
}
.event-link:hover{
    color: rgb(61,192,236);
}
.title-wrapper {
    padding-left: 5px;
}
.event-title {
    vertical-align: top;
    color:  white;
    font-family: alternate-gothic-no-1-d, sans-serif;
    font-size: 1.25em;
}
.event-icon {
    color: white;
    font-size: 1em;
    padding-right: 4px;
}
.meetup-icon {
    color:  white;;
    font-size: 3em;
    float: left;
    padding: 0 10px 10px 0;
}
.event-info {
    clear: both;
    padding: 5px 0 5px 15px;
    background-color: rgba(133,149,149, 0.7);
    border-radius: 25px 0 0 25px;
    border: 2px solid rgb(61,192,236);
    border-right: none;
}
</style>
