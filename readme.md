
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: 
The primary difference between getElementById, getElementByClassName and querySelector/querySelectorAll lie in their selection criteria, return type, and performance. **getElementById** targets a single element using its unique id attribute. It returns a single element and is the fastest because IDs are optimized for lookup. supported in all browsers, including older onces. Its used to select a single, specific element and his unique id. Its the most performance of the task. If no element match it return null. **getElementsByClassName** is multiple elements with a specific class name. Returns a live HTMLCollection and its update automatically if DOM changes.And it also supported in all browsers, including older onces. **querySelector** selects the first element that matches a css selector. Return the first matching DOM element. if no match found it return null. its highly flexible. its static. **querySelectorAll** select all element that match a css selector. Returns a non-live NodeList of all matching elements. 

2. How do you **create and insert a new element into the DOM**?
Ans:
Creating and inserting a new element into the DOM in javascript like a tree element (div,h1,p,button etc). A new element dynamically three thing. Create make a new element to document.createElement() its save element memory then Modify add text, classes, ID, etc. Then insert attach to the parent on the page.

3. What is **Event Bubbling** and how does it work?
Ans:
Event bubbling is a mechanism in the DOM where an event triggered in an element first handles the event on the element and then propagate up through its ancestors in the DOM tree. The event occurs on the target element then it moves up to the parent grandparent then continues up the root. 

4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans:
Event Delegation is a technique in JavaScript where each child element does not have its own event listener. Instead, a single listener is placed on the parent, and it checks which child was targeted the event. It works of event bubbling events move from chid then parent then grandparent. The parent uses bubbling to handle events for its children. This is useful because it saves memory (only one listener handles all children), and it makes the code cleaner and easier to maintain.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans: 
event.preventDefault() stops the browser’s default action (such as form submission, link navigation, checkbox toggle, right-click menu, or any other element with a default behavior) but does not stop the event from bubbling; the event still propagates to parent elements.
event.stopPropagation() only prevents the event from bubbling up the DOM to parent elements; it does not stop the browser’s default action from occurring.

---
