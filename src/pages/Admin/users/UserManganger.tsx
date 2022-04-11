import React, { useEffect } from 'react'
import { Space, Table, Button , Popconfirm, message} from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserType } from '../../../types/user';
import { getUsers , removeUserById } from '../../../features/userSlice';
const { Column } = Table;

type Props = {}

const UserManganger = (props: Props) => {
  const users = useSelector((state : any) => state.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getUsers());
     
  },[dispatch])

  const data = users.map((item : UserType,index : number) => {
     return {
        index : index + 1,
        _id : item._id,
        fullName : item.fullName,
        address : item.address,
        phoneNumber : item.phoneNumber,
        email : item.email,
     }
  })
  return (
    <div>
       <Button type='primary' className='my-3'><Link to={"add"}>Add</Link></Button>
      <Table dataSource={data} rowKey="index">
        <Column title="*" dataIndex="index" key="index" />
        <Column title="FullName" dataIndex="fullName" key="fullName" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="PhoneNumber" dataIndex="phoneNumber" key="phoneNumber" />
        {/* <Column 
          title="Image" 
          dataIndex="image" 
          key="image" 
          render={(value,record : ProductType) => (
            <img src={`${record.image}`} width={100}/>
          )}
        /> */}
        <Column title="Email" dataIndex="email" key="email" />
        <Column
          title="Action"
          key="action"
          render={(text, record: UserType) => (
            <Space size="middle">
              <Link to={`${record._id}/edit`}>Edit</Link>
              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={() => {
                  dispatch(removeUserById(record._id))
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

export default UserManganger