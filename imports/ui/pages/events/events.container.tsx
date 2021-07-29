import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

import {
  EventsCollection,
  IEventsCollection,
} from '/imports/api/db/events/events.collection';
import { EventsContent } from './events.content';
import { Events } from './events';

function EventsContainer(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { events, isLoading } = useTracker(() => {
    const eventsHandler = Meteor.subscribe('getEvents');

    if (!eventsHandler.ready()) {
      return { isLoading: true, events: [] };
    }

    const events: IEventsCollection[] = EventsCollection.find().fetch();

    return { isLoading: false, events };
  });

  const addEvents = (content: EventsContent) => {
    Meteor.call('createEvents', {
      content: {
        title: content.title,
        description: content.description,
        allDay: true,
        startDate: content.startDate,
        endDate: content.endDate,
        organizer: content.organizer,
      },
      publisher: Meteor.user(),
    });
  };

  return React.createElement(Events, {
    isLoading,
    events,
    addEvents,
  });
}

export { EventsContainer };
