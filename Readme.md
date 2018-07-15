# Javascript Progress Bar Library

[Check out the github pages version](https://darrencarlin.github.io/Progress-Bar-Library/)


Simply add this code to initialize:

```javascript
const scrollbar = new Scrollbar();
scrollbar.add(); // default settings 
```

Pass in an object to customise settings

**size**, **color** and **transition** should take css styles 
```javascript
   settings = {
    'pos':'top', // Position bar 'top' or 'bottom'
    'size': '15px', 
    'color': 'rgba(0,0,0,.6)', 
    'transition': 'width .2s linear'
    }
```