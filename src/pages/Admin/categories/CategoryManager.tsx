import React from 'react'
import { Space, Table , Button } from 'antd';
import { CategoryType } from '../../../types/category';
type Props = {
  category : CategoryType[],
}

const CategoryManager = ({category}: Props) => {
  const columns = [
    {
       title : '*',
       dataIndex : 'index',
       key : 'index'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key : 'name'
    },
    {
      title : "Action",
      dataIndex : "action",
      key : 'action',
      render : (record : any) => (
        <Space size={'small'}>
          <a href="/categories/:id/edit">Edit</a>
          <Button type='primary'>Delete</Button>
        </Space>
      )
    }
  ];
  
  const data = category.map((item : CategoryType,index : number) => {
    return {
      index : index + 1,
      name : item.name
    }
  })
  return (
    <div>
      <Button type='primary'><a href="categories/add">Add</a></Button>
      <Table columns={columns} dataSource={data}/>
    </div>

  )
}

export default CategoryManager