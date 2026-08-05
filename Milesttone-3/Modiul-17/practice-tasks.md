<!-- Task 1 -->

1. Data Type Classifier
Function Name Must be: classifyDataType
একটি Debugging Tool যেকোনো JavaScript value নিলে বলে দেয় সেটা Primitive নাকি Non-Primitive টাইপ।
Input:
Function একটি Parameter গ্রহণ করবে — value (any type)
নিয়ম / Output:
• value যদি string, number, boolean, undefined, null, symbol, বা bigint হয় → Return করবে "Primitive"
• value যদি object, array, বা function হয় → Return করবে "Non-Primitive"
• typeof এবং Array.isArray() ব্যবহার করে detect করতে হবে
Validation:
কোনো অতিরিক্ত Validation দরকার নেই — সব JS value valid input।
টেস্ট কেস:
Input
Output
classifyDataType(25)
"Primitive"
classifyDataType("hi")
"Primitive"
classifyDataType([1,2,3])
"Non-Primitive"
classifyDataType({a:1})
"Non-Primitive"
classifyDataType(null)
"Primitive"


<!-- Problem-2 -->

Function Name Must be: describeMissingValue
একটি Form Validator System প্রতিটি Field Value চেক করে বলে দেয় সেটা ইচ্ছাকৃতভাবে খালি (null) নাকি কখনো set-ই হয়নি (undefined)।
Input:
Function একটি Parameter গ্রহণ করবে — fieldValue (any)
নিয়ম / Output:
• fieldValue === undefined হলে Return করবে "Field was never set"
• fieldValue === null হলে Return করবে "Field intentionally left empty"
• অন্য যেকোনো value হলে Return করবে "Field has value: <value>"
Validation:
Validation দরকার নেই — undefined/null/other সব branch cover করবে।
টেস্ট কেস:
Input
Output
describeMissingValue(undefined)
"Field was never set"
describeMissingValue(null)
"Field intentionally left empty"
describeMissingValue("Rafi")
"Field has value: Rafi"
describeMissingValue(0)
"Field has value: 0"


<!-- Problem 3 -->
Function Name Must be: checkTruthy
একটি Config Loader System যেকোনো Config Value নিয়ে বলে দেয় সেটা truthy না falsy, condition এ ব্যবহারের আগে।
Input:
Function একটি Parameter গ্রহণ করবে — value (any)
নিয়ম / Output:
• value যদি Falsy হয় (false, 0, "", null, undefined, NaN) → Return করবে "Falsy"
• বাকি সব ক্ষেত্রে (empty array/object সহ) → Return করবে "Truthy"
Validation:
কোনো অতিরিক্ত Validation দরকার নেই।
টেস্ট কেস:
Input
Output
checkTruthy(0)
"Falsy"
checkTruthy("")
"Falsy"
checkTruthy([])
"Truthy"
checkTruthy({})
"Truthy"
checkTruthy("0")
"Truthy"

<!-- Problem 4 -->

Function Name Must be: compareValues
একটি Learning Tool দুইটা Value নিয়ে == এবং === দুইভাবেই Compare করে দেখায়, যাতে Implicit Conversion কীভাবে কাজ করে বোঝা যায়।
Input:
Function দুইটি Parameter গ্রহণ করবে — a (any), b (any)
নিয়ম / Output:
• Return করতে হবে একটি Object: { loose: (a == b), strict: (a === b) }
• শুধু Boolean value বসবে দুই Key তে
Validation:
কোনো অতিরিক্ত Validation দরকার নেই।
টেস্ট কেস:
Input
Output
compareValues(5, "5")
{ loose: true, strict: false }
compareValues(0, false)
{ loose: true, strict: false }
compareValues("5", 5)
{ loose: true, strict: false }
compareValues(null, undefined)
{ loose: true, strict: false }
compareValues(7, 7)
{ loose: true, strict: true }

<!-- Problem 5 -->

5. Hoisting Behavior Predictor
Function Name Must be: predictHoisting
একটি Interview-Prep Tool var/let/const দিয়ে declare করা keyword নিয়ে বলে দেয়, Declaration-এর আগে Access করলে কী হবে।
Input:
Function একটি Parameter গ্রহণ করবে — keyword (String): "var" / "let" / "const"
নিয়ম / Output:
• "var" হলে Return করবে "undefined (hoisted, not initialized)"
• "let" হলে Return করবে "ReferenceError (Temporal Dead Zone)"
• "const" হলে Return করবে "ReferenceError (Temporal Dead Zone)"
Validation:
Return "Invalid" যদি keyword এই তিনটির একটিও না হয়।
টেস্ট কেস:
Input
Output
predictHoisting("var")
"undefined (hoisted, not initialized)"
predictHoisting("let")
"ReferenceError (Temporal Dead Zone)"
predictHoisting("const")
"ReferenceError (Temporal Dead Zone)"
predictHoisting("function")
"Invalid"


