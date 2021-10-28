/*
FILE NAME: script.js
ASSIGNMENT: Create a dynamic Multiplcation Table
Kathy Le, UMass Lowell Computer Science, Kathy_Le@student.uml.edu, khle@cs.uml.edu
Copyright (c) 2021 by Kathy Le. All rights reserved. May be freely copied or excerpted    
for educational purposes with credit to the author. 
     
PROJECT DESCRIPTION:The goal of this program project assignment is to further
familiarize with HTML, CSS, and be introduced to JavaScript. In using those 
languages, we are to create a dynamic table of multiplication, asking for
ther user's input in four places. From the input, the table will be created
if the requirements are met.
PROGRAM FILE GOAL: This file will dictate the behavior of the website and how to execute and create a dynamic table
*/

function matrix(){

    /*This is to get the user's input and assign to the variables for later use*/
    var minY = Number(document.getElementById("minY").value);
    var maxY = Number(document.getElementById("maxY").value);
    var minX = Number(document.getElementById("minX").value);
    var maxX = Number(document.getElementById("maxX").value);

    /*This is to set-up a "reset" to the alerts by setting errors to false*/
    var elements = document.getElementsByClassName('alert');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    var error = false;
    
    /*Let the user's know that there needs to be an input to make the table work and get created in all the variable/input requesting boxes*/
    if(document.getElementById('minY').value == ''){
        document.getElementById('minY').insertAdjacentHTML('afterend','<div class = "alert alert-danger" role = "alert"> Error! Please enter a valid number</div>');
        error = true;
    }
    if(document.getElementById('maxY').value == ''){
        document.getElementById('maxY').insertAdjacentHTML('afterend','<div class = "alert alert-danger" role = "alert"> Error! Please enter a valid number</div>');
        error = true;
    }
    if(document.getElementById('minX').value == ''){
        document.getElementById('minX').insertAdjacentHTML('afterend','<div class = "alert alert-danger" role = "alert"> Error! Please enter a valid number</div>');
        error = true;
    }
    if(document.getElementById('maxX').value == ''){
        document.getElementById('maxX').insertAdjacentHTML('afterend','<div class = "alert alert-danger" role = "alert"> Error! Please enter a valid number</div>');
        error = true;
    }

    /*If the input of the variable are below threshold, the users would get inputs for alert that they input is invalid*/
    if(minY < -50) {
        document.getElementById('minY').insertAdjacentHTML('afterend', '<div class = "alert alert-danger" role = "alert"> Error! This value is low.</div>');
        error = true;
    }
    if(maxY < -50) {
        document.getElementById('maxY').insertAdjacentHTML('afterend', '<div class = "alert alert-danger" role = "alert"> Error! This value is low.</div>');
        error = true;
    }
    if(minX < -50) {
        document.getElementById('minX').insertAdjacentHTML('afterend', '<div class = "alert alert-danger" role = "alert"> Error! This value is low.</div>');
        error = true;
    }
    if(maxX < -50) {
        document.getElementById('maxX').insertAdjacentHTML('afterend', '<div class = "alert alert-danger" role = "alert"> Error! This value is low.</div>');
        error = true;
    }

    /*If the user inputs numbers that are over the threshold, the users would be alert*/
    if(minY > 50) {
        document.getElementById('minY').insertAdjacentHTML('afterend', '<div class = "alert alert-danger" role = "alert"> Error! This value is high.</div>');
        error = true;
    }
    if(maxY > 50) {
        document.getElementById('maxY').insertAdjacentHTML('afterend', '<div class = "alert alert-danger" role = "alert"> Error! This value is high.</div>');
        error = true;
    }
    if(minX > 50) {
        document.getElementById('minX').insertAdjacentHTML('afterend', '<div class = "alert alert-danger" role = "alert"> Error! This value is high.</div>');
        error = true;
    }
    if(maxX > 50) {
        document.getElementById('maxX').insertAdjacentHTML('afterend', '<div class = "alert alert-danger" role = "alert"> Error! This value is high.</div>');
        error = true;
    }

    /*This alerts the user that the inputs they've put in are not possible because the min is greater than the max*/
    if (minY > maxY) {
        document.getElementById('maxY').insertAdjacentHTML('afterend', '<div class="alert alert-danger" role="alert"> Error! The min value is greater than max</div>');
        error=true;
    }
    if (minX > maxX) {
        document.getElementById('maxX').insertAdjacentHTML('afterend', '<div class="alert alert-danger" role="alert"> Error! The min value is greater than max</div>');
        error=true;
    }

    /*generalized error alert*/
    if(error){
        return;
    }

    /*variable assigning starts here*/
    var curX = minY;
    var curY = minX;
    var x;

    /*Creating a table with the content and how the math works*/
    var table = document.createElement('table');
    table.classList.add('newtable');
    /*loop to make rows*/
    for (let i=0; i <= (Math.abs(maxX-minX)+1); i++){
        var row = document.createElement('tr');
        curX = minY;
        /*loop to make columns*/
        for(let j = 0; j <= (Math.abs(maxY - minY) +1); j++){
            var col;

            if (i == 0) {
                col = document.createElement('th');
            } else {
                col = document.createElement('td');
            }

            if ((i == 0) && (j == 0))  { 
                val = '';
                col.classList.add('firstCell');
            } 

            else if(i == 0) { 
                val = curX;
                curX++;
                col.classList.add('firstRow');
            }

            else if(j == 0) {
                val = curY;
                col.classList.add('firstCol');
            }
            /*takes input to multiply*/
            else {
                val = curX * curY;
                curX++;
            }

            col.innerHTML = val;
            row.appendChild(col);
        }            
        
        if(i != 0) {
            curY++;
        }

        table.appendChild(row);
    }
    document.getElementById('dynMatrix').innerHTML = '';
    document.getElementById('dynMatrix').appendChild(table);
}