import { MyProvider } from "./providers/my.provider.ts";
import { configure, LoggerProvider } from "@kasejs/core";

/**
 * Global configuration initialization.
 *
 * The `config` object will be available globally in service providers
 *  and will have automatic suggestions by the IDE when using the
 * `config.get("path.to.property")` method.
 */
configure({
  providers: [
    /**
     * Core providers
     */
    LoggerProvider,
    MyProvider,
  ],
});
