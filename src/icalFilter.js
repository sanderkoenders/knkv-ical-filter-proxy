const filterVEvents = (vEvents, word) => vEvents.filter((vEvent) => !vEvent.SUMMARY.includes(word));

const filterVCalendarEvents = (vCalendarJson, excludeWords) => {
  const newVCalendar = { ...vCalendarJson };

  newVCalendar.VEVENT = [];

  excludeWords.forEach((word) => {
    newVCalendar.VEVENT.push(filterVEvents(vCalendarJson.VEVENT, word));
  });

  return newVCalendar;
};

module.exports = (icalJson, excludeWords) => {
  const newIcalJson = { ...icalJson };

  newIcalJson.VCALENDAR[0] = filterVCalendarEvents(icalJson.VCALENDAR[0], excludeWords);

  return icalJson;
};
