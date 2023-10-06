function customRender(reactElem, container){
    /*
    const domElement = document.createElement(reactElem.type)
    domElement.innerHTML = reactElem.children
    domElement.setAttribute('href', reactElem.props.href)
    domElement.setAttribute('target', reactElem.props.target)
    
    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElem.type)
    domElement.innerHTML = reactElem.children 
    for (const prop in reactElem.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, props[prop]) 
    }
    container.appendChild(domElement);
}

const reactElem = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)