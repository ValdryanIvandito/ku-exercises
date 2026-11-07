// ============================================================
// EXERCISE: CLASS
// ============================================================
// EVALUATION (2026-10-25, strict scoring, REVISED) — Total: 42/100
// Problem 1: 10/10  — perfect
// Problem 2: 10/10  — FIXED: setter now prints & rejects as required
// Problem 3: 6/10   — proof combo commented out (never ran);
//                     value() method missing
// Problem 4: 8.5/10 — works, but static property `name`
//                     (explicit requirement) not implemented
// Problem 5: 7.5/10 — output correct but NOT real method
//                     overriding (see notes)
// Problem 6: 0/10   — not attempted (ReferenceError / TypeError proof)
// Problem 7: 0/10   — not attempted (typeof, hoisting, strict mode)
// Problem 8: 0/10   — not attempted (Library system with private fields,
//                     composition, static counter)
// ============================================================
//
// CONCEPTS TO STRENGTHEN (priority order):
// 1. Private fields (#) + encapsulation proof
//    - #field declared in class body (required for external access proof)
//    - Getters for read-only exposure
//    - Proof: obj.#field → SyntaxError (parse-time, uncatchable)
//             Object.keys(obj) → [] (not enumerable, not visible)
//             JSON.stringify(obj) → {} (invisible outside)
//
// 2. Static properties vs static methods
//    - static name = "..."  → property on the class, not instances
//    - static method() { return this.name }  → 'this' = class here
//    - Instance (new Class()) does NOT inherit statics
//
// 3. Method overriding vs data variation
//    - Override = subclass defines its own method, replacing parent's
//    - Don't use this.sound = "..." in constructor to vary behavior
//    - Override speak() directly: each subclass owns its behavior
//
// 4. super() rules (constructor pitfalls)
//    - this before super() → ReferenceError (thrown at construction)
//    - extends non-constructor (e.g., object literal) → TypeError
//    - try/catch must wrap the 'new' expression, not later method calls
//
// 5. Class fundamentals
//    - typeof ClassName → "function" (class IS a function)
//    - Class declarations NOT hoisted (TDZ like let/const)
//    - Class body ALWAYS runs in strict mode
//
// 6. Composition over inheritance
//    - "Library HAS books" (array), NOT "Library IS A Book"
//    - Private #books = [] + add(book) uses the argument
//    - Static counter: static #count = 0; static get total() { return Class.#count }
//
// PRACTICE EXERCISES:
// 1. Rewrite Problem 3, 4, 5 from memory — focus on correct patterns
// 2. Build a Stack class: #items = [], push(), pop(), peek(), size (getter)
// 3. Explore extends edge cases:
//    - class A extends null { }
//    - class B extends (cond ? Parent : Other) { }
// 4. Reference: MDN "Classes" → "Private class fields", "Static initialization blocks", "extends"
// ============================================================
// Solve each problem below by writing your code under the
// problem's comment. Run with: node js-exercises/4-class.js
// from inside the ku-examples folder
//
// Reference: `class` is syntax over the prototype system you
// already learned in 3-constructor-function.js. A `class`
// declaration is NOT hoisted, methods defined on the class
// body end up on the prototype, and instances are still made
// with `new`.
// ============================================================

// PROBLEM 1 - Basic class (constructor + method)
// Create a class `Person` with:
//   - constructor(name, age) that sets both properties
//   - a method `greet()` that returns "Hi, I'm <name>"
// Create 2 instances with `new` and console.log the result
// of greet() for both.
//
// Expected output:
// Hi, I'm Andi
// Hi, I'm Budi
//
// Bonus (1 console.log): prove that methods live on the
// PROTOTYPE, not per-instance:
//   console.log(person1.greet === person2.greet); // true

// MY ANSWER:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

const person1 = new Person("Andi");
const person2 = new Person("Budi");

console.log(person1.greet());
console.log(person2.greet());

// Let's prove method greet() is the same function live on the prototype
console.log(person1.greet === person2.greet);

console.log("\n");
// ============================================================

// PROBLEM 2 - Getters and setters
// Create a class `Temperature` with:
//   - a private-ish backing property `_celsius` set in the
//     constructor (default 0)
//   - a GETTER named `celsius` that returns _celsius
//   - a SETTER named `celsius` that assigns _celsius but
//     REJECTS values below -273.15 (absolute zero) by ignoring
//     them and printing "Invalid temperature"
//   - a method `toFahrenheit()` returning (c * 9/5) + 32
// Then test:
//   const t = new Temperature(25);
//   console.log(t.celsius);        // 25
//   console.log(t.toFahrenheit()); // 77
//   t.celsius = -300;              // Invalid temperature
//   console.log(t.celsius);        // 25 (unchanged!)
//
// Expected output:
// 25
// 77
// Invalid temperature
// 25

