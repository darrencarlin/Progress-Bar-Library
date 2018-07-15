# Javascript Progress Bar Library

[Check out the github pages version](https://darrencarlin.github.io/Progress-Bar-Library/)


Open the console and initialze as follows: 

> const scrollbar = new Scrollbar();
>
> scrollbar.add();

running scrollbar.add() will use default settings;

pass in an object to customise settings

size, color and transition should take css styles 

   settings = {
    'pos':'top', // Position bar 'top' or 'bottom'
    'size': '15px', 
    'color': 'rgba(0,0,0,.6)', 
    'transition': 'width .2s linear'
    }

