import React, { useEffect } from 'react'
import { Space, Table, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryType } from '../../../types/category';
import { getCategories } from './../../../features/categorySlice';
import { Link, useParams } from 'react-router-dom';

const { Column, ColumnGroup } = Table
type Props = {

}

const CategoryManager = (prop: Props) => {
  const distpatch = useDispatch();
  const categories = useSelector((state: any) => state.category.data);
  
  useEffect(() => {
    distpatch(getCategories());
  }, [])

  const data = categories.map((item: CategoryType, index: number) => {
    return {
      index: index + 1,
      _id : item._id,
      name: item.name,
    }
  })
  return (
    <div>
      <Button type='primary'><a href="categories/add">Add</a></Button>
      <Table dataSource={data} rowKey="index">
        <Column title="*" dataIndex="index" key="index" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column
          title="Action"
          key="action"
          render={(text, record: CategoryType) => (
            <Space size="middle">
              <Link to={`${record._id}/edit`}>Edit</Link>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    </div>

  )
}

export default CategoryManager