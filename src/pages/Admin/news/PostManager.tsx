import React, { useEffect } from 'react'
import { Space, Table, Button , Popconfirm, message} from 'antd';
import { ProductType } from '../../../types/product';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../features/postSlice';
import { PostType } from '../../../types/post';

const { Column } = Table;
type Props = {}


const PostManager = (props: Props) => {
  const posts = useSelector((state : any) => state.post.data);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getPosts());
     console.log(posts);
     
  },[])

  const data = posts.map((item : PostType,index) => {
     return {
        index : index + 1,
        _id : item._id,
        title : item.title,
        content : item.content,
        author : item.author,
        createdAt : item.createdAt,
        updatedAt : item.updatedAt
     }
  })

  return (
    <div>
       <Button type='primary' className='my-3'><Link to={"add"}>Add</Link></Button>
      <Table dataSource={data} rowKey="index">
        <Column title="*" dataIndex="index" key="index" />
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="Content" dataIndex="content" key="content" />
        <Column title="Author" dataIndex="author" key="author" />
        <Column title="CreateAt" dataIndex="createdAt" key="createdAt" />
        <Column title="UpdateAt" dataIndex="updatedAt" key="updatedAt" />
        {/* <Column 
          title="Image" 
          dataIndex="image" 
          key="image" 
          render={(value,record : ProductType) => (
            <img src={`${record.image}`} width={100}/>
          )}
        /> */}
        <Column
          title="Action"
          key="action"
          render={(text, record: PostType) => (
            <Space size="middle">
              <Link to={`${record._id}/edit`}>Edit</Link>
              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={() => {
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

export default PostManager