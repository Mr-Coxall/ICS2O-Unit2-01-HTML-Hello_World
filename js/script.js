/* exported myButtonClicked */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This program displays "Hello, World!"

const clickFunction = myButtonClicked

function myButtonClicked () {
  document.getElementById('hello-world').innerHTML = 'Hello, World!'
}

clickFunction = null
