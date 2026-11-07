// ============================================================
// QUIZ: var, let, const, Hoisting, TDZ — MULTIPLE CHOICE
// ============================================================
// EVALUATION (2026-10-26) — Score: 17/24 (71%) — "Good"
//
// ✅ Correct (17): Q1, Q2, Q3, Q5, Q6, Q7, Q8, Q11, Q14,
//                  Q15, Q16, Q17, Q19, Q21, Q22, Q23, Q24
// ❌ Wrong (7):
//   Q4  (A→B): typeof on a TRULY undeclared variable returns
//              "undefined" — it never throws. Only TDZ vars
//              make typeof throw (that's Q3).
//   Q9  (C→B): const locks the BINDING, not the value.
//              push() mutates contents => OK;
//              arr = [] reassigns the binding => TypeError.
//   Q10 (A→B): The classic. var i is ONE shared binding;
//              all 3 timeouts run AFTER the loop ends => 3 3 3.
//   Q12 (B→C): Local `var v` is hoisted to the TOP of f() and
//              initialized undefined => shadows global => undefined.
//   Q13 (D→B): Same trap with let: the local declaration puts
//              the WHOLE function scope in TDZ => ReferenceError.
//   Q18 (C→B): `const i = 0` is legal; prints 0 once, then
//              i++ reassigns a constant => TypeError (runtime),
//              not SyntaxError.
//   Q20 (A→B): The IIFE is the FIX for Q10 — each call copies
//              k into its own scope => 0 1 2.
//
// Strengths: TDZ core understanding (Q2/Q3/Q16/Q22), let vs var
//   redeclaration rules, per-iteration let bindings (Q11/Q24).
//
// Weakness patterns (the 7 misses cluster into 3 themes):
//   1. Closures + var in async loops (Q10, Q20, Q12) — model
//      WHEN the callback runs vs WHEN the variable is read.
//      This is the #1 interview question on this topic.
//   2. Hoisting shadow traps (Q12, Q13) — a local declaration
//      (var OR let) affects the entire function scope from
//      the top, not from the line it's written on.
//   3. const semantics (Q9, Q18) — const forbids reassignment
//      of the binding only; it does NOT freeze values.
//
// Action plan: re-run SANDBOXes in order Q10 → Q20 → Q12 → Q13
//   (they share one mental model: "closures capture variables,
//   not values"), then retake just the 7 missed questions.
// ============================================================
// How to take this quiz:
// 1. Read each question and its code snippet
// 2. Pick ONE answer: A, B, C, or D
// 3. Write your choice on the "YOUR ANSWER" line, e.g. // B
// 4. Run to verify: node js-exercises/0-variables-hoisting.js
//    (uncomment the "SANDBOX" code of a question to test it)
// 5. Check the ANSWER KEY at the bottom of the file
// ============================================================

console.log("--- Quiz start ---\n");

// ------------------------------------------------------------
// Q1 — Basic var hoisting
// ------------------------------------------------------------
// What does this print?
//
//   console.log(x);
//   var x = 5;
//
// A) 5
// B) undefined
// C) ReferenceError: Cannot access 'x' before initialization
// D) SyntaxError
//
// YOUR ANSWER: B

// --- SANDBOX (uncomment to verify) ---
// console.log(x);
// var x = 5;

// ------------------------------------------------------------
// Q2 — TDZ with let
// ------------------------------------------------------------
// What does this print?
//
//   console.log(y);
//   let y = 10;
//
// A) 10
// B) undefined
// C) ReferenceError: Cannot access 'y' before initialization
// D) null
//
// YOUR ANSWER: C

// --- SANDBOX (uncomment to verify) ---
// console.log(y);
// let y = 10;

// ------------------------------------------------------------
// Q3 — typeof vs TDZ
// ------------------------------------------------------------
// What does this print?
//
//   console.log(typeof z);
//   let z = 1;
//
// A) "undefined" — typeof is always safe
// B) "number"
// C) ReferenceError — typeof does NOT escape the TDZ
// D) SyntaxError
//
// YOUR ANSWER: C

// --- SANDBOX (uncomment to verify) ---
// console.log(typeof z);
// let z = 1;

// ------------------------------------------------------------
// Q4 — typeof on undeclared variable
// ------------------------------------------------------------
// What does this print?
//
//   console.log(typeof neverDeclared);
//
// A) ReferenceError
// B) "undefined"
// C) "object" (legacy quirk)
// D) TypeError
//
// YOUR ANSWER: A

