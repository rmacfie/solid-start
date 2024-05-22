type TestString = "foobar";

declare global {
  interface ImportMetaEnv {
    TEST_ENV: TestString;
  }
}

declare module "@solidjs/start/server" {
  interface RequestEventLocals {
    testLocal: TestString;
  }
}

export { };

