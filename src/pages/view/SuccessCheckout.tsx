import React from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';


type Props = {}

const SuccessCheckout = (props: Props) => {
   return (
      <Result
         status="success"
         title="Bạn đã mua hàng thành công !"
         subTitle="Mã đơn hàng: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
         extra={[
            <Link to={"/"}>
               <Button type="primary" key="console">
                  Xem đơn hàng
               </Button>
            </Link>,
            <Link to={"/"}><Button key="buy">Tiếp tục mua</Button></Link>
         ]}
      />
   )
}

export default SuccessCheckout