<!-- Problem -6 -->

6. Order Counter (Closure)
Function Name Must be: createOrderCounter
একটি Restaurant App প্রতিটা Branch-এর জন্য আলাদা Order Counter রাখে। Closure ব্যবহার করে Private Count Maintain করতে হবে।
Input:
createOrderCounter() কোনো Parameter নেয় না, একটি Function Return করে — সেই Returned Function কল করলে Count একটা করে বাড়বে
নিয়ম / Output:
• প্রতিবার Returned Function কল করলে Internal count 1 করে বাড়বে এবং নতুন count Return করবে
• প্রতিটা createOrderCounter() Call আলাদা, Independent Counter তৈরি করবে (একটার Count অন্যটাকে প্রভাবিত করবে না)
• count Variable বাইরে থেকে সরাসরি Access করা যাবে না — শুধু Returned Function দিয়েই বাড়ানো যাবে
Validation:
কোনো অতিরিক্ত Validation দরকার নেই।
টেস্ট কেস:
Input
Output
const c1=createOrderCounter(); c1(); c1();
1, then 2
const c2=createOrderCounter(); c2();
1 (c1 থেকে Independent)

<!-- Problem-7 -->

7. Order Processor (Callback)
Function Name Must be: processOrder
একটি E-commerce System Order Process করার পর, Order Status অনুযায়ী ভিন্ন ভিন্ন Callback Function Call করতে চায় (Success বা Failure হ্যান্ডলার)।
Input:
Function তিনটি Parameter গ্রহণ করবে — orderTotal (Number), onSuccess (Function), onFailure (Function)
নিয়ম / Output:
• orderTotal > 0 হলে onSuccess(orderTotal) Call করবে, এবং সেই Callback-এর Return Value Return করবে
• orderTotal <= 0 হলে onFailure(orderTotal) Call করবে, এবং সেই Callback-এর Return Value Return করবে
Validation:
Return "Invalid" যদি onSuccess অথবা onFailure Function না হয়।
টেস্ট কেস:
Input
Output
processOrder(500, t=>`Paid ${t}`, t=>`Failed`)
"Paid 500"
processOrder(-50, t=>`Paid ${t}`, t=>`Failed`)
"Failed"
processOrder(500, "x", "y")
"Invalid"

<!-- Problem-8 -->

8. Mutate or Copy
Function Name Must be: mutateOrCopy
একটি Data-Safety Checker System দেখাতে চায়, একটি Function কল করার পর Original Data বদলায় কিনা — Type অনুযায়ী।
Input:
Function একটি Parameter গ্রহণ করবে — data (Number অথবা Object, যেখানে Object এ একটি value Property থাকবে)
নিয়ম / Output:
• data একটি Number হলে: একটি Local Copy বানিয়ে সেটাকে 100 দিয়ে বদলাও, তারপর Return করো "Original unaffected: <original data>"
• data একটি Object হলে: data.value কে 100 এ বদলে দাও (mutate), তারপর Return করো "Original changed: <data.value>"
Validation:
Return "Invalid" যদি data Number বা Object কোনোটাই না হয়।
টেস্ট কেস:
Input
Output
mutateOrCopy(10)
"Original unaffected: 10"
mutateOrCopy({value:10})
"Original changed: 100"
mutateOrCopy("10")
"Invalid"


<!-- Problem 9 -->

9. Ticket Number Tracker
Function Name Must be: trackTicketNumber
একটি Support Desk System প্রতিটা নতুন Ticket-এ Serial Number বাড়ায়, কিন্তু Increment Type (Pre বা Post) অনুযায়ী কোন Value ব্যবহার হবে তা আলাদা।
Input:
Function দুইটি Parameter গ্রহণ করবে — currentNumber (Number), type (String): "pre" / "post"
নিয়ম / Output:
• type "pre" হলে: আগে 1 বাড়িয়ে সেই Value Return করবে (++currentNumber এর মতো Logic)
• type "post" হলে: আগের Value Return করবে, কিন্তু বাড়ানো Value ও দেখাতে হবে — Format: "Used: <old>, Now: <new>"
Validation:
Return "Invalid" যদি type "pre"/"post" ছাড়া অন্য কিছু হয়।
টেস্ট কেস:
Input
Output
trackTicketNumber(5, "pre")
6
trackTicketNumber(5, "post")
"Used: 5, Now: 6"
trackTicketNumber(5, "skip")
"Invalid"

