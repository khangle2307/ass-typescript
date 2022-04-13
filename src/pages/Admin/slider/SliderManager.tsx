import React, { useEffect } from 'react'
import { Space, Table, Button , Popconfirm, message} from 'antd';
import { Link } from 'react-router-dom';
import { SlideType } from '../../../types/slide';
import { useDispatch, useSelector } from 'react-redux';
import { getSliders , removeSlider } from '../../../features/slideSlice';

const { Column } = Table;

type Props = {}

const SliderManager = (props: Props) => {
  const slides = useSelector((state : any) => state.slider.data);
  const dispath = useDispatch();

  useEffect(() => {
     dispath(getSliders())
  },[])
  const data = slides.map((item : SlideType,index : number) => {
     return {
        index : index + 1,
        _id : item._id,
        name : item.name,
        image : item.image,
        product : item.product
     }
  })
  return (
    <div>
        <p className='text-base font-normal m-5'>Admin / Slider</p>
      <Button type='primary' className='my-3'><Link to={"add"}>Add</Link></Button>
      <Table dataSource={data} rowKey="index">
        <Column title="*" dataIndex="index" key="index" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column 
          title="Image" 
          dataIndex="image" 
          key="image" 
          render={(value,record : SlideType) => (
            <img src={`${record.image}`} width={200}/>
          )}
        />
        <Column title="ProductId" dataIndex="product" key="product" />
        <Column
          title="Action"
          key="action"
          render={(text, record: SlideType) => (
            <Space size="middle">
              <Link to={`${record._id}/edit`}>Edit</Link>
              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={() => {
                  dispath(removeSlider(record._id))
                  message.success("Deleted is success !");
                }}
                onCancel={() => {
                  message.error('Delete not success !');
                }}
                okText="Yes"
                cancelText="No"
              >
                <a href="">Delete</a>
              </Popconfirm>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}

export default SliderManager