// --- SANDBOX (uncomment to verify) ---
// console.log(typeof neverDeclared);

// ------------------------------------------------------------
// Q5 — Block scope vs function scope
// ------------------------------------------------------------
// What does this print?
//
//   function f() {
//     if (true) {
//       var a = 1;
//       let b = 2;
//     }
//     console.log(a, b);
//   }
//   f();
//
// A) 1 2
// B) 1 ReferenceError
// C) undefined undefined
// D) ReferenceError (both)
//
// YOUR ANSWER: B

// --- SANDBOX (uncomment to verify) ---
// function f() {
//   if (true) {
//     var a = 1;
//     let b = 2;
//   }
//   console.log(a, b);
// }
// f();

// ------------------------------------------------------------
// Q6 — var redeclaration
// ------------------------------------------------------------
// What happens?
//
//   var name = "A";
//   var name = "B";
//   console.log(name);
//
// A) SyntaxError — duplicate declaration
// B) "A"
// C) "B" — var allows redeclaration, last one wins
// D) undefined
//
// YOUR ANSWER: C

// --- SANDBOX (uncomment to verify) ---
// var name = "A";
// var name = "B";
// console.log(name);

// ------------------------------------------------------------
// Q7 — let redeclaration
// ------------------------------------------------------------
// What happens?
//
//   let age = 20;
//   let age = 30;
//
// A) "30" — let redeclaration is fine
// B) SyntaxError — Identifier 'age' has already been declared
// C) 20 — first wins
// D) undefined
//
// YOUR ANSWER: B

// --- SANDBOX (uncomment to verify) ---
// let age = 20;
// let age = 30;
// console.log(age);

// ------------------------------------------------------------
// Q8 — Shadowing in a block
// ------------------------------------------------------------
// What does this print?
//
//   let x = "outer";
//   {
//     let x = "inner";
//   }
//   console.log(x);
//
// A) "inner" — the block overwrote the outer x
// B) "outer" — inner x was a separate binding (shadowing)
// C) undefined
// D) ReferenceError
//
// YOUR ANSWER: B

// --- SANDBOX (uncomment to verify) ---
// let x = "outer";
// {
//   let x = "inner";
// }
// console.log(x);

// ------------------------------------------------------------
// Q9 — const reassignment vs mutation
// ------------------------------------------------------------
// What happens?
//
//   const arr = [1, 2];
//   arr.push(3);
//   arr = [];
//
// A) Both lines throw TypeError
// B) push works; arr = [] throws TypeError (assignment to constant)
// C) push throws; arr = [] works
// D) Both work fine
//
// YOUR ANSWER: C

// --- SANDBOX (uncomment to verify) ---
// const arr = [1, 2];
// arr.push(3);
// console.log("push ok:", arr);
// try {
//   arr = [];
// } catch (e) {
//   console.log("reassign throws:", e.name);
// }

// ------------------------------------------------------------
// Q10 — var in loops + setTimeout (the classic)
// ------------------------------------------------------------
// What does this print?
//
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 0);
//   }
//
// A) 0 1 2
// B) 3 3 3
// C) 0 0 0
// D) undefined undefined undefined
//
// YOUR ANSWER: A

// --- SANDBOX (uncomment to verify) ---
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// ------------------------------------------------------------
// Q11 — let in loops (per-iteration binding)
// ------------------------------------------------------------
// What does this print?
//
//   for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 0);
//   }
//
// A) 3 3 3
// B) 0 1 2 — let creates a NEW binding each iteration
// C) 2 2 2
// D) 0 0 0
//
// YOUR ANSWER: B

// --- SANDBOX (uncomment to verify) ---
// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log(j), 0);
// }

// ------------------------------------------------------------
// Q12 — var hoisting inside a function (shadow trap)
// ------------------------------------------------------------
// What does this print?
//
//   var v = "global";

//   function f() {
//     console.log(v);
//     var v = "local";
//   }

//   f();
//
// A) "global"
// B) "local"
// C) undefined — local var v is hoisted, shadowing the global
// D) ReferenceError
//
// YOUR ANSWER: B

// --- SANDBOX (uncomment to verify) ---
// var v = "global";
// function f() {
//   console.log(v);
//   var v = "local";
// }
// f();

// ------------------------------------------------------------
// Q13 — TDZ shadow trap with let
// ------------------------------------------------------------
// What happens?
//
//   let v = "global";

//   function f() {
//     console.log(v);
//     let v = "local";
//   }