<!-- Problem 10 -->

10. Product Filter Suite
Function Name Must be: filterProducts
একটি Online Shop-এর Product List নিয়ে একাধিক Operation করতে হবে — action Parameter অনুযায়ী map/filter/find প্রয়োগ করে।
Input:
Function দুইটি Parameter গ্রহণ করবে — products (Array of Object, প্রতিটাতে name ও price থাকবে), action (String): "names" | "cheap" | "firstExpensive"
নিয়ম / Output:
• "names" → map() দিয়ে শুধু Product Name গুলোর একটি Array Return করবে
• "cheap" → filter() দিয়ে যেসব Product-এর price ৫০০ টাকার কম, তাদের Array Return করবে
• "firstExpensive" → find() দিয়ে প্রথম Product যার price ১০০০ টাকার বেশি, সেটা Return করবে (না পেলে undefined)
Validation:
Return "Invalid" যদি products Array না হয় অথবা action অচেনা হয়।
টেস্ট কেস:
Input
Output
filterProducts([{name:'Pen',price:20},{name:'TV',price:1500}], "names")
['Pen','TV']
filterProducts([{name:'Pen',price:20}], "cheap")
[{name:'Pen',price:20}]
filterProducts([{name:'TV',price:1500}], "firstExpensive")
{name:'TV',price:1500}
filterProducts("x", "names")
"Invalid"

<!-- Problem 11 -->

11. Cart Summary Generator
Function Name Must be: cartSummary
একটি E-commerce Cart System Cart Item Array নিয়ে Total Price বের করে, এবং Preview হিসেবে প্রথম কয়েকটা Item দেখায়।
Input:
Function দুইটি Parameter গ্রহণ করবে — cartItems (Array of Object, প্রতিটাতে price থাকবে), previewCount (Number, default 2)
নিয়ম / Output:
• reduce() দিয়ে সব item-এর price যোগ করে Total বের করতে হবে
• slice(0, previewCount) দিয়ে প্রথম কয়েকটা Item Preview হিসেবে নিতে হবে
• Return করতে হবে একটি Object: { total: <sum>, preview: <sliced array> }
Validation:
Return "Invalid" যদি cartItems Array না হয় অথবা Empty হয়।
টেস্ট কেস:
Input
Output
cartSummary([{price:100},{price:200},{price:300}])
{ total: 600, preview: [{price:100},{price:200}] }
cartSummary([{price:50}], 1)
{ total: 50, preview: [{price:50}] }
cartSummary([])
"Invalid"

<!-- Problem 12 -->

Function Name Must be: refactorLegacyCart (concept task)
নিচের পুরনো ES5-style Function-টি Cart Total ও Item Names বের করে, কিন্তু var, Regular Function, String Concat, ও for-loop ব্যবহার করা হয়েছে। এই পুরো মডিউলের Concept (const/let, Arrow Function, Template Literal, Closure দিয়ে Private State, map/reduce) প্রয়োগ করে পুরোপুরি Refactor করো। Refactor শেষে ChatGPT/Claude কে দিয়ে নিজের Refactor Verify করাও।
Input:
নিচের ES5 Snippet-টি ইনপুট হিসেবে ধরো
নিয়ম / Output:
• var সব দূর করে let/const দিয়ে বদলাও
• Regular Function → Arrow Function এ Refactor করো
• String Concatenation ('+') দূর করে Template Literal দিয়ে বদলাও
• for-loop এর Total Sum একটি Array.reduce() দিয়ে লেখো, আর Item Names একটি Array.map() দিয়ে বের করো
• একটি Closure ব্যবহার করে Cart-এর item count Private ভাবে Track করো (প্রতিবার নতুন item Add হলে বাড়বে)
স্টার্টার কোড:
// ES5 — refactor this fully using Module 17 concepts:
var getCartSummary = function(items) {
  var total = 0;
  var names = [];
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
    names.push(items[i].name);
  }
  return 'Cart: ' + names.join(', ') + ' | Total: ' + total + ' Taka';
};
Validation:
Refactor-এর পর মূল Function-এর Output অপরিবর্তিত থাকতে হবে; শুধু Style বদলাবে, Logic-এর Result বদলাবে না।
টেস্ট কেস:
Input
Output
[{name:'Pen',price:100},{name:'Bag',price:250}]
"Cart: Pen, Bag | Total: 350 Taka"
[{name:'Cup',price:80}]
"Cart: Cup | Total: 80 Taka"


