import { Container, Provider, config, env } from "@kasejs/core";

declare module "@kasejs/core" {
  interface Configuration {
    "my-provider": {
      message: string;
    };
  }
}

export class MyProvider extends Provider {
  public config() {
    return {
      "my-provider": {
        message: env<string>("MY_PROVIDER_MESSAGE", "Hello, world!"),
      },
    };
  }

  public register(container: Container) {
    console.log(
      "Registering provider with message:",
      config.get("my-provider.message"),
    );
  }

  public async boot(container: Container) {
    console.log(
      "Booting provider with message:",
      config.get("my-provider.message"),
    );
  }
}
