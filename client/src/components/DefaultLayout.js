import React from "react";
import "./../resources/DefaultLayout.css";
import { Button, Dropdown } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';

const DefaultLayout = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      label: <Link to="/home">Home</Link>,
    },
    {
      key: "2",
      label: <Link to="/profile">Profile</Link>,
    },
    {
      key: "3",
      label: (
        <MenuItem
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}
        >
           <span>Logout</span>
        </MenuItem>
      ),
    },
  ];
  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={()=>navigate('/home')} style={{cursor:'pointer'}}>Adi resume</h1>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <Button icon={<UserOutlined />}>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content" style={{overflow:"scroll"}}>{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
