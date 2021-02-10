 /* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */
 const h1title = document.querySelector("header h1")
 const pInsideDiv = document.querySelector("div p")
 const allLinks = document.getElementsByTagName("a")

 function changeTitle(newTitle) {

   h1title.innerText = newTitle;
   return console.log("title changed to", newTitle)
 }

 changeTitle("This is the main title");

 /* EXERCISE 2
 Write a function for changing the class of the title of the page in "myHeading".
 */

 function addClassToTitle() {
   h1title.classList.add("myHeading")
 }

 addClassToTitle()

 /* EXERCISE 3
 Write a function for changing the text of only the p which are children of a div.
 */

 function changePcontent(content) {
   pInsideDiv.innerText = content
   return console.log("text changed to ", content)
 }

 changePcontent("hey  hey")

 /* EXERCISE 4
 Write a function for changing the destination of every link to https://www.google.com
 */

 function changeUrls() {
   for (elem of allLinks) {
     elem.setAttribute("href", "www.google.com")
   }
 }
 changeUrls()
 /* EXERCISE 5
 Write a function for adding a new item in the second list.
 */

 function addToTheSecond(content) {
   const item = document.createElement("li")
   const text = document.createTextNode(content)
   item.appendChild(text)
   const secondList = document.getElementById("secondList")
   secondList.appendChild(item);
   return console.log("appended new item")
 }

 addToTheSecond()


 /* EXERCISE 6
 Write a function for adding a second paragraph to the div.
 */

 function addParagraph(content) {
   const item = document.createElement("p")
   const text = document.createTextNode(content)
   item.appendChild(text)
   const secondList = document.getElementById("secondList")
   secondList.appendChild(item);
   return console.log("appended new item")
 }

 /* EXERCISE 7
 Write a function for making the first UL disappear.
 */

 function firstUlDisappear() {
   const element = document.getElementById("firstList")
   element.style.display = "none"
 }

 /* EXERCISE 8
 Write a function for making the background of every UL green.
 */

 function paintItGreen() {
   const element = document.getElementsByTagName("ul")
   for (item of element) {
     item.style.backgroundColor = "green"
   }
 }



 /* EXERCISE 9
 Make the heading of the page change color every time the user clicks on it.
 */
 function randomHexCode() {
   const randomnumber = (Math.random() * 0xfffff * 1000000).toString(16);
   return "#" + randomnumber.slice(0, 6);
 }
 const body = document.getElementsByTagName("h2")
 body[0].onclick = function (event) {
   console.log("Hello");
   event.target.style.color = randomHexCode()
 }

 function makeItClickable() {

 }

 /* EXERCISE 10
 Change the footer text with something else when the user clicks on it.
 */

 function changeFooterText() {

 }
 const footerText = document.querySelector("footer p")
 footerText.onclick = function (event) {
   event.target.innerText = "something else"
 }

 /* EXERCISE 11
 Attach an event listener to the input field in the page for console logging its value just after any keystroke.
 */

 const inputField = document.getElementById('input-field')
 inputField.onkeypress = function (event) {
   console.log(event.target.value)
 }
 /* EXERCISE 12
 Create a new welcome alert message when the page successfully loads.
 */

 window.onload = function () {
   alert("hey the page loaded!")
 }

 /* EXERCISE 13
 Use HTML5 tags to divide the content of the page in a more semantic way.
 */