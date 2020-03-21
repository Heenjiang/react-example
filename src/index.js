import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/**如何利用react的思想，设计页面并实现 */

/* 第一步：将设计好的UI划分为组件的层次 */
/* 第二步：创建静态的版本（不考虑交互的功能） */
/* 第三步：考虑所有数据中那些是state数据，并且确定应该把state的数据放在哪一个组件中*/
/* 第四步：添加反向数据流：函数回调！ */
class ProductCategoryRow extends React.Component {
  render() {
    const catefory = this.props.catefory;
    return (
      <tr>
        <th colSpan="2">
          {catefory}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
     product.name :
     <span style={{color: 'red'}}>
       {product.name}
     </span>;

     return (
       <tr>
         <td>{name}</td>
         <td>{product.price}</td>
       </tr>
     );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
      if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
        return ;
      }
      if(inStockOnly && !product.stocked){
        return ;
      }
      if(product.catefory !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            catefory={product.catefory}
            key={product.catefory} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.catefory;
    });

    return (
      <table>
        <thread>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thread>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.value);
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search.." 
          value={filterText}
          onChange={this.handleFilterTextChange}
          />
        <p>
          <input 
            type="checkbox"
            checked={inStockOnly}
            onChange={this.handleInStockChange}
            />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: 'm',
      inStockOnly: false
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange} />
        <ProductTable 
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);