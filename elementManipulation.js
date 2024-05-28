const mainContainer = document.getElementById('main');
const title = document.querySelector('#title');
const section = document.getElementById('item-section');
const paragraph = document.createElement('p');
// const text = document.createTextNode(
//     " — the premier source for web development knowledge.",
//   );
const itemForm = document.getElementById('addItem');
const inputItem = document.querySelector('input[name="item"]');
const parentList = document.getElementById('parent-list');

title.textContent = 'DOM Manipulation';

mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column';
mainContainer.style.alignItems = 'center';
mainContainer.style.justifyContent = 'center';

// paragraph.appendChild(text);

section.appendChild(title);
// section.appendChild(paragraph);

// const clonedParagraph = paragraph.cloneNode(true);
// section.appendChild(clonedParagraph);

// section.removeChild(clonedParagraph);
// clonedParagraph.remove(clonedParagraph);
// clonedParagraph.parentNode.removeChild(clonedParagraph)

itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newItemText = inputItem.value.trim();
    if (newItemText) {
        const newItem = document.createElement('li');
        const btn = document.createElement('button');
        newItem.textContent = newItemText;
        btn.type = "button";
        btn.textContent = "Delete";
        btn.style.marginLeft = "10px";

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            parentList.removeChild(newItem);
        });

        newItem.appendChild(btn);
        parentList.appendChild(newItem);
        inputItem.value = '';
    }
});

// Event delegation
// parentList.addEventListener('click', (e) => {
//     // Stop event bubbling
//     e.stopPropagation();
    
//     const clickedElement = e.target;
//     if (clickedElement.tagName === 'LI') {
//         alert(`Item clicked: ${clickedElement.textContent}`);
//     }
// });

// Adding another event to demonstrate stopping propagation
// section.addEventListener('click', () => {
//     console.log('Section clicked');
// });

// Adding another event to demonstrate delegation
// document.body.addEventListener('click', () => {
//     console.log('Body clicked');
// });

const tabContainer = document.getElementById('tab-container');
const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');

function removeClass(targetElement, className,tabId) {
    document.getElementById('active-content').removeAttribute('id')
    const tabTargetId = `tab-content-${tabId}`;
    tabContents.forEach(tab => { 
        if(tab.classList.includes(tabTargetId)){
            tab.setAttribute('id', 'active-content')
        }else{
            tab.classList.add(className)
        }
    });
}
function addClassList(targetElement, className) {
    document.getElementById('active').removeAttribute('id')
    tabItems.forEach(tab => { 
        if(targetElement != tab){
            tab.classList.add(className)
        }
        if(targetElement == tab){
            tab.setAttribute('id', 'active')
        }
    });
}
/** HIDE TAB CONTENTS */
tabContainer.addEventListener('click', (e) =>{
    e.stopPropagation();
    const element = e.target;
    const tabId = element.dataset.tab;
    const tabContent = document.querySelector(`.tab-content-${tabId}`);
    if(element.tagName == "BUTTON"){
        tabContents.forEach(tab => tab.classList.remove('active-content'));
        tabItems.forEach(tab => tab.classList.remove('active'));
        tabContent.classList.add('active-content');
        element.classList.add('active');
    }
})


const navContainer = document.getElementById('nav-container');
const parentNav = document.getElementById('parent-item');
const navItems = document.querySelectorAll('.nav-item');

function handleHover(e){
    const element = e.target;
    if(e.target.tagName == 'LI'){
        navItems.forEach(link => {
            if(element != link){
                link.style.opacity = this
            }
        })
    }
}

navContainer.addEventListener('mouseover',handleHover.bind(0.5));

navContainer.addEventListener('mouseout',handleHover.bind(1));


const elementContainer = document.getElementById('element-traversing');
const ul = document.getElementById('ul');
const ulParent = ul.parentNode;
const firstChild = ul.firstElementChild;
const lastChild = ul.lastElementChild;
console.log(firstChild.closest('#element-traversing'));
console.log(lastChild,'lastChild');