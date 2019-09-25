import React from 'react';
import './App.css';
import Image from './components/Image';
import WithGrayScale from './components/withGrayScale';

const ScaleImage1= WithGrayScale(Image,0);
const ScaleImage2= WithGrayScale(Image);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScaleImage1 src="http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-6_044127357.jpg"></ScaleImage1>
        <ScaleImage2 src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/hinh-anh-thien-nhien-phong-canh-dep-nhat-585x390.jpg"></ScaleImage2>
      </header>
    </div>
  );
}

export default App;


// Context: Trong ứng dụng React của bạn, bạn nhận được 1 yêu cầu từ khách hàng: 
//họ muốn một số bức ảnh trong trang web có hiệu ứng "grayscale" (ảnh đen trắng)
// Tạo và sử dụng 1 HOC (Higher-Order Component) tên `withGrayScale`
// Cách sử dụng: withGrayScale(Component, options) trong đó options là một 
//object không bắt buộc phải có. Nếu có thì nó chứa 1 thuộc tính là value, có giá trị từ 0 đến 1, mặc định là 1.
// Khi `value` có giá trị là 1, bức ảnh đổi màu thành ảnh đen trắng hoàn toàn. Khi `value` là 0, 
//bức ảnh hiển thị nguyên gốc. 
//Khi `value` là một giá trị số nào đó nằm giữa 0 và 1, bức ảnh sẽ bị grayscale 1 phần.
// Gợi ý: Tham khảo thuộc tính `filter` trong CSS. 