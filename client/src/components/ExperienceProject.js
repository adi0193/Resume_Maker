import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';

function ExperienceProject() {
  return (
    <div>

    <h5><b>Experience</b></h5>
    <hr />
    <Form.List name="experience">
    {(fields, { add, remove }) => (
      <>
      <div className='row'>
      {fields.map(({ key, name, ...restField }) => (
       <>
       <div className='col-md-3'>
       <Form.Item
       {...restField}
       name={[name, 'company']}
       rules={[
         {
           required: true,
           message: 'Missing company name',
         },
       ]}
     >
       <Input placeholder="Company" />
     </Form.Item>
       </div>
       <div className='col-md-2'>
       <Form.Item
       {...restField}
       name={[name, 'years']}
       rules={[
         {
           required: true,
           message: 'Missing years',
         },
       ]}
     >
       <Input placeholder="Years" />
     </Form.Item>
       </div>
       <div className='col-md-3'>
       <Form.Item
       {...restField}
       name={[name, 'place']}
       rules={[
         {
           required: true,
           message: 'Missing place name',
         },
       ]}
     >
       <Input placeholder="Place" />
     </Form.Item>
       </div>
       <div className='col-md-2'>
       <Form.Item
       {...restField}
       name={[name, 'range']}
       rules={[
         {
           required: true,
           message: 'Missing  range',
         },
       ]}
     >
       <Input placeholder="Year-range" />
     </Form.Item>
       </div>
         <div className='col-md-2'>
         <MinusCircleOutlined style={{fontSize:25,color:'tomato'}} onClick={() => remove(name)} />
         </div>
        </>
      ))}
      </div>
        <Form.Item>
          <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
            Add Experience
          </Button>
        </Form.Item>
      </>
    )}
  </Form.List>
  <h5><b>Projects</b></h5>
  <hr />

  <Form.List name="projects">
  {(fields, { add, remove }) => (
    <>
    <div className='row'>
    {fields.map(({ key, name, ...restField }) => (
     <>
     <div className='col-md-3'>
     <Form.Item
     {...restField}
     name={[name, 'title']}
     rules={[
       {
         required: true,
         message: 'Missing Project title',
       },
     ]}
   >
     <Input placeholder="Title" />
   </Form.Item>
     </div>
     <div className='col-md-5'>
     <Form.Item
     {...restField}
     name={[name, 'description']}
     rules={[
       {
         required: true,
         message: 'Missing project description',
       },
     ]}
   >
     <TextArea placeholder="Description" />
   </Form.Item>
     </div>

     <div className='col-md-2'>
       <Form.Item
       {...restField}
       name={[name, 'range']}
       rules={[
         {
           required: true,
           message: 'Missing  range',
         },
       ]}
     >
       <input placeholder="Year-range" />
     </Form.Item>
       </div>
     
       <div className='col-md-2'>
       <MinusCircleOutlined style={{fontSize:25,color:'tomato'}} onClick={() => remove(name)} />
       </div>
      </>
    ))}
    </div>
      <Form.Item>
        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
          Add Projects
        </Button>
      </Form.Item>
    </>
  )}
</Form.List>
    </div>
  )
}

export default ExperienceProject
