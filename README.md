# Readme

## Installation instructions
Have node installed (built while on node14)
```
git clone git@github.com:danjiro/koala-weather-widget.git
cd koala-weather-widget
npm install
npm start
```

### Brief
```
## Weather Widget

The purpose of this test is for us to get a sense of how you would approach designing and implementing a JavaScript/CSS/HTML weather widget. Applicants are encouraged to write code for this test as for a production grade application.

There's more than one way to skin a cat, therefore feel free to list down your assumptions as you go along (e.g. in code comments).

Although not required, you can use any js framework you like. To showcase your front-end skills as part of this test, you may want to avoid using UI libraries.

### Requirements

Based on the wireframe (weather-widget.jpg), create a “weather widget” app that:

1. Shows your location's current and future weather data.
2. Able to search a specific location weather data.
3. Has a dark / light mode.
4. Adheres to minimum AA accessibility guidelines.

Wireframes are intentionally left plain for maximum creativity! A delightful use of animations is a plus.

##### Widget

The widget should read the end user’s current location using `navigator.geolocation` (or the entered location), and retrieve the current weather conditions for that location using the [Open Weather Map API](https://openweathermap.org/api). Defaulted to the current time, users should be able to navigate between the days. (see image included)

### Deliverables

There is no strict time limit (unless agreed upon) but most people get back to us within a few days. Source code for the solution described above: share your repository, upload it as an accessible link or forward a zip file of the source code.
```

## Assumptions
  - Personally timeboxed this project to 4 hours. Ended up spending 4.5 hours
  - Weather info of 5 days forward from current day
  - No backend implementation so api key exposed on frontend and use proxy to get around cors
  - Get 5 day weather at 12:00pm same time everyday (see notes)
  - City search only AU cities
  - No icon as in wireframe, would need to find icon library or see how openweather icon works

## Notes
  - openweather api does not provide daily forecast that is searchable by coords and city for free. On call api can only do coords and doesn't return city info
  - didn't get to testing because of timebox
  - didn't get to theming
  - dark/light toggle quickly implemented because of time
  - minimal responsiveness
  - Prioritised what I thought was important for the requirement of a 'production grade' app as that would entail backend/testing coverage/proper theming/ux design/environemnts/development tools/etc and that I also wanted to timebox. A lot of time was spent trying to understand and work around the API
  - Some more notes in files

