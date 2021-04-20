import React from "react";
import  MenuItem from '../menu-item/menu-item'
import './directory-style.scss'
import {createStructuredSelector} from 'reselect'
import {directoryselectf} from '../../redux/directory/directory-selector'
import {connect } from 'react-redux'
 const Directory =({directory})=> {

    return <>
    <div className="directory-menu">
    {directory.map(({id,...sectionProp})=>{
      return <MenuItem key={id} {...sectionProp}/>
    })}
  
    </div>
    </>;
  
}
const MapStateToProps =createStructuredSelector({
  directory:directoryselectf
})

export default connect(MapStateToProps) (Directory);
