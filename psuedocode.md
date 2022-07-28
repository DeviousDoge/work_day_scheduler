GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
    //moment.js
    //Done!
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
    //hardcode each timeblock 
    //use bootstrap classes to layout the grid
    //Done, but style each row better later
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    //use moment to check for the time and wether certain time are in  the past present or future
    //use javascript to add/remove classes to these timeblocks depending on wether it is past present or future
    //look into military time to use conditional logic for this
WHEN I click into a timeblock
THEN I can enter an event
    //use bootstrap text areas
    //done!
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
    //store input value keys for each timeblock 
WHEN I refresh the page
THEN the saved events persist
    //apply timeblock keys to each timeblock upon fresh reload