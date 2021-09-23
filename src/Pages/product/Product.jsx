import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../Component/chart/chart";
import { productData } from "../../DummyData/DummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
      
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://zaplox.com/wp-content/uploads/2018/06/two-mobiles.jpg-1.png" alt="" className="productInfoImg" />
                  <span className="productName">Mobile Phone</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">PName:</span>
                      <span className="productInfoValue">Air SHoes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">SKU:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Stock:</span>
                      <span className="productInfoValue">5</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Scategory:</span>
                      <span className="productInfoValue">Shoes</span>
                  </div>
                  
                  
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Mobile Phone" />
                  <label>Sku</label>
                  <input type="text" placeholder="Mobile Phone" />
                  <label>Stock</label>
                  <input type="text" placeholder="Mobile Phone" />
                  <label>Sub Category</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Shoes</option>
                      <option value="no">Box</option>
                  </select>

                 
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://zaplox.com/wp-content/uploads/2018/06/two-mobiles.jpg-1.png" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
