type Command = {
    name: string,
    params: CommandParams
}

type CommandHandler = {
    name: string,
    handler: new (...params: any) => CommandParams
}

class CommandParams {}
class CreateCourseCommandParams extends CommandParams {
    constructor(public readonly name: string, public readonly category: 'Best Practices' | 'Coding', public readonly description: string) {
        super()
    }
}
class CreateUserCommandParams extends CommandParams {
    constructor (public readonly name: string, public readonly email: string) {
        super()
    }
}

function setupCommandBus<
  const CH extends CommandHandler
>(handlers: { handlers: CH[] }) {
  const handle = <
    TName extends CH["name"],
    TParams extends Extract<CH, { name: TName }>["handler"]
  >(
    name: TName,
    params: InstanceType<TParams>
  ) => {
    console.log(name, params);
  };

  return { handle };
}



const commandBus = setupCommandBus({
    handlers: [
        { name: 'createUser', handler: CreateUserCommandParams },
        { name: 'createCourse', handler: CreateCourseCommandParams },
    ]
})

commandBus.handle('createCourse', { name: 'TDD', category: 'Best Practices', description: 'Test Driven Development'})