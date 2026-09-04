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

---

# Commenting & Documentation #41

## When should you add comments?

Comments should be added when the code alone cannot explain why a decision was made — for example, a business rule, a legal requirement, or a known workaround for a library bug.
They are also useful for documenting public functions with docstrings, so other developers know what inputs are expected, what gets returned, and what exceptions might be raised. Non-obvious technical choices, such as rounding floats to avoid precision errors or filtering out specific event types in a stream, also deserve a short comment explaining the reasoning.

## When should you avoid comments and instead improve the code?

If you find yourself writing a comment to explain what a variable or function does, that is a signal to rename it instead — good naming makes the comment unnecessary. Commented-out old code should always be deleted rather than kept, since Git preserves history and stale code only adds confusion.
When a comment simply repeats what the code already says, it adds no value and should be removed, keeping the codebase clean and focused.

---

# Refactoring Code for Simplicity #42

## What made the original code complex?

Too many if-else format and variable name is not meaningful, hard to read and understand the function.
There are some magic number in it

## How did refactoring improve it?

Refactoring improved the naming by replacing single-letter variables like uid, t, and c with descriptive names like user_id, user_type, and coupon, making the code self-explanatory without needing comments. The deeply nested if/else structure was replaced with Guard Clauses and a dictionary lookup, flattening the logic so the core calculation is immediately visible instead of buried inside multiple layers. Returning None on failure was replaced with explicit ValueError exceptions, making error handling clearer and debugging faster since the caller now knows exactly what went wrong and why.

---

# Avoiding Code Duplication $43

## What were the issues with duplicated code?

when a bug is found it must be fixed in every copy — miss one and the behaviour becomes inconsistent.

## How did refactoring improve maintainability?

If developer found code duplication, they should refactor all the copy code.
When developer refactor the duplication code into a function, they can use it in everywhere and fix it once.
