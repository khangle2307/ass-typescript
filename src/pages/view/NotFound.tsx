import React from 'react'
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
type Props = {}

const NotFound = (props: Props) => {
  return (
    <div>
      <Result 
       status="404"
       title="404"
       subTitle="Sorry, the page you visited does not exist."
       extra={<Button type="primary"><Link to={"/"}>Trở về trang chủ</Link></Button>}
      />
    </div>
  )
}

export default NotFound