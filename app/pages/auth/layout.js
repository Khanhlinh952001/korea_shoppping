// /layouts/AuthLayout.js

import React from 'react';
import Head from 'next/head'; // Import Head để có thể thêm title và các meta tags

const AuthLayout = ({ children }) => {
  return (
    <div>
      <main>{children}</main> {/* Hiển thị nội dung của trang con */}
     
    </div>
  );
};

export default AuthLayout;