// MY ANSWER:

class Temperature {
  _celsius = 0;

  constructor(celsius) {
    this._celsius = celsius;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(celsius) {
    if (celsius < -273.15) {
      console.log("Invalid temperature");
      return;
    }

    this._celsius = celsius;
  }

  toFahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }
}

const t = new Temperature(25);
console.log(t.celsius); // 25
console.log(t.toFahrenheit()); // 77
t.celsius = -300; // Invalid temperature
console.log(t.celsius); // 25 (unchanged!)

console.log("\n");
// ============================================================

// PROBLEM 3 - Private fields (modern syntax)
// Create a class `Counter` that:
//   - keeps `count` as a REAL private field using `#count`
//   - has methods `increment()`, `decrement()`, `value()`
// Then PROVE privacy: try to access `c.#count` from outside
// (in a try/catch) and console.log the caught error type.
// Also console.log what happens when you try `c.count`.
//
// Expected output:
// 1
// 0
// TypeError
// undefined

// MY ANSWER:

// class Counter {
//   #count = 0;

//   constructor(count) {
//     this.#count = count;
//   }

//   increment() {
//     return (this.#count = this.#count + 1);
//   }

//   decrement() {
//     return (this.#count = this.#count - 1);
//   }
// }

// const c = new Counter(0);

// console.log(c.increment());
// console.log(c.decrement());

// try {
//   const privateC = c.#count;
//   console.log(privateC);
// } catch (error) {
//   console.log(`Error: ${error}`);
// }

// console.log(c.count);

// EVALUATION: 6/10 (unchanged after re-check) — and WARNING:
// your uncomment made the file WORSE, not better
// - #count field + increment/decrement work ✅ (output 1, 0)
// - `value()` method MISSING (explicit requirement)
// - The try/catch you just enabled does NOT work — read the
//   crash node shows now: `SyntaxError: Private field '#count'
//   must be declared in an enclosing class` — this fires at
//   PARSE time, BEFORE any code runs, and try/catch can NOT
//   catch SyntaxError. Consequence: THE WHOLE FILE is now dead
//   (Problem 4-8 never run at all). Uncommenting this block
//   cost you the entire program's execution.
// - The runtime-TyperError proof the problem asks for (replace
//   your broken block with this shape):
//   try { Counter.prototype.increment.call({}); } catch (e) { ... }
//   (a Counter method invoked with a foreign `this` → TypeError)

// CORRECT ANSWER

class Counter {
  #count = 0; // declared in the class body — REQUIRED

