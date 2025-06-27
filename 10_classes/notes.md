# JS and classes

## Does JavaScript have classes?

Yes, JavaScript does have classes, introduced in ECMAScript 2015 (ES6), but they are primarily syntactic sugar over its existing prototype-based inheritance model. This means that while the `class` keyword allows developers to write object-oriented code in a more familiar and cleaner syntax, it doesn't introduce a fundamentally new way of handling inheritance. Under the hood, JavaScript still uses prototypes to manage inheritance and method sharing. Classes in JavaScript support features like constructors, inheritance using `extends`, method overriding with `super`, static methods, and getter/setter functions. They offer a more organized and readable approach to defining objects and their behavior, especially for developers coming from class-based languages like Java or C++, but the core language mechanics remain prototype-driven.

## OOPs

## Object

- collection of properties and methods i.e methods means functions and properties means variable
- toLowerCase

## why use OoPs

## parts of OOPs

Object literal

- Constructor Functions
  -Prototypes
- Classes
- Instances(new, this)

## 4 Pillars

Abstraction -  
Showing only the essential features and hiding the complex background details.
Example (Real life):
When you use a phone, you just tap icons to call or text—you don’t see the internal circuits or code.

```bash
function fetchData() {
  return fetch("https://api.example.com/data")
    .then(res => res.json());
}
```

Encapsulation -
Keeping the data (variables) and code (functions) that works on the data in one unit,
and restricting access to some parts.
Example (Real life):
A capsule holds different medicines inside one shell. You can’t directly access the ingredients.

```bash
class Person {
  private String name;

  public void setName(String newName) {
    name = newName;
  }

  public String getName() {
    return name;
  }
}
```

Inheritance -
Definition: One class (child) inherits properties and behavior from another class (parent).
Example (Real life):
A dog is an animal. A dog inherits general features like breathing, moving (from animal), but also has its own bark.

```bash
class Animal {
  void eat() {
    System.out.println("This animal eats food.");
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println("The dog barks.");
  }
}
```

Polymorphism
Definition: One function or method behaves differently based on the object or data.
Example (Real life):
The word “run” means different things: a person runs, a program runs, a machine runs.

```bash
class Animal {
  void sound() {
    System.out.println("Some sound...");
  }
}

class Dog extends Animal {
  void sound() {
    System.out.println("Bark");
  }
}

class Cat extends Animal {
  void sound() {
    System.out.println("Meow");
  }
}

```
