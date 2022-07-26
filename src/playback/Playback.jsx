import React from 'react';
import { Button, Form, Input } from 'antd';

import './Playback.css';
import { useState } from 'react';

const Playback = (props) => {
    let [magnet, setState] = useState('');
    const link = "http://localhost:3001/watch/stream?mglink=";
    // let mgLink = '';
    // let api_url = link + mgLink;

    const onFinish = (values) => {
        console.log('Success:', values);
        // magnet = values.magnet;
        setState(values.magnet)
        // mgLink = encodeURIComponent(magnet);
        // api_url = link + mgLink;
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        // magnet = '';
        setState('');
    };


    const labelCol = {
        span: 8,
    };
    const wrapperCol = {
        span: 16,
    };
    const inputRules = [{
        required: true,
        message: 'Please input your username!',
    }]

    return (
        <div>
            <div className="videoContainer">
                {!magnet ? (
                    <div className="userForm">
                        <Form name="basic" labelCol={labelCol} wrapperCol={wrapperCol}
                            onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
                            <Form.Item label="Enter Magnet" name="magnet" rules={inputRules} >
                                <Input />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16, }} >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>)
                    :
                    ( <video controls width={600} autoPlay>
                        <source src={link + encodeURIComponent(magnet)} type="video/mp4" />
                    </video>)}
            </div>
        </div>
    )
}

export default Playback