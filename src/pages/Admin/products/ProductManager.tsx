import { useEffect } from 'react';
import { Space, Table, Button , Popconfirm, message} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryType } from '../../../types/category';
import { Link} from 'react-router-dom';
import { getProducts } from '../../../features/productSlice';
import { ProductType } from '../../../types/product';

const { Column } = Table;
type Props = {}


const ProductManager = (props: Props) => {
  const products = useSelector((state : any) => state.product.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    console.log(products);
  },[])

  function cancel(e) {
    message.error('Delete not succes !');
  }

  function success(e) {
    message.success('Delete succes !');
  }

  const data = products.map((item,index) => {
    return {
      index : index + 1,
      _id : item._id,
      name : item.name,
      price : item.price,
      quantity : item.quantity,
      image : item.image,
      color : item.color,
      memory : item.memory
    }
  })
  return (
    <div>
      <Button type='primary'><a href="categories/add">Add</a></Button>
      <Table dataSource={data} rowKey="index">
        <Column title="*" dataIndex="index" key="index" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Price" dataIndex="price" key="price" />
        <Column title="Quantity" dataIndex="quantity" key="quantity" />
        <Column 
          title="Image" 
          dataIndex="image" 
          key="image" 
          render={(value,record : ProductType) => (
            <img src={`${record.image}`} width={100}/>
          )}
        />
        <Column title="Color" dataIndex="color" key="color" />
        <Column title="Memory" dataIndex="memory" key="memory" />
        <Column
          title="Action"
          key="action"
          render={(text, record: ProductType) => (
            <Space size="middle">
              <Link to={`${record._id}/edit`}>Edit</Link>
              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={success}
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

export default ProductManager