import React, { Component, createRef } from "react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import ProductList from "../ShoesShop/ProductList";
import { data } from '../Data/ProductData'
import Modal from "../ShoesShop/Modal";
import {Home} from '../css/Home.css'

export default class HomeTemplete extends Component {
  constructor(props){
    super(props);
    this.state={
      chooseItem:{}
    }
    
  }
  render() {
    return (
      <div className="row">
        <nav className="nav col-2 flex-column justify-content-center ">
          <NavLink className={({isActive})=>isActive?'nav-link border border-2 border-info-subtle bg-info text-white':'nav-link border border-2 border-white text-info'} aria-current="page" to="home" >
          <i className="fa-solid fa-house fa-fade "></i> Home <i class="fa-solid fa-arrow-right" style={{position:"relative", top:"0px", left:"81px"}}></i>
          </NavLink>
          <NavLink className={({isActive})=>isActive?'nav-link border border-2 border-succes-subtle bg-success text-white':'nav-link border border-2 border-white text-success'} to="shop">
          <i class="fa-solid fa-cart-shopping fa-fade"></i> Go to Cart <i class="fa-solid fa-arrow-right" style={{position:"relative", top:"0px", left:"51px"}}></i>
          </NavLink>
        </nav>
        <div className="tab-content col-10" id="myTabContent">
          <Routes>
            <Route path="home" element={<ProductList data={data} changeChoose={this.changeChoose}/>}/>
            <Route path="shop" element={<Modal item={this.state.chooseItem}/>}/>
            <Route path="*" element={<Navigate to='home'/>}/>
          </Routes>
        </div>
      </div>
    );
  }
  changeChoose=(item)=>{

    if(item.name){
      this.setState({
        chooseItem:item
      })
    }
  }
}