  increment() {
    return (this.#count = this.#count + 1);
  }

  decrement() {
    return (this.#count = this.#count - 1);
  }

  value() {
    return this.#count;
  }
}

const c = new Counter();
c.increment();
console.log(c.value()); // 1
console.log(c.decrement()); // 0

// PROOF 1 — outside access silently doesn't exist:
console.log(c.count); // undefined (no own property named count)

// PROOF 2 — the runtime TypeError the problem wants:
/* (call a Counter method with a FOREIGN `this` — inside the
   method body `this.#count` is parseable, but at runtime the
   object it points to has no #count → TypeError, catchable!) 
*/

try {
  Counter.prototype.value.call({}); // foreign this = empty object
} catch (e) {
  console.log(e.name); // TypeError
}

// PROOF 3 — cannot even write it outside the class:
// c2.#count            → SyntaxError (parse-time, uncatchable)
// JSON.stringify(c2)   → {}   (the field is invisible outside)
// Object.keys(c2)      → []   (not enumerable, not present)

// Full expected output:
// 1
// 0
// undefined
// TypeError

console.log("\n");
// ============================================================

// PROBLEM 4 - Static methods & static properties
// Create a class `MathHelper` that:
//   - has a STATIC method `clamp(value, min, max)` returning
//     value limited to the given range
//   - has a STATIC property named `name` set to the string
//     "MathHelper v2" and a static method `describe()` that
//     returns it
// Expected output:
//   console.log(MathHelper.clamp(15, 0, 10));  // 10
//   console.log(MathHelper.clamp(-5, 0, 10));  // 0
//   console.log(MathHelper.describe());        // MathHelper v2
// Also console.log what a NEW instance of MathHelper looks
// like — the point: statics are NOT copied into instances.
//
// Expected output:
// 10
// 0
// MathHelper v2
// MathHelper {}
// (the point: statics are NOT copied into instances)

// MY ANSWER:

// class MathHelper {
//   static name = "MathHelper v2";

//   static clamp(value, min, max) {
//     if (value <= min) {
//       return min;
//     } else if (value >= max) {
//       return max;
//     } else {
//       return value;
//     }
//   }

//   static describe() {
//     return this.name;
//   }
// }

// CORRECT ANSWER:

class MathHelper {
  static name = "MathHelper";

  static clamp(value, min, max) {
    if (value <= min) {
      return min;
    } else if (value >= max) {
      return max;
    } else {
      return value;
    }
  }

  static describe(version) {
    return `${this.name} ${version}`;
  }
}

console.log(MathHelper.clamp(15, 0, 10)); // 10
console.log(MathHelper.clamp(-5, 0, 10)); // 0
console.log(MathHelper.describe("v2")); // MathHelper v2
console.log(new MathHelper());

// EVALUATION: 8.5/10
// - clamp + describe + instance proof all correct ✅
// - Explicit requirement "STATIC property `name`" not done:
//   describe() hardcodes the string instead of reading the
//   static property. Correct shape:
//   static name = "MathHelper v2";
//   static describe() { return this.name; } // this = class here

console.log("\n");
// ============================================================

// PROBLEM 5 - Inheritance (extends + super)
// Interview classic animal sounds.
// Create:
//   - class `Animal` with constructor(name) and method
//     `speak()` returning "<name> makes a sound"
//   - class `Dog` extends `Animal`, its constructor takes
//     (name, breed), calls `super(name)`, stores `breed`,
//     and OVERRIDES `speak()` returning "<name> barks"
//   - class `Cat` extends `Animal`, overrides speak()
//     returning "<name> meows"
// Then test:
//   const d = new Dog("Rex", "Husky");
//   console.log(d.speak());        // Rex barks
//   console.log(d instanceof Dog); // true
//   console.log(d instanceof Animal); // true (inheritance!)
//   console.log(d.__proto__ instanceof Animal); // also true
//
// Expected output:
// Rex barks
// true
// true
// true

// MY ANSWER:

// class Animal {
//   constructor(name) {
//     this.name = name;
//     this.sound = `${this.name} makes a sound`;
//   }

//   speak() {
//     return this.sound;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//     this.sound = `${this.name} barks`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//     this.sound = `${this.name} meows`;
//   }
// }

// const d = new Dog("Rex", "Husky");
// console.log(d.speak()); // Rex barks
// console.log(d instanceof Dog); // true
// console.log(d instanceof Animal); // true (inheritance!)
// console.log(d.__proto__ instanceof Animal); // also true

// const ca = new Cat("Lulu", "Vancat");
// console.log(ca.speak());

// const others = new Animal("Pikachu");
// console.log(others.speak());

// EVALUATION: 7.5/10
// - Output correct (Rex barks, instanceofs true) ✅
// - BUT this is NOT method overriding — the actual requirement:
//   Dog/Cat should OVERRIDE speak() itself. What you did: Animal
//   stores a `this.sound` data string, and subclasses overwrite
//   the DATA. That's data variation, not behavior overriding.
//   Why interviewers care: overriding = same call site (d.speak())
//   dispatches to different *methods* in the prototype chain.
//   If Animal's speak structure changes (e.g. adds punctuation),
//   your subclasses bypass it entirely.
// - Cat taking a `breed` param was not asked; harmless but noise

// CORRECT ANSWER:

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return `${this.name} meows`;
  }
}

const d = new Dog("Rex", "Husky");
console.log(d.speak()); // Rex barks
console.log(d instanceof Dog); // true
console.log(d instanceof Animal); // true (inheritance!)
console.log(d.__proto__ instanceof Animal); // also true

console.log("\n");
// ============================================================

// PROBLEM 6 - super() pitfalls (interview favorite)
// 1. What happens if a subclass constructor uses `this`
//    BEFORE calling `super()`? Write the code, catch the
//    error with try/catch, and console.log the error type.
// 2. What happens if you try to EXTEND something that is
//    not a constructor (e.g. extends a plain object literal)?
//    Again catch & log the error type.
//
// Expected output:
// ReferenceError
// TypeError

