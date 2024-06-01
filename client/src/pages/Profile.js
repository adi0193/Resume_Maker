import React,{useState} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Button, Form,Tabs, message,Spin } from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProject from '../components/ExperienceProject';
import axios from 'axios';

const { TabPane } = Tabs;


function Profile() {
const [loading,setLoading]=useState(false);
const user2=JSON.parse(localStorage.getItem("user"));

  const onFinish = async(values) => {
    setLoading(true);
      try{
       const result=  await axios.post('api/user/update'  ,{...values,  _id:user2._id})
       localStorage.setItem('user',JSON.stringify(result.data))
        setLoading(false)
        message.success('profile updated  successful')
      }catch(error){
        setLoading(false);
            message.error('profile update failed')
          }
    };
  return (
    <DefaultLayout>
    {loading && <Spin size='large' />}
     <div className='update-profile'>
     <h4><b>Update profile</b></h4>
     <hr/>

    <Form layout="vertical" onFinish={onFinish}  initialValues={user2}>
    <Tabs defaultActiveKey="1">
    <TabPane tab="Personal Info" key="1">
      <PersonalInfo/>
    </TabPane>
    <TabPane tab="Skills and Education" key="2">
      <SkillsEducation/>
    </TabPane>
    <TabPane tab="Experience and Projects" key="3">
      <ExperienceProject/>
    </TabPane>
  </Tabs>

  <Button htmlType='submit'>UPDATE</Button>
    </Form>
     </div>
        
    </DefaultLayout>
  )
}

export default Profile;
