// function customRender(reactElement,container){
    
//     // const domElement=document.createElement
//     // (reactElement.type)
//     // domElement.innerHTML=reactElement.children
//     // domElement.setAttribute('href',reactElement.props.href)
//     // domElement.setAttribute('target' ,reactElement.props.target)

//     // container.appendChild(domElement)

//    const domElement = document.createElement
//    (reactElement.type)
//    domElement.innerHTML = reactElement.children
//    for(const key in props){
//     // if (object.hasOwnProperty.call(object,key)){

//     //     const Element = object[key]
//     // }
//     if(props==='children') continue;
//     domElement.setAttribute(prop, reactElement.props)
//     [prop]
//    }
//    container.appendChild(domElement)

// }


// const reactElement={
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target: '_blank'
//     },
//     children:'click me to visit google'
// }


// const mainContainer = document.querySelector('#root')

// customRender(reactElement, mainContainer)

function customRender(reactElement, container) {
    // Create the DOM element based on the type in the reactElement
    const domElement = document.createElement(reactElement.type);
    
    // Set the children content
    domElement.textContent = reactElement.children;
    
    // Loop through the props and set attributes
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;  // Skip the children prop
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    
    // Append the created DOM element to the container
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