//   f();
//
// A) "global" — function can see the outer v
// B) ReferenceError — local let v puts the WHOLE scope in TDZ
// C) undefined
// D) "local"
//
// YOUR ANSWER: D

// --- SANDBOX (uncomment to verify) ---
// let v = "global";

// function f() {
//   try {
//     console.log(v);
//   } catch (e) {
//     console.log("throws:", e.name);
//   }
//   let v = "local";
// }

// f();

// ------------------------------------------------------------
// Q14 — Function hoisting vs var
// ------------------------------------------------------------
// What does this print?
//
//   console.log(fn());
//   function fn() { return "hoisted"; }
//
// A) ReferenceError — fn not defined yet
// B) "hoisted" — function declarations are fully hoisted
// C) undefined
// D) TypeError: fn is not a function
//
// YOUR ANSWER: B

// --- SANDBOX (uncomment to verify) ---
// console.log(fn());
// function fn() { return "hoisted"; }

// ------------------------------------------------------------
// Q15 — Function expression vs declaration
// ------------------------------------------------------------
// What happens?
//
//   console.log(fn());
//   var fn = function () { return "hi"; };
//
// A) "hi" — hoisted like a declaration
// B) TypeError: fn is not a function — var hoists the NAME
//    as undefined, not the function value
// C) ReferenceError: Cannot access 'fn'
// D) SyntaxError
//
// YOUR ANSWER: B

// --- SANDBOX (uncomment to verify) ---
// try {
//   console.log(fn());
// } catch (e) {
//   console.log("throws:", e.name);
// }
// var fn = function () { return "hi"; };

// ------------------------------------------------------------
// Q16 — TDZ in default parameters
// ------------------------------------------------------------
// What happens with foo()?
//
//   function foo(a = b, b = 2) { console.log(a, b); }
//   foo();
//
// A) undefined 2
// B) SyntaxError — parameters can't reference each other
// C) ReferenceError: Cannot access 'b' before initialization
//    (params form their own TDZ, left to right)
// D) NaN 2
//
// YOUR ANSWER: C

// --- SANDBOX (uncomment to verify) ---
// function foo(a = b, b = 2) { console.log(a, b); }
// try {
//   foo();
// } catch (e) {
//   console.log("throws:", e.name);
// }

// ------------------------------------------------------------
// Q17 — var on the global object
// ------------------------------------------------------------
// What does this print?
//
//   var globalVar = "hello";
//   let globalLet = "world";
//   console.log(globalThis.globalVar !== undefined,
//               globalThis.globalLet !== undefined);
//
// A) true true
// B) false false
// C) true false — var becomes a property of globalThis,
//    let/const don't
// D) false true
//
// YOUR ANSWER: C

// --- SANDBOX (uncomment to verify) ---
// var globalVar = "hello";
// let globalLet = "world";
// console.log(globalThis.globalVar !== undefined,
//             globalThis.globalLet !== undefined);

// ------------------------------------------------------------
// Q18 — const loop variable
// ------------------------------------------------------------
// What happens?
//
//   for (const i = 0; i < 3; i++) {
//     console.log(i);
//   }
//
// A) Prints 0 1 2 — const is fine in for loops
// B) Prints 0 once, then TypeError (i++ reassigns a constant)
// C) SyntaxError — const can't be used in for loops
// D) Infinite loop
//
// YOUR ANSWER: C

// --- SANDBOX (uncomment to verify) ---
// for (const i = 0; i < 3; i++) {
//   console.log(i);
// }

// ------------------------------------------------------------
// Q19 — const in for..of
// ------------------------------------------------------------
// What happens?
//
//   for (const item of ["a", "b", "c"]) {
//     console.log(item);
//   }
//
// A) TypeError — const can't be reassigned each iteration
// B) SyntaxError
// C) Prints a b c — for..of creates a NEW binding per
//    iteration (no reassignment happens)
// D) Prints undefined 3 times
//
// YOUR ANSWER: C

// --- SANDBOX (uncomment to verify) ---
// for (const item of ["a", "b", "c"]) {
//   console.log(item);
// }

// ------------------------------------------------------------
// Q20 — IIFE fix for the var loop problem
// ------------------------------------------------------------
// What does this print?
//
//   for (var k = 0; k < 3; k++) {
//     (function(k) {
//       setTimeout(() => console.log(k), 0);
//     })(k);
//   }
//
// A) 3 3 3 — same as plain var
// B) 0 1 2 — the IIFE copies k into its own scope per call
// C) 0 0 0
// D) SyntaxError
//
// YOUR ANSWER: A

