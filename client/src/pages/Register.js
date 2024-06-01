import React, { useEffect, useState } from "react";
import { Button,  Form, Input, message,Spin } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const onFinish = async(values) => {
  console.log(values);
  setLoading(true);
    try{
      await axios.post('api/user/register'  ,values)
      setLoading(false)
      message.success('Registration successful')
    }catch(error){
      setLoading(false);
      message.error('Registration failed')
    }
  };
  useEffect(()=>{
    if(localStorage.getItem('user')){
      navigate('/home')
    }
  })
  return (
    <div className="auth-parent">
   {loading && (<Spin  size="large" sustain={5000} />)}
   <h1 className="brand">Resume Builder</h1>

      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input placeholder="username" />
        </Form.Item>

        <Form.Item name="password" label="Password">
          <Input type="password"/>
        </Form.Item>

        <Form.Item name="cpassword" label="Confirm password">
          <Input type="password" />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/login">Click Here to Login</Link>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
