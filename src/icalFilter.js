module.exports = (icalJson, excludeWords) => {
  icalJson.VCALENDAR[0] = filterVCalendarEvents(icalJson.VCALENDAR[0], excludeWords);

  return icalJson;
}

const filterVCalendarEvents = (vCalendarJson, excludeWords) => {
  excludeWords.forEach(word => {
    vCalendarJson.VEVENT = filterVEvents(vCalendarJson.VEVENT, word);
  });

  return vCalendarJson;
}

const filterVEvents = (vEvents, word) => {
  return vEvents.filter(vEvent => !vEvent.SUMMARY.includes(word));
} 