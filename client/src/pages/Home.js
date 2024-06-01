import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import templateImg from '../resources/templates/template1.png'
import template2Img from '../resources/templates/template2.png'
import template3Img from '../resources/templates/template3.png'
import { Button } from 'antd';
import { navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  const templates=[
    {
      title:'Resume for Fresher',
      image:templateImg,
    },

    {
      title:'Highlighted section resume',
      image:template2Img,
    },
    {
      title:'colored Highlighted section resume',
      image:template3Img,
    }
  ];
  return (
    <DefaultLayout>
        <div className='row home'>
         {templates.map((template,index)=>{
          return <div className='col-md-4 '>
          <div className='template'>
          <img src={template.image} height='400' alt='' style={{width:'100%',textAlign:'center'}}/>
           <div className='text'>
           <p>{template.title}</p>
           <Button onClick={()=>navigate(`/templates/${index+1}`)}>Try</Button>
           </div>
          </div>
          </div>;
         })}
        </div>

    </DefaultLayout>
  )
}

export default Home