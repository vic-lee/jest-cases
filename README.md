# jest-cases

Utility library that facilitates test-case-driven development.

## Description

`describeTestcase` helps you highlight the essence of a test: inputs and outputs. Focus on coming up with more test cases, and let the library do the assertions for you.

```ts
function toCamelCase(s: string) {
    // ...
}

describeTestcase("utils/toCamelCase", toCamelCase, {
    testCases: [
        {
            should: "return an empty string",
            given: "an empty string",
            cases: { input: "", expected: "" }
        },
        {
            should: "transform input to camel case strings",
            given: "a non-empty string",
            cases: [
                { input: "Hello world", expected: "helloWorld" },
                { input: "word", expected: "word" },
                { input: "camelCased", expected: "camelCased" }
            ]
        }
    ]
})
```

Instead of:

```ts
describe("utils/toCamelCase", () => {
    it("should return an empty string given an empty string", () => {
        expect(toCamelCase("")).toEqual("");
    })

    it("should transform input to camel case strings given a non-empty string", () => {
        expect(toCamelCase("Hello World")).toEqual("helloWorld");
        expect(toCamelCase("word")).toEqual("word");
        expect(toCamelCase("camelCased")).toEqual("camelCased");

    })
})
```
