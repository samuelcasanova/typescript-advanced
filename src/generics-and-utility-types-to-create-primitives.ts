// https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/features-you-do-not-know/useful-utility-types/shared/domain
export type LiteralObject = Record<string, unknown>;

type Methods<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

type MethodsAndProperties<T> = { [key in keyof T]: T[key] };

export type Properties<T> = Omit<MethodsAndProperties<T>, Methods<T>>;

type ValueObjectValue<T> = {
  [key in keyof T]: T[key] extends { value: unknown }
    ? Pick<T[key], "value">["value"]
    : T[key] extends Array<LiteralObject>
    ? Primitives<T[key][number]>[]
    : T[key] extends LiteralObject
    ? Primitives<T[key]>
    : T[key];
};

export type Primitives<T> = ValueObjectValue<Properties<T>>;

export abstract class StringValueObject {
  constructor(readonly value: string) {}

  toString(): string {
    return this.value;
  }
}

export class CourseId extends StringValueObject {}
export class CourseSlug extends StringValueObject {}
export class CourseTitle extends StringValueObject {}
export class Course {
  constructor(
    readonly id: CourseId,
    readonly title: CourseTitle,
    readonly slug: CourseSlug
  ) {}

  toPrimitives(): Primitives<Course> {
    return {
      id: this.id.value,
      title: this.title.value,
      slug: this.slug.value,
    };
  }
}