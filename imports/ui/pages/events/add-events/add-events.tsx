import { Input, Button, Form, DatePicker } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';

import { StyledForm } from '../../login/login-form/login-form.style';
import { EventsContent } from '../events.content';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const { RangePicker } = DatePicker;

interface AddEventsProps {
  addEventsHandler: (events: EventsContent) => void;
}

function AddEvents({ addEventsHandler }: AddEventsProps): JSX.Element {
  const [content, setEventsState] = useState<EventsContent>({
    title: '',
    description: '',
    startDate: moment().toDate(),
    endDate: moment().toDate(),
  });

  const handleEventsCreation = () => {
    addEventsHandler({
      title: content.title,
      description: content.description,
      startDate: content.startDate,
      endDate: content.endDate,
    });
    setEventsState({
      title: '',
      description: '',
      startDate: moment().toDate(),
      endDate: moment().toDate(),
    });
  };

  const handleEventsDateChange = (range: any) => {
    setEventsState({
      ...content,
      startDate: range[0].toDate(),
      endDate: range[1].toDate(),
    });
  };

  const handleEventsTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEventsState({
      ...content,
      title: event.target.value,
    });
  };

  const handleEventsDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEventsState({
      ...content,
      description: event.target.value,
    });
  };

  return (
    <StyledForm
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleEventsCreation}
    >
      <h1>Create a Event</h1>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'An event needs a Title!' }]}
      >
        <Input
          value={content.title}
          name="title"
          onChange={handleEventsTitleChange}
        />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'An event needs a Description!' }]}
      >
        <Input
          value={content.description}
          name="description"
          onChange={handleEventsDescriptionChange}
        />
      </Form.Item>

      <Form.Item
        label="Date"
        name="Date"
        rules={[{ required: true, message: 'An event needs a Date!' }]}
      >
        <RangePicker
          name="Date"
          ranges={{
            Today: [moment().startOf('day'), moment().endOf('day')],
          }}
          placeholder={['Start Time', 'End Time']}
          onChange={handleEventsDateChange}
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Create Event
        </Button>
      </Form.Item>
    </StyledForm>
  );
}

export { AddEvents };
