import React, { Component } from 'react';
import styles from './ListItems.module.scss';


class ListItems extends Component {
  state = { }
  render() {
    const { items, setUpdate, deleteItem } = this.props;
    const listItems = items.map(item =>
    {
      return <div className={styles.listMap} key={item.key}>
      <p>
        <input type="text" id={item.key} value={item.text} onChange={(e)=>{setUpdate(e.target.value,item.key)}}/>
        <span>
        <button className={styles.deleteBtn} onClick={() => {deleteItem(item.key)}}>Delete</button>  
        </span>
      </p>
    </div>
    })
    return (
      <div className={styles.listContainer}>
        {listItems}
      </div>
    );
  }
}


export default ListItems;