// --- SANDBOX (uncomment to verify) ---
// for (var k = 0; k < 3; k++) {
//   (function (k) {
//     setTimeout(() => console.log(k), 0);
//   })(k);
// }

// ------------------------------------------------------------
// Q21 — const with Object.freeze
// ------------------------------------------------------------
// What happens?
//
//   const user = Object.freeze({ name: "Alice" });
//   user.name = "Bob";
//
// A) SyntaxError
// B) TypeError (always)
// C) Silently ignored in non-strict mode; TypeError in
//    strict mode / modules — freeze makes the VALUE immutable
// D) user.name becomes "Bob"
//
// YOUR ANSWER: C

// --- SANDBOX (uncomment to verify) ---
// const user = Object.freeze({ name: "Alice" });
// try {
//   user.name = "Bob";
//   console.log("silent, still:", user.name);
// } catch (e) {
//   console.log("throws:", e.name);
// }

// ------------------------------------------------------------
// Q22 — class declarations and TDZ
// ------------------------------------------------------------
// What happens?
//
//   console.log(Child);
//   class Child {}
//
// A) undefined — classes are hoisted like var
// B) ReferenceError — class declarations are hoisted but
//    stay in the TDZ until evaluated
// C) [class Child]
// D) SyntaxError
//
// YOUR ANSWER: B

// --- SANDBOX (uncomment to verify) ---
// console.log(Child);
// class Child {}

// ------------------------------------------------------------
// Q23 — Hoisting order (function vs var)
// ------------------------------------------------------------
// What does this print?
//
//   console.log(typeof fn);
//   var fn = 1;
//   function fn() {}
//
// A) "number"
// B) "function" — the function declaration wins: it's
//    hoisted AFTER var, overwriting the undefined slot
// C) "undefined"
// D) ReferenceError
//
// YOUR ANSWER: B

// --- SANDBOX (uncomment to verify) ---
// console.log(typeof fn);
// var fn = 1;
// function fn() {}

// ------------------------------------------------------------
// Q24 — Closure over a let loop variable
// ------------------------------------------------------------
// What does this print?
//
//   const funcs = [];

//   for (let i = 0; i < 3; i++) {
//     funcs.push(() => i);
//   }

//   console.log(funcs[0](), funcs[1](), funcs[2]());
//
// A) 0 1 2
// B) 3 3 3
// C) 2 2 2
// D) undefined undefined undefined
//
// YOUR ANSWER: A

// --- SANDBOX (uncomment to verify) ---
// const funcs = [];
// for (let i = 0; i < 3; i++) {
//   funcs.push(() => i);
// }
// console.log(funcs[0](), funcs[1](), funcs[2]());

// ============================================================
// ANSWER KEY (no peeking before you finish!)
// ============================================================
// Q1:  B — var hoists with value undefined
// Q2:  C — let is hoisted but NOT initialized (TDZ)
// Q3:  C — typeof is the ONLY operator that throws in TDZ
// Q4:  B — typeof on truly undeclared vars returns "undefined"
// Q5:  B — var is function-scoped (a = 1), let is block-scoped
// Q6:  C — var allows redeclaration
// Q7:  B — let/const forbid redeclaration in the same scope
// Q8:  B — inner let x shadows, doesn't mutate the outer x
// Q9:  B — const locks the BINDING, not the value
// Q10: B — var i is one shared binding, closed over by ref
// Q11: B — let creates a fresh binding per iteration
// Q12: C — local var v hoists to top of function = undefined
// Q13: B — local let v = TDZ for the entire function scope
// Q14: B — function declarations are fully hoisted
// Q15: B — var fn = undefined, then "is not a function"
// Q16: C — parameter TDZ: b is referenced before its init
// Q17: C — var attaches to globalThis; let/const don't
// Q18: B — i++ assigns to a const => TypeError after one pass
// Q19: C — for..of gives a fresh binding per item
// Q20: B — IIFE parameter copies the value per iteration
// Q21: C — freeze mutates silently ignored (non-strict), TypeError strict
// Q22: B — classes: hoisted but TDZ until definition
// Q23: B — function declaration wins the hoist race
// Q24: A — same reason as Q11 (let per-iteration binding)
// ============================================================
// SCORING:
//   22-24 correct: Excellent — interview ready
//   17-21:         Good — review the ones you missed
//   12-16:         Keep practicing — redo the SANDBOXes
//   < 12:          Re-read hoisting/TDZ, retake tomorrow
// ============================================================

console.log("\n--- Quiz complete. Check the ANSWER KEY. ---");
