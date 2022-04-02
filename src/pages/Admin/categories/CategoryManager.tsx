import React, { useEffect } from 'react'
import { Space, Table , Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryType } from '../../../types/category';
import { getCategories } from './../../../features/categorySlice';

type Props = {
  
}

const CategoryManager = (prop: Props) => {
  const categories = useSelector((state : any) => state.category.data);
  const distpatch = useDispatch();  

  useEffect(() => {
    distpatch(getCategories());    
  },[])
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
  
  const data = categories.map((item : CategoryType,index : number) => {
    return {
      index : index + 1,
      name : item.name
    }
  })
  return (
    <div>
      <Button type='primary'><a href="categories/add">Add</a></Button>
      <Table columns={columns} dataSource={data} rowKey="index"/>
    </div>

  )
}

export default CategoryManager