# Writing Unit Tests for Clean Code #39

## How do unit tests help keep code clean?

If a function is hard to test, it usually means it does too much. Writing tests pushes you to break functions into smaller, single-purpose pieces.
Prevents duplicate code in your project, and also help people refactoring their project.

## What issues did you find while testing?

I didn't add any error message, which will made other developer confused
Boundary values weren't initially handled

---

# Handling Errors & Edge Cases #40

## What was the issue with the original code?

The original calculate_discount function did not validate the types of its inputs, meaning passing a string or None would cause the program to crash with an unhelpful error message. It also had no explicit handling for a price of zero, leaving the behaviour unclear to anyone reading or using the function. The function's docstring did not mention what types were accepted or what would happen with edge case inputs like 0 or decimal discount values. These missing checks meant that invalid inputs could slip through undetected, making bugs harder to trace and fix later.

## How does handling errors improve reliability?

Proper error handling ensures that when invalid inputs are passed, the function fails immediately with a clear, descriptive message instead of crashing unexpectedly somewhere else in the code. This makes debugging much faster because the error points directly to the source of the problem rather than a confusing downstream failure. It also makes the code more predictable — other developers know exactly what inputs are valid and what will happen if they pass something wrong.
