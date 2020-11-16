import {
  AssertionBase,
  AssertionKinds,
  AssertionWithSingleTestCase,
  TestSpecification,
} from "./test-case.model";

function constructExpectation({ should, given }: AssertionBase) {
  return `should ${should} given ${given}`;
}

function isAssertionWithSingleTestCase<I, O>(
  assertion: AssertionKinds<I, O>
): assertion is AssertionWithSingleTestCase<I, O> {
  // assert that assertion cases isn't an array, i.e. there's only one test case
  return !Array.isArray(assertion.cases);
}

export function describeTestcase<I, O>(
  description: string,
  testTarget: Function,
  { testCases }: TestSpecification<I, O>
) {
  describe(description, () => {
    testCases.forEach((testCase) => {
      it(constructExpectation(testCase), () => {
        if (isAssertionWithSingleTestCase(testCase)) {
          expect(testTarget(testCase.cases.input)).toEqual(
            testCase.cases.expected
          );
          return;
        }

        testCase.cases.forEach(({ input, expected }) => {
          expect(testTarget(input)).toEqual(expected);
        });
      });
    });
  });
}
