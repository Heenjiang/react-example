import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/**如何利用react的思想，设计页面并实现 */

/** 第一步：将设计好的UI划分为组件的层次 */
/** 第二步：创建静态的版本（不考虑交互的功能） */

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
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
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
  render() {
    return (
      <form>
        <input type="text" placeholder="Search.." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
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