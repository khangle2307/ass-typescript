import React, { useEffect } from 'react'
import { Space, Table, Button , Popconfirm, message} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryType } from '../../../types/category';
import { getCategories , removeCategoryById} from './../../../features/categorySlice';
import { Link , useParams } from 'react-router-dom';

const { Column } = Table
type Props = {

}


const CategoryManager = (prop: Props) => {
  const categories = useSelector((state: any) => state.category.data);
  const distpatch = useDispatch();
 
  function cancel(e) {
    message.error('Delete not succes !');
  }
  
  useEffect(() => {
    distpatch(getCategories());
  }, [])

  const data = categories.map((item: CategoryType, index: number) => {
    return {
      index: index + 1,
      _id: item._id,
      name: item.name,
    }
  })
  return (
    <div>
      <p className='text-base font-normal m-5'>Admin / Category</p>
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
              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={() => {distpatch(removeCategoryById(record._id))}}
                onCancel={cancel}
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

export default CategoryManager