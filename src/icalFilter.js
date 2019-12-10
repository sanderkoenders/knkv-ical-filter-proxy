const filterVEvents = (vEvents, word) => vEvents.filter((vEvent) => !vEvent.SUMMARY.includes(word));

const filterVCalendarEvents = (vCalendarJson, excludeWords) => {
  const newVCalendar = { ...vCalendarJson };

  excludeWords.forEach((word) => {
    newVCalendar.VEVENT = filterVEvents(newVCalendar.VEVENT, word);
  });

  console.log(newVCalendar.VEVENT);

  return newVCalendar;
};

module.exports = (icalJson, excludeWords) => {
  const newIcalJson = { ...icalJson };

  newIcalJson.VCALENDAR[0] = filterVCalendarEvents(icalJson.VCALENDAR[0], excludeWords);

  return icalJson;
};
