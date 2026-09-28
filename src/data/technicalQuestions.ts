import { TechnicalQuestion } from '../types';

export const technicalQuestionsData: TechnicalQuestion[] = [
  // --- JAVA ---
  {
    id: 'tech-java-1',
    category: 'Java',
    question: 'What is inheritance in Java?',
    difficulty: 'Easy',
    answer:
      'Inheritance is an Object-Oriented Programming (OOP) mechanism where a new class (subclass or child class) inherits properties, fields, and methods from an existing class (superclass or parent class). In Java, it is achieved using the `extends` keyword.',
    codeSnippet: `class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}`,
    keyPoints: [
      'Promotes code reusability and method overriding (run-time polymorphism).',
      'Java supports single, multilevel, and hierarchical inheritance with classes.',
      'Multiple inheritance is NOT supported using classes to avoid the Diamond Problem, but is supported via interfaces.',
      'The `super` keyword is used to access superclass members and constructors.',
    ],
  },
  {
    id: 'tech-java-2',
    category: 'Java',
    question: 'What is the difference between equals() and == in Java?',
    difficulty: 'Easy',
    answer:
      'The `==` operator compares memory addresses (object references) to check if two references point to the exact same memory location. The `equals()` method compares the actual content or logical state of the two objects.',
    codeSnippet: `String s1 = new String("hello");
String s2 = new String("hello");

System.out.println(s1 == s2);      // false (different memory references)
System.out.println(s1.equals(s2));  // true (same content)`,
    keyPoints: [
      '`==` is a binary operator; `equals()` is a method defined in the `Object` class.',
      'For primitive types (int, float, etc.), only `==` is used to compare values.',
      'Classes should override `hashCode()` whenever they override `equals()`.',
    ],
  },
  {
    id: 'tech-java-3',
    category: 'Java',
    question: 'Explain JVM, JRE, and JDK.',
    difficulty: 'Medium',
    answer:
      'JDK (Java Development Kit) is a full software development environment containing tools (javac compiler, debugger) plus the JRE. JRE (Java Runtime Environment) provides libraries and runtime needed to execute Java programs. JVM (Java Virtual Machine) executes the compiled bytecode and handles memory management (Garbage Collection).',
    keyPoints: [
      'JDK = JRE + Development Tools (javac, javap, etc.).',
      'JRE = JVM + Core Class Libraries (rt.jar, etc.).',
      'JVM is platform-dependent, but bytecode is platform-independent (Write Once, Run Anywhere).',
    ],
  },
  {
    id: 'tech-java-4',
    category: 'Java',
    question: 'What are abstract classes and interfaces? When should you use which?',
    difficulty: 'Hard',
    answer:
      'An abstract class can contain both abstract methods (without bodies) and concrete methods (with bodies), as well as instance variables with state. An interface is a contract that primarily defines abstract methods (since Java 8, it can also have default and static methods) and only public static final constants. A class can extend only one abstract class, but can implement multiple interfaces.',
    keyPoints: [
      'Use an abstract class when classes share common code, state, or an "is-a" relationship.',
      'Use an interface when defining a capability or behavioral contract across unrelated classes.',
    ],
  },

  // --- PYTHON ---
  {
    id: 'tech-py-1',
    category: 'Python',
    question: 'What is the difference between lists and tuples in Python?',
    difficulty: 'Easy',
    answer:
      'Lists are mutable (their elements can be modified, added, or removed after creation) and are defined using square brackets `[]`. Tuples are immutable (cannot be altered once defined) and are defined using parentheses `()`.',
    codeSnippet: `my_list = [1, 2, 3]
my_list[0] = 99      # Allowed!

my_tuple = (1, 2, 3)
# my_tuple[0] = 99   # Raises TypeError: 'tuple' object does not support item assignment`,
    keyPoints: [
      'Tuples are faster and consume less memory than lists.',
      'Tuples can be used as dictionary keys if all their elements are hashable.',
      'Lists are ideal for collections of data that will change over time.',
    ],
  },
  {
    id: 'tech-py-2',
    category: 'Python',
    question: 'What is the Global Interpreter Lock (GIL) in Python?',
    difficulty: 'Medium',
    answer:
      'The GIL is a mutex (lock) used by CPython (the standard Python interpreter) to ensure that only one thread executes Python bytecode at a time. This prevents multi-threading race conditions on Python objects and simplifies memory management.',
    keyPoints: [
      'CPython uses reference counting for garbage collection, which requires thread safety.',
      'CPU-bound multi-threaded Python programs do not see speedups on multi-core CPUs.',
      'To achieve true CPU parallelism in Python, use the `multiprocessing` module instead of `threading`.',
    ],
  },
  {
    id: 'tech-py-3',
    category: 'Python',
    question: 'Explain Python generators and the yield keyword.',
    difficulty: 'Medium',
    answer:
      'A generator is a function that produces a sequence of values lazily on demand using the `yield` statement instead of `return`. When called, it returns a generator iterator without running all iterations at once, conserving memory for large datasets.',
    codeSnippet: `def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

gen = count_up_to(3)
print(next(gen)) # 1
print(next(gen)) # 2`,
    keyPoints: [
      'Saves memory by computing values on-the-fly rather than holding them in RAM.',
      'Maintains function execution state between `yield` calls.',
    ],
  },

  // --- C ---
  {
    id: 'tech-c-1',
    category: 'C',
    question: 'What is a pointer in C and why is it used?',
    difficulty: 'Easy',
    answer:
      'A pointer is a variable that stores the memory address of another variable. Pointers are used for dynamic memory allocation, passing arguments by reference to functions, implementing complex data structures (like linked lists and trees), and directly manipulating hardware memory.',
    codeSnippet: `int num = 42;
int *ptr = &num;   // ptr holds the memory address of num

printf("Value: %d\\n", *ptr);  // Dereferencing: outputs 42
printf("Address: %p\\n", ptr); // Prints hex address`,
    keyPoints: [
      '`&` is the address-of operator; `*` is the dereference operator.',
      'Uninitialized pointers point to random memory and are called "wild pointers".',
      'Pointers enable efficient array handling and dynamic memory allocation via `malloc()`.',
    ],
  },
  {
    id: 'tech-c-2',
    category: 'C',
    question: 'What is the difference between malloc() and calloc() in C?',
    difficulty: 'Medium',
    answer:
      '`malloc()` allocates a single continuous block of memory of the specified size in bytes, leaving it uninitialized (containing garbage values). `calloc()` allocates multiple blocks of memory of a given size and initializes all allocated bytes to zero.',
    codeSnippet: `// Allocates 10 integers (garbage values)
int *p1 = (int*) malloc(10 * sizeof(int));

// Allocates 10 integers (all initialized to 0)
int *p2 = (int*) calloc(10, sizeof(int));

free(p1);
free(p2);`,
    keyPoints: [
      'Syntax: `malloc(size_t size)` vs `calloc(size_t num, size_t size)`.',
      'Always check if the return pointer is `NULL` before using it.',
      'Always release dynamically allocated memory with `free()` to prevent memory leaks.',
    ],
  },

  // --- JAVASCRIPT ---
  {
    id: 'tech-js-1',
    category: 'JavaScript',
    question: 'What is the difference between var, let, and const in JavaScript?',
    difficulty: 'Easy',
    answer:
      '`var` is function-scoped (or globally scoped) and gets hoisted with an initial value of `undefined`. `let` and `const` are block-scoped (`{}`) and exist in a "temporal dead zone" until declared. `let` can be reassigned, while `const` cannot be reassigned.',
    codeSnippet: `function example() {
    if (true) {
        var a = 1;
        let b = 2;
        const c = 3;
    }
    console.log(a); // 1 (accessible outside block)
    // console.log(b); // ReferenceError: b is not defined
}`,
    keyPoints: [
      'Modern JavaScript best practice: use `const` by default, `let` when mutation is required, avoid `var`.',
      'For `const` objects and arrays, the reference is constant, but properties/items can still be modified.',
    ],
  },
  {
    id: 'tech-js-2',
    category: 'JavaScript',
    question: 'What is a closure in JavaScript?',
    difficulty: 'Medium',
    answer:
      'A closure is the combination of a function bundled together with references to its surrounding lexical environment. In other words, an inner function retains access to variables from its outer enclosing function even after the outer function has finished executing.',
    codeSnippet: `function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2`,
    keyPoints: [
      'Enables data privacy and encapsulation (like private variables).',
      'Widely used in callbacks, event listeners, and factory functions.',
    ],
  },
  {
    id: 'tech-js-3',
    category: 'JavaScript',
    question: 'How does the JavaScript Event Loop work?',
    difficulty: 'Hard',
    answer:
      'JavaScript is single-threaded and uses an Event Loop to handle asynchronous operations. The Call Stack runs synchronous code. When async tasks (like `fetch` or `setTimeout`) finish, their callbacks are sent to the Microtask Queue (Promises, queueMicrotask) or Macrotask Queue (setTimeout, setInterval). The Event Loop constantly checks: if the Call Stack is empty, it flushes all microtasks first, then processes one macrotask.',
    keyPoints: [
      'Call Stack -> Microtask Queue (Promises) -> Macrotask Queue (Timers/I/O).',
      'Microtasks have higher priority than macrotasks.',
    ],
  },

  // --- HTML & CSS ---
  {
    id: 'tech-html-1',
    category: 'HTML & CSS',
    question: 'What is the CSS Box Model?',
    difficulty: 'Easy',
    answer:
      'The CSS Box Model is the structural foundation for layout and styling on the web. Every HTML element is represented as a rectangular box consisting of four concentric layers: Content, Padding (space inside border), Border, and Margin (space outside border).',
    keyPoints: [
      'Content: where text and images appear.',
      'Padding: transparent area around content inside the border.',
      'Border: stroke around the padding and content.',
      'Margin: clears an area outside the border to separate elements.',
      '`box-sizing: border-box` makes width include content, padding, and border for easier calculation.',
    ],
  },
  {
    id: 'tech-html-2',
    category: 'HTML & CSS',
    question: 'What is the difference between CSS Flexbox and Grid?',
    difficulty: 'Medium',
    answer:
      'CSS Flexbox is primarily designed for one-dimensional layouts (arranging items in either a row OR a column). CSS Grid is a two-dimensional layout system that manages both rows AND columns simultaneously.',
    keyPoints: [
      'Use Flexbox for aligning navigation bars, badges, cards, or items along a single axis.',
      'Use Grid for complex full-page layouts, photo galleries, and multi-column magazine structures.',
    ],
  },
  {
    id: 'tech-html-3',
    category: 'HTML & CSS',
    question: 'What are semantic HTML tags and why should you use them?',
    difficulty: 'Easy',
    answer:
      'Semantic HTML tags clearly describe their meaning and purpose to both the browser and developer (e.g. `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`), instead of generic `<div>` and `<span>` tags.',
    keyPoints: [
      'Improves Accessibility (screen readers can navigate landmark regions).',
      'Boosts SEO (search engines understand document structure).',
      'Makes code cleaner and easier for engineering teams to maintain.',
    ],
  },

  // --- SQL ---
  {
    id: 'tech-sql-1',
    category: 'SQL',
    question: 'What is the difference between WHERE and HAVING in SQL?',
    difficulty: 'Medium',
    answer:
      'The `WHERE` clause filters rows before any grouping or aggregation takes place. The `HAVING` clause filters aggregated groups after the `GROUP BY` clause has been applied and can evaluate aggregate functions like `COUNT()`, `SUM()`, or `AVG()`.',
    codeSnippet: `SELECT department_id, COUNT(*) as employee_count
FROM employees
WHERE salary > 30000            -- Filters individual rows first
GROUP BY department_id
HAVING COUNT(*) > 5;           -- Filters aggregated groups`,
    keyPoints: [
      '`WHERE` cannot be used with aggregate functions (e.g. `WHERE COUNT(*) > 5` is invalid).',
      '`HAVING` is typically paired with `GROUP BY`.',
    ],
  },
  {
    id: 'tech-sql-2',
    category: 'SQL',
    question: 'Explain the different types of SQL Joins.',
    difficulty: 'Easy',
    answer:
      'SQL Joins combine rows from two or more tables based on a related column between them: INNER JOIN (matching rows in both tables), LEFT JOIN (all rows from left table + matched from right), RIGHT JOIN (all rows from right table + matched from left), and FULL OUTER JOIN (all rows when there is a match in either table).',
    keyPoints: [
      'INNER JOIN: returns only intersecting records.',
      'LEFT JOIN: guarantees all records from the left table remain, padding with NULLs if no right match.',
      'CROSS JOIN: returns the Cartesian product of both tables.',
    ],
  },
  {
    id: 'tech-sql-3',
    category: 'SQL',
    question: 'What are primary keys, foreign keys, and unique keys?',
    difficulty: 'Easy',
    answer:
      'A Primary Key uniquely identifies each record in a table and cannot contain NULL values. A Unique Key also enforces uniqueness across rows but can accept one NULL value. A Foreign Key is a field in one table that references the Primary Key of another table, establishing relational integrity.',
    keyPoints: [
      'A table can have only ONE primary key, but multiple unique keys.',
      'Foreign keys prevent orphaned records and enforce referential integrity.',
    ],
  },

  // --- DATA STRUCTURES ---
  {
    id: 'tech-ds-1',
    category: 'Data Structures',
    question: 'What is the difference between an Array and a Linked List?',
    difficulty: 'Easy',
    answer:
      'An Array stores elements in contiguous memory locations, allowing $O(1)$ random access by index, but has fixed size and costly $O(n)$ insertions/deletions. A Linked List stores nodes scattered in memory connected via pointers, allowing $O(1)$ insertions/deletions if the pointer is known, but requires $O(n)$ linear traversal to access elements.',
    keyPoints: [
      'Array: $O(1)$ search by index, $O(n)$ search by value, $O(n)$ insertion/deletion.',
      'Linked List: $O(n)$ access by index, $O(1)$ insertion at head/tail.',
      'Linked lists require extra memory to store pointers (`next`, `prev`).',
    ],
  },
  {
    id: 'tech-ds-2',
    category: 'Data Structures',
    question: 'Explain Stacks and Queues with real-world applications.',
    difficulty: 'Easy',
    answer:
      'A Stack follows LIFO (Last In, First Out) — elements are added and removed from the top. A Queue follows FIFO (First In, First Out) — elements are added at the rear and removed from the front.',
    keyPoints: [
      'Stack applications: Function call call-stack, Undo/Redo operations in text editors, parentheses matching.',
      'Queue applications: CPU task scheduling, print job spooling, Breadth-First Search (BFS) in graphs.',
    ],
  },
  {
    id: 'tech-ds-3',
    category: 'Data Structures',
    question: 'What is a Binary Search Tree (BST) and what is its search time complexity?',
    difficulty: 'Medium',
    answer:
      'A Binary Search Tree is a binary tree where every node has a value greater than all keys in its left subtree and smaller than all keys in its right subtree. On average (for a balanced BST like AVL or Red-Black Tree), search, insertion, and deletion take $O(\\log n)$ time. In the worst case (skewed tree resembling a linked list), it degrades to $O(n)$.',
    keyPoints: [
      'In-order traversal of a BST always yields sorted keys.',
      'Self-balancing trees (AVL, Red-Black) maintain $O(\\log n)$ worst-case bounds.',
    ],
  },

  // --- DBMS ---
  {
    id: 'tech-dbms-1',
    category: 'DBMS',
    question: 'What are ACID properties in a Database Management System?',
    difficulty: 'Medium',
    answer:
      'ACID is a set of properties that guarantee database transactions are processed reliably:\n- Atomicity: "All or nothing" — all operations in a transaction succeed, or the entire transaction is rolled back.\n- Consistency: Transactions bring the database from one valid state to another, upholding all constraints.\n- Isolation: Concurrent transactions do not interfere with each other.\n- Durability: Once a transaction commits, its changes survive system crashes.',
    keyPoints: [
      'Essential for financial and mission-critical databases.',
      'Enforced via transaction logs (WAL), locking mechanisms, and MVCC.',
    ],
  },
  {
    id: 'tech-dbms-2',
    category: 'DBMS',
    question: 'What is Normalization and what are 1NF, 2NF, and 3NF?',
    difficulty: 'Medium',
    answer:
      'Normalization is the systematic process of organizing data in a database to reduce data redundancy and eliminate insert, update, and delete anomalies.',
    keyPoints: [
      '1NF (First Normal Form): Eliminate repeating groups; each column contains atomic (indivisible) values.',
      '2NF (Second Normal Form): Must be in 1NF and have NO partial dependency (all non-key attributes fully depend on the entire primary key).',
      '3NF (Third Normal Form): Must be in 2NF and have NO transitive dependency (non-key attributes must not depend on other non-key attributes).',
    ],
  },
  {
    id: 'tech-dbms-3',
    category: 'DBMS',
    question: 'What is database indexing and how does it improve performance?',
    difficulty: 'Hard',
    answer:
      'An index is a separate data structure (usually a B-Tree or B+ Tree) that the database engine maintains to rapidly locate rows without scanning the entire table (full table scan). While indexes drastically speed up `SELECT` queries with filters, they add slight overhead to `INSERT`, `UPDATE`, and `DELETE` operations because the index must be updated.',
    keyPoints: [
      'Clustered Index: Determines the physical storage order of rows (only 1 per table).',
      'Non-Clustered Index: Separate structure containing pointers to table rows (multiple per table).',
    ],
  },

  // --- COMPUTER NETWORKS ---
  {
    id: 'tech-cn-1',
    category: 'Computer Networks',
    question: 'What is the difference between TCP and UDP?',
    difficulty: 'Easy',
    answer:
      'TCP (Transmission Control Protocol) is connection-oriented, reliable, guarantees packet delivery in order via three-way handshakes and retransmissions, but has higher latency. UDP (User Datagram Protocol) is connectionless, lightweight, and fast, but does not guarantee delivery or packet ordering.',
    keyPoints: [
      'TCP: used for HTTP/HTTPS, Email (SMTP/IMAP), file transfers (FTP) where data integrity is critical.',
      'UDP: used for video streaming, VoIP, DNS queries, and online gaming where speed matters more than occasional lost packets.',
    ],
  },
  {
    id: 'tech-cn-2',
    category: 'Computer Networks',
    question: 'Explain the 7 layers of the OSI Model.',
    difficulty: 'Medium',
    answer:
      'The OSI (Open Systems Interconnection) reference model divides network communication into seven functional layers:\n1. Physical: Raw bit transmission over physical media (cables, radio).\n2. Data Link: Framing, physical MAC addressing, error detection.\n3. Network: Logical IP addressing, routing packets across networks.\n4. Transport: End-to-end data delivery, flow control, TCP/UDP segmentation.\n5. Session: Establishes, manages, and terminates connections.\n6. Presentation: Translation, data encryption, compression (SSL/TLS).\n7. Application: User-facing network services (HTTP, DNS, SSH).',
    keyPoints: [
      'Mnemonic: "Please Do Not Throw Sausage Pizza Away" (Physical to Application).',
      'TCP/IP model condenses this into 4 layers: Network Interface, Internet, Transport, Application.',
    ],
  },
  {
    id: 'tech-cn-3',
    category: 'Computer Networks',
    question: 'What happens when you type a URL into your browser and press Enter?',
    difficulty: 'Hard',
    answer:
      'A multi-step sequence occurs:\n1. URL Parsing & DNS Lookup: Browser checks cache, OS cache, router cache, and queries DNS resolvers to translate the domain name into an IP address.\n2. TCP Handshake: Browser initiates a 3-way TCP handshake (SYN, SYN-ACK, ACK) with the server.\n3. TLS Handshake: If HTTPS, a secure TLS handshake exchanges certificates and negotiates symmetric keys.\n4. HTTP Request: Browser sends an HTTP GET request for the webpage.\n5. Server Response: Web server processes request and sends back HTTP 200 with HTML content.\n6. Browser Rendering: Browser parses HTML to build DOM, parses CSS for CSSOM, executes JavaScript, and renders the visual page.',
    keyPoints: [
      'Commonly asked full-stack and networking interview question testing breadth of systems knowledge.',
      'Touches DNS, TCP, TLS, HTTP, and browser rendering pipeline.',
    ],
  },
];
