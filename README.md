# Collection
JavaScript collection of objects.
A Collection is an array of objects of specified class. All elements of a collection must be instances of the same class. You can add, remove, get elements, or do something for each of them like if you use a usual array. This function lets you forget about checking if a variable is an object of class because it does that stuff by itself. 
## Creating new Collection
Just create new Collection object: 
```javascript
function MyClass(x,y){
  this.x = x;
  this.y = y;
}
var myCollection = new Collection(MyClass);
```
## Adding new element
Call Collection.add() and you will get the id of new element: 
```javascript
var myElementId = myCollection.add(new MyClass(1,2));
```
Then you can use this id to do something with this element.
## Getting the element
Call Collection.get():
```javascript
var myElement = myCollection.get(myElementId);
```
## Removing the element
Call Collection.remove():
```javascript
myCollection.remove(myElementId);
```
## Looping through the elements
```javascript
myCollection.forEach(function(element, index, array){
  //something
});
```
## Extending your Collection
```javascript
function myVeryNiceFunction(list){
  return list[0];
}
myCollection.extend('veryNiceFunction', myVeryNiceFunction);
var firstElement = myCollection.veryNiceFunction();
```
