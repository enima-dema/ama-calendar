# AMA-Calendar

This project has as a goal to demonstrate my Angular skills. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
(Don't forget to do a nom install before running the project).

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## What it can do

- You can select a user, and display its events in a calendar
- You can add a new event to a user's calendar
- You can edit an event from a user's calendar
- You can remove an event from a user's calendar
- You have a choice for the calendar's view: the month view, the week view, the day view
- You can select the date to display in the calendar's view through a date picker
- Some unit tests are there, but they are very simple. 
- The translation is setup

Data manipulation is done using ngrx. 

## What it cannot do

- The validation of the event form is very scarce (for instance you can create an event with an end date before its start date)
- No validation between users
- Some basic UX stuffs are missing (as a confirmation for the event deletion)
- No e2e test

