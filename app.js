
 // Global Variables
 const fragment = document.createDocumentFragment(); // this create document fragment to improve the performence 
 const sections = document.querySelectorAll ("section"); // this put all sections in variable to use them later in functions
 const menuTabs = document.getElementById('navbar__list'); // this used to put the list in the ul 
 
//functions 

// Build anchors , list and the menu tabs
sections.forEach( ( section , i) =>{ // to loop over sections 
const list = document.createElement("li");
const links = document.createElement("a");
links.innerText= section.getAttribute("data-nav");
links.classList.add("menu__link"); //add class to links
links.setAttribute("id",`menu-${i + 1}`); 
links.href=`#section${i+1}`;
list.appendChild(links); // add links to the list

 links.addEventListener('click' , (event) => {
    event.preventDefault();
    section.scrollIntoView({behavior:"smooth" , block:"end" }); // to scroll smoothly between sections when click on the links 
})
  fragment.appendChild(list);
})
   menuTabs.appendChild(fragment); // print the list in the ul


   // functions to make the actve section and the active link
function setActiveClass () {
sections.forEach ((section) => {
   if (section.classList.contains("your-active-class")) { // first if there is your-active-class in any section remove it
    section.classList.remove("your-active-class");
   }
    let bounding = section.getBoundingClientRect(); // to detect the active section
    if ((bounding.top >=0) && (bounding.top <=300)){
        section.classList.add('your-active-class');  // if the section between this angle add the class
      }
        
        else {
           section.classList.remove('your-active-class'); //otherwise remove it 
        }
      
       })
       //function to make the active link
       sections.forEach ((section) => {
         let data = section.getAttribute("data-nav");
             let allLinks = document.querySelectorAll("a"); //variavle contain all links
             if (section.classList.contains ('your-active-class')) { // if section contains your active class it will look in all links
             allLinks.forEach((link ) =>{
                   if(link.innerText == data) { // and if the link text = to the data-nav add class active-link
                       link.classList.add('active-link');
                     }
                     else {
                    link.classList.remove('active-link'); //if not remove it 
                  }
               })
            }
         })
    }
    window.addEventListener("scroll" , setActiveClass);
   
