// ============================================================
// EXERCISE: CONSTRUCTOR FUNCTION
// ============================================================
// EVALUATION (2026-10-24, REVISED — stricter scoring) — Total: 86/100
// Problem 1: 10/10  — perfect
// Problem 2: 9/10   — proof & bonus prototype correct, comment not precise
// Problem 3: 10/10  — perfect
// Problem 4: 10/10  — perfect
// Problem 5: 3/10   — FAILED: misunderstood the question. The `this`
//                     explanation is wrong and the safety pattern
//                     (the actual requirement) is missing
// Problem 6: 8/10   — code correct, bonus "4 steps of new" not answered
// Problem 7: 10/10  — perfect
// ============================================================
// Solve each problem below by writing your code under the
// problem's comment. Run with: node js-exercises/3-constructor-function.js
// from inside the ku-examples folder
//
// Reference: a constructor function is a NORMAL function that
// is called with the `new` keyword. It creates an object,
// binds `this` to that object, and returns it automatically.
// ============================================================

// PROBLEM 1 - Basic constructor
// Create a constructor function `Person(name, age)` that
// builds an object with `name` and `age` properties.
// Create 2 instances with `new` and console.log both.
//
// Expected output:
// Person { name: 'Andi', age: 25 }
// Person { name: 'Budi', age: 30 }
//
// answer:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Andi", 25);
const person2 = new Person("Budi", 30);

console.log(person1);
console.log(person2);

// ============================================================

// PROBLEM 2 - Method duplication problem (the killer question)
// Add a method `greet` directly INSIDE the constructor from
// Problem 1 (edit Person above or make a new one `PersonV2`),
// then prove this classic interview fact: two instances get
// TWO SEPARATE copies of the method, which wastes memory.
//
// Count/copy code like this:
//   const a = new PersonV2("Andi", 25);
//   const b = new PersonV2("Budi", 30);
//   console.log(a.greet === b.greet); // false => duplicates!
//
// Question (answer as a comment): why is this a problem,
// and what is the standard solution?
//
// answer:

const PersonV2 = function (name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hi, I'm ${this.name}`;
  };
};

const a = new PersonV2("Andi", 25);
const b = new PersonV2("Budi", 30);
console.log(a.greet === b.greet);

