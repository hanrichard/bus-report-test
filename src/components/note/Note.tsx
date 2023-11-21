import React, { useState } from "react";
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

type FieldType = {
  note?: string;
};

export const Note = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [notevalue, setNoteValue] = useState('');

  const onFinish = (values: any) => {
    values && setSubmitted(values.note)
  };

  return isSubmitted ? <p>{notevalue}</p> : <>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: "100%" }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label=""
        name="note"
      >
        <TextArea
          placeholder="Enter notes here"
          onChange={(e) => setNoteValue(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={!notevalue}>
          Save Notes
      </Button>
      </Form.Item>
    </Form>
  </>
}