// CORRECT ANSWER:

// 1. `this` used before super() → ReferenceError, thrown while
//    CONSTRUCTING (so the try/catch must wrap the `new` itself):
try {
  class Test extends Person {
    constructor() {
      console.log(this.name); // used before super → boom
      super("Andi", 1);
    }
  }
  new Test();
} catch (e) {
  console.log(e.name); // ReferenceError
}

// 2. extending a non-constructor → TypeError:
try {
  class Broken extends { a: 1 } {} // object literal is not callable
  new Broken();
} catch (e) {
  console.log(e.name); // TypeError
}

console.log("\n");
// ============================================================

// PROBLEM 7 - typeof class & class vs constructor function
// Short theory + proof questions (answer as comments):
//   1. What does `typeof Person` print (Person is a class)?
//   2. Are class declarations hoisted? Prove it with a
//      try/catch around using a class before its declaration
//      and console.log the error type.
//   3. Can a class body run in "strict mode"? Prove it:
//      define an instance property without declaring it
//      (this.strictTest = ...) — is an error thrown globally,
//      or does it succeed? Explain in one comment.
//
// Expected output:
// function
// ReferenceError
// (your proof result)

// CORRECT ANSWER:

// 1. typeof Person   → "function"
//    (a class IS a function under the hood — the keyword is
//    syntax sugar over the constructor pattern)
console.log(typeof Person); // function

// 2. class declarations are NOT hoisted (they live in the
//    temporal dead zone, like let/const):
try {
  class MyClang extends Person {
    constructor(name, age) {
      super(name, age);
      this.club = "biology";
    }
  }
  new MyClang("Ray", 20);
} catch (e) {
  console.log(e.name); // ReferenceError (used before declaration)
}
class Student {}

// 3. class bodies run in STRICT MODE.
class StrictTest {
  freezeMine() {
    const obj = Object.freeze({ a: 1 });
    try {
      obj.a = 2; // throws TypeError in strict mode (class body)
    } catch (e) {
      console.log(e.name); // TypeError
    }
  }
}
new StrictTest().freezeMine();

console.log("\n");
// ============================================================

// PROBLEM 8 - Challenge: class-based Library system
// Combine everything (interview whiteboard level).
// Build:
//   - class `Book` with private field `#title`, `#author`,
//     `#isBorrowed = false`; getters `title`, `isBorrowed`;
//     a method `borrow()` that flips #isBorrowed to true.
//   - class `Library` with a private field `#books = []`,
//     method `add(book)` pushing to the list, method
//     `availableBooks()` returning title strings of books
//     whose isBorrowed is false, and a STATIC method
//     `totalLibraries` counter using a static private field
//     that increments every time a Library is instantiated.
// Then run:
//   const lib = new Library();
//   lib.add(new Book("Clean Code", "Robert Martin"));
//   lib.add(new Book("You Don't Know JS", "Kyle Simpson"));
//   console.log(lib.availableBooks());   // both titles
//   lib.books[0].borrow();
//   console.log(lib.availableBooks());   // only the unborrowed one
//   console.log(Library.totalLibraries); // instance counter
//
// Expected output:
// [ 'Clean Code', "You Don't Know JS" ]
// [ "You Don't Know JS" ]
// 1
//
// CORRECT ANSWER:

class Book {
  #title;
  #author;
  #isBorrowed = false;

  constructor(title, author) {
    this.#title = title;
    this.#author = author;
  }

  get title() { return this.#title; }
  get isBorrowed() { return this.#isBorrowed; }

  borrow() { this.#isBorrowed = true; }
}

class Library {
  #books = [];
  static #numOfLibrary = 0;

  constructor() {
    Library.#numOfLibrary++;
  }

  add(book) { this.#books.push(book); }

  availableBooks() {
    return this.#books
      .filter((b) => !b.isBorrowed)
      .map((b) => b.title);
  }

  static get totalLibraries() { return Library.#numOfLibrary; }
}

const lib = new Library();
const book1 = new Book("Clean Code", "Robert Martin");
const book2 = new Book("You Don't Know JS", "Kyle Simpson");
lib.add(book1);
lib.add(book2);
console.log(lib.availableBooks());   // [ 'Clean Code', "You Don't Know JS" ]

book1.borrow();
console.log(lib.availableBooks());  // [ "You Don't Know JS" ]
console.log(Library.totalLibraries); // 1
