1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer :

getElementById এর মাধ্যমে HTML document এ লিখা কোনো element কে id এর মাধ্যমে 
access করা যায়।আমরা জানি, একটা id কেবল একটি specific element এর ই হবে।তাই
এটি হচ্ছে getElementById.

অপরদিকে, getElementsByClassName এর মাধ্যমে একটি class যতগুলো element এ লিখা হবে,তাদের
প্রত্যেককেই access করা যাবে সেই class name এর মাধ্যমে।class যেহেতু একাধিক element এ ই 
ব্যবহার করা যায়,তাই এটি হচ্ছে getElementsByClassName.

 আবার, getElementById এর ক্ষেত্রে সরাসরি .addEventListener 
ব্যবহার করা যায়,কিন্তু getElementsByClassName এর ক্ষেত্রে সরাসরি .addEventListener  
ব্যবহার করা যায় না।একে একটু for-of বা for loop এর মাধ্যমে প্রতিটি class elememt কে
আলাদা আলাদা ভাবে access করতে হয়।

querySelector এর মাধ্যমে কোনো parentNode এর ভেতরে যতগুলো childNodes আছে,সেখানে
 একটি নির্দিষ্ট class বা id কে খুঁজে পাওয়া যায়।তবে querySelector 
এর ক্ষেত্রে প্রথমে যেই class বা id কে সে খুঁজে পাবে,তাকেই সে show করবে।
এরপরে আরো বেশি সেই class অন্য কোনো element এ থাকলেও তাকে ধরবে না।

অপরদিকে, querySelectorAll এর ক্ষেত্রে ,এটিও একটি class বা id কে খুঁজে বের করে 
দিতে পারে,তবে এখানে বিষয় টি হলো, querySelector বেলায় শুধু একটি(প্রথমেই) যেই class 
কে সে পাবে,সেটি ধরবে,কিন্তু querySelectorAll এর ক্ষেত্রে যতগুলো একই class পাবে,সেই 
সবগুলোকেই দেখাবে।

2.How do you create and insert a new element into the DOM?

Answer:

To create a new element into the DOM:
const div=document.createElement("div");
To insert this into the DOM:
div.innerHTML=`<p>This is the new Paragraph</p>`
Now,suppose,if the corresponding id="container",then:
document.getElementById("container").appendChild(div);
Thus,we can create and insert a new element into the DOM.

3.What is Event Bubbling and how does it work?

Answer: 

Event Bubbling হচ্ছে DOM event flow এর একটা mechanism,যেখানে 
It propagates upwards through it's parent elements in the hierarchy.
এখানে,একটি childNode event এ click করলে বা triggered হলে সেই অংশে trigger apply তো হবেই,বরং তার 
parentNode এও যদি event দেওয়া থাকে,তাহলে সেই childNode এ click করার মাধ্যমে
 প্রত্যেকেরই ওপর তাদের event applied হয়ে যাবে।


4.What is Event Delegation in JavaScript? Why is it useful?

Answer:

Event Delegation হচ্ছে javascript এ event handle করার একটা টেকনিক,
যেখানে একাধিক child element এ individual event listener add করার বদলে
একটা single event listener,common parent element এ attach করে দেওয়া যায়।

এতে করে code simplified হয়,maintenance easier হয়,মেমোরি efficiency ,performance
improved হয়।Dynamically event handle করা যায়।

5.What is the difference between preventDefault() and stopPropagation() methods?

Answer: 

preventDefault() এর বিষয় টি হলো এই যে,একটা <form> tag এর ভেতরে যদি কোনো button থাকে,তবে সেটি by default একটা submit অবস্থায় থাকে,যার কারনে সেই বাটনে ক্লিক করলে পুরো পেজ টাই রিলোড নেয়।
এখন,যদি আমি চাই যে,এই বাটন টি সাবমিট অবস্থায় ই থাকবে,কিন্তু ক্লিক করলে রিলোড নিবে না,সেক্ষত্রে আমরা এই preventDefault() ব্যবহার করি।

আর অপরদিকে,  stopPropagation() ব্যবহার করা হয় event bubbling এর ঘটনায় একটা childNode এ ক্লিক করলে এই childNode এর event এবং তার উপরের parentNode এর event উভয়ের ক্লিক এর প্রভাব যেন একসাথে না পড়ে,শুধু childNode,যেটাতে ক্লিক করা হয়েছে,বা triggered হয়েছে,শুধু সেটারই function করবে,parentNode এর টা করবে না।

এটি ই হচ্ছে preventDefault() and stopPropagation() এর মধ্যে difference.
