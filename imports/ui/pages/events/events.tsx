import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Spin } from 'antd';

import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import { EventsLayout, EventsHeader } from './events.styles';
import { IEventsCollection } from '../../../api/db/events/events.collection';
import { AddEvents } from './add-events/add-events';

interface EventsProps {
  isLoading: boolean;
  events: IEventsCollection[];
  addEvents: (content: EventsContent) => any;
}

interface EventsContent {
  _id?: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  publisher?: Meteor.User;
  organizer?: string;
}
const localizer = momentLocalizer(moment);

//const allViews = Object.keys(Views).map((k) => Views[k]);

function Events({ isLoading, events, addEvents }: EventsProps): JSX.Element {
  if (isLoading) {
    <Spin />;
  }

  return (
    <EventsLayout>
      <EventsHeader>Events Calendar</EventsHeader>
      <Calendar
        selectable
        views={{
          day: true,
          week: true,
          month: true,
        }}
        localizer={localizer}
        events={events}
        startAccessor="startDate"
        endAccessor="endDate"
        onSelectEvent={(event: any) => alert(event.description)}
        style={{ height: 500 }}
      />
      <AddEvents addEventsHandler={addEvents} />
    </EventsLayout>
  );
}
export { Events };
