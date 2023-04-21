export const sayHello = (): void => {
  console.log(`Hello ${process.env.USER ?? 'world'} from node ${process.version}`)
}

sayHello()
