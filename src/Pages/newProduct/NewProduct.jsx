import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Name</label>
          <input className="inputborder" type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Name(Ar)</label>
          <input className="inputborder" type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Product options</label>
          <select >
          <option value="Options">Options</option>
          </select>
        </div>
        <div className="addProductItem">
        <label>Category</label>
          <select >
          <option value="Category">Category</option>
          </select>
        </div>
        <div className="addProductItem">
        <label>sub Category 1</label>
          <select >
          <option value="sub Category">sub Category</option>
          </select>
           </div>
        <div className="addProductItem">
        <label>sub Category 2</label>
          <select >
          <option value="sub Category">sub Category</option>
          </select>
        </div>
        <div className="addProductItem">
        <label>Brand Name</label>
          <select >
          <option value="Brand Name">Brand Name</option>
          </select>
        </div>

        <div className="discoundOptions">
          <div className="discountPrice">
          <label className="DiscoundCardLabels">Discound Price Optionsl</label>
            <input className="discoundInput" type="text" placeholder="Type.." />

          </div>
          <div className="ShortDataTime">
          <label className="DiscoundCardLabels">Short Data Time</label>
          <div className="InputsPicker">
          <input className="Picker"  type="date"  />        
          <input className="Picker" type="Time" />
          </div>
          </div>
          <div className="ShortDataTime">
          <label className="DiscoundCardLabels">Experation Data-Time</label>
          <div className="InputsPicker">
          <input className="Picker"  type="date"  />        
          <input className="Picker" type="Time" />
          </div>
          </div>
          <div className="Comission">
          <label className="DiscoundCardLabels">Comission OPtional</label>
          <div classNmae="ComissionInputCon">
          <input className="ComissionInput" type="text"/><label className="ComissionPer">%</label>      
         </div>
          </div>
        </div>
        <div className="addProductItem">
          <label>Order</label>
          <input className="inputborder" type="text" placeholder="Type..." />
        </div>
        <div className="RadioBtnOrder">
        
          <input className="RadioBtn" type="radio"  />
          <label className="RadioBtntext">Pre-Order</label>

          
        </div>
        <div className="addProductItem">
        <label>Type</label>
          <select >
          <option value="sub Category">Select Type</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Max Quantity-Per Order</label>
          <input className="inputborder" type="text" placeholder="Type" />
        </div>
        <div className="addProductItem">
        <label>Related Prograss</label>
          <select >
          <option value="sub Category" placeholder="Enter Product">Enter Product Name</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Minimum Quantity Per-Days</label>
          <input className="inputborder" type="text" placeholder="Type" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea  className="textareastyle"  lang="eng"/>
        </div>
        <div className="addProductItem">
          <label>Description (Ar)</label>
          <textarea className="textareastyle" lang="ar"/>
        </div>
        <div className="addProductItem">
          <label>Long Description</label>
          <textarea className="textareastyle" lang="ar"/>
        </div>
        <div className="addProductItem">
          <label>Long Description (Ar)</label>
          <textarea className="textareastyle" lang="ar"/>
        </div>

        
        <div className="addProductItem">
          <label>Stock</label>
          <input className="inputborder" type="text" placeholder="0" />
        </div>
        <div className="addProductItem">
          <label>Weight</label>
          <input className="inputborder" type="text" placeholder="0" />
        </div>
        <div className="addProductItem">
          <label>SkU</label>
          <input className="inputborder" type="text" placeholder="Type SKU" />
        </div>
        <div className="addProductItem">
          <label>Stock Notificaion Limit</label>
          <input className="inputborder" type="text" placeholder="Type..." />
        </div>
        <button className="BtnListCreate">Create</button>
      </form>
    </div>
  );
}
