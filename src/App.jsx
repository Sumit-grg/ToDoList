import React, { Component } from 'react';
import ListItems from './ListItems';
import styles from "./App.module.scss";


class App extends Component {

    state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput = (e) => {
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem = (key) => {
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate = (text,key) => {
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
  }
  render(){
    return (
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <h2>To Do List</h2>
          <form onSubmit={this.addItem}>
            <input type="text" className={styles.AppInput} placeholder="Type here..." value= {this.state.currentItem.text} onChange={this.handleInput}/>
            <button className={styles.addBtn} type="submit">Add</button>
          </form>
          <p>Task:</p>
        <div className={styles.ListItems}>
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        </div> 
      </div>
    </div>  
    );
  }
}



export default App;
