/*
  While Loop

  Example-1

  How it works:
  - Step-1
    count = 0

    count < 3 => true
    print => Hello World!
    count = 1
  
  - Step-2
    count < 3 => true
    print => Hello World!
    count = 2

  - Step-3
    count < 3 => true
    print => Hello World!
    count = 3

  - Step-4
    count < 3 => false
*/

let count = 0;

while (count < 3) {
  console.log("Hello World!"); // Result: Hello World! 3x
  count++;
}

// =======================================================================================================
console.log("\n");
// =======================================================================================================

/*
  While Loop

  Example-2

  How it works:
  - Step-1
    countV2 = 1

    countV2 <= 3 => true
    print => Hello World!
    countV2 = 2
  
  - Step-2
    countV2 <= 3 => true
    print => Hello World!
    countV2 = 3

  - Step-3
    countV2 <= 3 => true
    print => Hello World!
    countV2 = 4

  - Step-4
    countV2 <= 3 => false
*/

let countV2 = 1;

while (countV2 <= 3) {
  console.log("Hello World!"); // Result: Hello World! 3x
  countV2++;
}

// =======================================================================================================
console.log("\n");
// =======================================================================================================

/*
  Do While 

  Example-1

  How it works:
  - Step-1
    countV3 = 0

    print => Hello World!
    countV3 = 1

    countV3 < 3 => true

  - Step-2
    print => Hello World!
    countV3 = 2

    countV3 < 3 => true

  - Step-3
    print => Hello World!
    countV3 = 3

    countV3 < 3 => false
*/

let countV3 = 0;

do {
  console.log("Hello World!"); // Result: Hello World! 3x
  countV3++;
} while (countV3 < 3);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

/*
  Do While

  Example-2

  How it works:
  - Step-1
    countV4 = 5

    print => Hello World!
    countV4 = 1

    countV4 < 3 => false
*/

let countV4 = 5;

do {
  console.log("Hello World!"); // Result: Hello World! 3x
  countV4++;
} while (countV4 < 3);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

/*
  For Loop

  Example-1

  How it works: 
  - Step-1
    Initial statement => countV5 = 0

    countV5 < 3 => true

    Execute Block Statement => Print "Hello World!"
    Execute Post Expression "countV5++" => countV5 = 1

  - Step-2
    countV5 < 3 => true

    Execute Block Statement => Print "Hello World!"
    Execute Post Expression "countV5++" => countV5 = 2

  - Step-3
    countV5 < 3 => true

    Execute Block Statement => Print "Hello World!"
    Execute Post Expression "countV5++" => countV5 = 3

  - Step-4
    countV5 < 3 => false
*/

for (let countV5 = 0; countV5 < 3; countV5++) {
  console.log("Hello World!"); // Result: Hello World! 3x
}

// =======================================================================================================
console.log("\n");
// =======================================================================================================

/*
  For Loop

  Example-2

  How it works: 
  - Step-1
    Initial statement => countV6 = 2

    countV6 >= 0 => true

    Execute Block Statement => Print "Hello World!"
    Execute Post Expression "countV6--" => countV6 = 1

  - Step-2
    countV6 >= 0 => true

    Execute Block Statement => Print "Hello World!"
    Execute Post Expression "countV6--" => countV6 = 0

  - Step-3 
    countV6 >= 0 => true

    Execute Block Statement => Print "Hello World!"
    Execute Post Expression "countV6--" => countV6 = -1

  - Step-4
    countV6 >= 0 => false
*/

for (let countV6 = 2; countV6 >= 0; countV6--) {
  console.log("Hello World!"); // Result: Hello World! 3x
}

