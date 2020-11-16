export interface AssertionBase {
  should: string;
  given: string;
}

export interface TestCase<I, O> {
  input: I;
  expected: O;
}

export interface AssertionWithSingleTestCase<I, O> extends AssertionBase {
  cases: TestCase<I, O>;
}

export interface AssertionWithMultipleTestCases<I, O> extends AssertionBase {
  cases: TestCase<I, O>[];
}

export type AssertionKinds<I, O> =
  | AssertionWithSingleTestCase<I, O>
  | AssertionWithMultipleTestCases<I, O>;

export interface TestSpecification<I, O> {
  testCases: AssertionKinds<I, O>[];
}
