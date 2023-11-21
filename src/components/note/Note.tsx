import React, { useState } from "react";
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

export const Note = ({ organisation }: { organisation: string }) => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [notevalue, setNoteValue] = useState('');

  const onFinish = (values: any) => {
    values && setSubmitted(true)
  };

  return isSubmitted ? <p><b>Comment:</b> {notevalue}</p> : <>
    <Form
      name={organisation + "note"}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: "100%" }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label=""
        name={organisation + "note"}
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