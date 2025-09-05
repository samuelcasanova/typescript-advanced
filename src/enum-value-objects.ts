export abstract class EnumValueObject<T> {
  readonly value: T;

  constructor(value: T, public readonly validValues: T[]) {
    this.value = value;
    this.checkValueIsValid(value);
  }

  public checkValueIsValid(value: T): void {
    if (!this.validValues.includes(value)) {
      throw new Error(`Value ${value} is invalid`);
    }
  }
}

export enum Operator {
  EQUAL = "EQUAL",
  NOT_EQUAL = "NOT_EQUAL",
  GT = "GT",
  LT = "LT",
  CONTAINS = "CONTAINS",
  NOT_CONTAINS = "NOT_CONTAINS",
}

export class FilterOperator extends EnumValueObject<Operator> {
  constructor(value: Operator) {
    super(value, Object.values(Operator));
  }

  static fromValue(value: keyof typeof Operator): FilterOperator {
    return new FilterOperator(Operator[value]);
  }
}

const ltFilter = FilterOperator.fromValue("LT");

const imposibleInvalidFilter = FilterOperator.fromValue("INVALID_FILTER");
