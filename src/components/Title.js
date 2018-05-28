import React from 'react'
import style from './Title.css'

const Title = (props) => <h1 className = {style.Title}>Projects on my To Do list: {props.data.length}</h1>

export default Title