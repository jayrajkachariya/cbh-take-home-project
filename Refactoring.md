# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I have updated code with function `deterministicPartitionKey` and kept old function as new name function `deterministicPartitionKeyOld` to keep comparison. Also, udpated few test cases. in [`dpk.test.js`](dpk.test.js)

Here, hash of string means hash created by
crypto.createHash("sha3-512").update(string).digest("hex");

These are the test cases being followed in the code.

Cases:

case 1: Returns the literal '0' when given no input.

case 2: For partition key in object length > 256 digits,Return hash of the same key.

case 3: For partition key in object length <= 256 digits, No Hashing! Return the same key.

case 4: For no partition key in object return stringified object if stringified length !> 256.

case 5: For no partition key in object return hash of a stringified object if stringified length > 256.

case 6: If no partitionKey in object or primitive data type as parameter to function, return hash of an input stringified.
