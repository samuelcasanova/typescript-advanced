// From https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md

interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property