// Your comment about why this is bad + the solution:
// This is bad practice because PersonV2 is redundant and wastes memory, we should use Person and using prototype to add method greet into Person
Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}`;
};

// Let's prove it
console.log(person1.greet === person2.greet);

// EVALUATION: 9/10
// - Proof `false` ✅ + bonus proving prototype sharing `true` ✅ (nice!)
// - Explanation not precise enough: the problem is NOT because of
//   PersonV2, but because the method is created INSIDE the function
//   (per-instance). Every `new` = 1 new function copy on the heap
//   (1000 instances = 1000 copies)
// - MORE PRECISE CAUSE: "creating identical function copies
//   per instance wastes memory" — not "PersonV2 is redundant"

// ============================================================

// PROBLEM 3 - Prototype (the solution)
// Create a constructor `Car(brand)` but put the method
// `info` on `Car.prototype` instead of inside the function.
// Create 2 instances and console.log whether their `info`
// methods are the SAME function (shared) — should print `true`.
//
// Expected output:
// Toyota: a car affordable for most people
// true
//
// answer:

const Car = function (brand) {
  this.brand = brand;
};

Car.prototype.info = function () {
  return `${this.brand}: a car affordable for most people`;
};

const car1 = new Car("Toyota");
const car2 = new Car("BYD");

console.log(car1.info());
console.log(car1.info === car2.info);

// ============================================================

// PROBLEM 4 - instanceof
// Given:
//   function Animal(name) { this.name = name; }
//   const cat = new Animal("Milo");
// Using `instanceof`, console.log checks that:
//   - cat IS an Animal
//   - the string "hello" is NOT an Animal
//
// Expected output:
// true
// false
//
// answer:

function Animal(name) {
  this.name = name;
}

const cat = new Animal("Milo");

console.log(cat instanceof Animal);
console.log("hello" instanceof Animal);

// ============================================================

// PROBLEM 5 - The missing `new` pitfall (interview favorite)
// Call a constructor WITHOUT `new`:
//   function BankAccount(balance) { this.balance = balance; }
//   const acc = BankAccount(1000); // no `new`!
// Console.log `acc` and explain (in a comment) what actually
// happened — what does the function return, and where did
// `this` point? Then show the common safety pattern that
// guards against this mistake.
//
// Expected output (approximately):
// undefined
// Fixed: BankAccount { balance: 1000 }
//
// answer:

function BankAccount(balance) {
  this.balance = balance;
}

const acc = BankAccount(1000);

// The expected result is undefined because the BankAccount function doesn't return some value
//  The keyword 'new' is need to call constructor function, the keyword of 'new' meaning is generate new object, so that's why we must use 'new keyword for instance to generate new object
// 'this' keyword refers to BankAccount object so 'this' returns value before dot '.'
console.log(acc);

// Solution to fix the issue is write correct syntax, add new when use instance, and also create getBalance through prototype to return the result
function BankAccountV2(balance) {
  this.balance = balance;
}

BankAccountV2.prototype.getBalance = function () {
  return this.balance;
};

const accV2 = new BankAccountV2(1000);

console.log(accV2.getBalance());

// EVALUATION: 3/10 — FAILED this problem. The question had 3 parts
// and only a fraction of part 1 was met:
//   Part 1 "console.log acc"
//     ✅ Done — prints undefined (but this is trivial, you just
//        observed the output)
//   Part 2 "explain what happened — what does the function return,
//           and where did `this` point?"
//     ⚠️ "returns undefined because no return value" — correct,
//        but it's half of the answer
//     ❌ "'this' refers to BankAccount object" — WRONG. This is the
//        core of the question and you got it backwards. Without
//        `new`: in a plain script `this` = globalThis (so the
//        balance leaks to the global scope), in an ES module
//        `this` = undefined. Failing to understand `this` binding
//        here means failing to understand WHY constructor
//        functions need `new` at all.
//   Part 3 "show the common safety pattern that guards against
//           this mistake"
//     ❌ MISSING. Not delivered at all. Writing BankAccountV2 +
//        using `new` correctly is not what was asked — the point
//        is to guard the function AGAINST callers who omit `new`:
//          function BankAccount(balance) {
//            if (!(this instanceof BankAccount)) {
//              return new BankAccount(balance);
//            }
//            this.balance = balance;
//          }
//        (modern alternative: `if (new.target === undefined) return new BankAccount(balance)`)
// - Verdict: you demonstrated you can USE `new`, but not that you
//   UNDERSTAND what happens without it — which was the point of
//   this interview question. Expected output "Fixed: ..." was also
//   never produced.

// ============================================================

// PROBLEM 6 - Return value over the constructor
// (advanced, shows why constructors are flexible)
// Create a constructor `Counter()` that tracks `count`,
// BUT instead of 3 separate methods on the instance,
// create a `getList` method on the prototype that returns
// a summary string using `this`.
// Bonus (as comments): what are the 4 steps that the
// `new` keyword does behind the scenes?
//
// Expected output:
// count = 3
//
// answer:

function Counter() {
  this.count = 0;
}

Counter.prototype.increment = function () {
  this.count++;
};

Counter.prototype.decrement = function () {
  this.count--;
};

Counter.prototype.getList = function () {
  return `count = ${this.count}`;
};

const count = new Counter();

for (let i = 0; i < 3; i++) {
  count.increment();
}

console.log(count.getList());

// EVALUATION: 8/10
// - Code correct & output "count = 3" ✅, methods on prototype ✅
// - ❌ Bonus "4 steps of new" not answered (asked "as comments").
//   Standard answer:
//   1. Create a new empty object: {}
//   2. Set that object's __proto__ to Constructor.prototype
//   3. Call the constructor with this = the new object
//   4. If the constructor doesn't return another object,
//      the new object from step 1 is returned automatically

// ============================================================

// PROBLEM 7 - Challenge: build a Stack class constructor
// Interview classic. Build `Stack()` whose instances:
//   - start with an empty internal array
//   - have `push(item)`  -> adds the item
//   - have `pop()`       -> removes & returns the last item
//   - have `size()`      -> returns the number of items
// Put the methods on the prototype (not per-instance!).
// Then run:
//   const s = new Stack();
//   s.push("a"); s.push("b"); s.push("c");
//   console.log(s.size());
//   console.log(s.pop());
//   console.log(s.size());
//
// Expected output (LIFO = last in, first out):
// 3
// c
// 2

// answer:

function Stack() {
  this.arr = [];
}

Stack.prototype.push = function (item) {
  this.arr.push(item);
};

Stack.prototype.pop = function () {
  const lastItem = this.arr.at(-1);
  this.arr.pop();

  return lastItem;
};

Stack.prototype.size = function () {
  return this.arr.length;
};

const s = new Stack();
s.push("a");
s.push("b");
s.push("c");
console.log(s.size());
console.log(s.pop());
console.log(s.size());

// EVALUATION: 10/10
// - All methods on prototype ✅, LIFO correct ✅
// - `.at(-1)` + `pop()` works nicely. Micro note: can be 1 line,
//   `return this.arr.pop();` because pop() already returns the item
// - Interview note: the `this.arr` state is still public (can be
//   manipulated from outside: s.arr.push("x") sneaks in silently).
//   If asked the next level: "how do you make it truly private?"
//   → closures / WeakMap / #private fields
