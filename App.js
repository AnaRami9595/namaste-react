
const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
//⬆️createElement in react takes 3 arguments: 
//1. the type, 
 //2.an object which will help you to give attributes to  your tags
 //3.and the children
 //console.log(heading)//returns and object, is a reacc element
             
 const root = ReactDOM.createRoot(document.getElementById("root"));
//⬆️now our div with an Id of "root" will be the root of our program
//thanks to the React DOM📃 library

root.render(heading)
//⬆️we render the root in the dom, with the heading inside
//------------------------------------------------
/*🔴How do we replicate the following HTML in React?

    🖥️<div id = "parent">
        <div id = "child">
            <h1>I'm an h1 tag</h1>
            <h2>I'm an h2 tag</h2>
        </div>
        <div id = "child2">
            <h1>I'm an another h1 tag</h1>
            <h2>I'm an another h2 tag</h2>
        </div>
    </div>
*/
const parent = React.createElement(
    "div", {id: "parent"},
React.createElement(
    "div", {id:"child"}, [
    //sibling elements, we put them inside of an array:
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
   ]),
   React.createElement("div", {id:"child2"}, [
    //sibling elements, we put them inside of an array:
    React.createElement("h1", {}, "I'm another h1 tag"),
    React.createElement("h2", {}, "I'm another h2 tag")
   ])
);

root.render(parent)
//⬆️⬆will REPLACE (Not append) the content that is already inside the 
//<div> with id of root. 
//everything that we are rendering, is being rendered inside of ROOT.
