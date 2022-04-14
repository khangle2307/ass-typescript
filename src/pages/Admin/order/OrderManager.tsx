import React from 'react'
import { Space, Table, Button , Popconfirm, message} from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

type Props = {}
const { Column } = Table;

const OrderManager = (props: Props) => {
  const orders = useSelector((state : any) => state.order.data);
  const data = orders.map((item : any,index : number) => {
     return {
        index : index + 1,
        _id : item._id,
        itemList : item.itemList,
        totalPrice : item.totalPrice,
        totalQuantity : item.totalQuantity,
        paymentMethod : item.paymentMethod
     }
  })
  return (
    <div>
       <Button type='primary' className='my-3'><Link to={"add"}>Add</Link></Button>
      <Table dataSource={data} rowKey="index">
        <Column title="*" dataIndex="index" key="index" />
        <Column title="Danh sách sản phẩm" dataIndex="itemList" key="itemList" />
        <Column title="Tổng giá" dataIndex="totalPrice" key="totalPrice" />
        <Column title="Tổng số lượng" dataIndex="totalQuantity" key="totalQuantity" />
        {/* <Column 
          title="Image" 
          dataIndex="image" 
          key="image" 
          render={(value,record : any) => (
            <img src={`${record.image}`} width={100}/>
          )}
        /> */}
        <Column title="Phương thức thanh toán" dataIndex="paymentMethod" key="paymentMethod" />
        <Column
          title="Action"
          key="action"
          render={(text, record: any) => (
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

export default OrderManager