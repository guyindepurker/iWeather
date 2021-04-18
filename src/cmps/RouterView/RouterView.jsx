
import React from 'react'
import {Route, Switch } from 'react-router-dom';
import { Routes } from 'router';


const RouterView = () => {

    return (
      <>
      <Switch>
      {Routes.map((route,key)=><Route path={route.path} component={route.component} key={key} />)}
      </Switch>
      </>
    )

   
}

export default RouterView
