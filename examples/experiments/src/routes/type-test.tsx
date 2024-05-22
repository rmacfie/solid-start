import { json } from "@solidjs/router";
import { GET } from "@solidjs/start";
import { getRequestEvent } from "solid-js/web";

export const test = GET(async () => {
  "use server";

  const requestEvent = getRequestEvent()!;

  // the interesting part here is that the type of test1 and test2 is
  // inferred to be "foobar", as defined in global.d.ts, and not "any" or a
  // generic string
  const test1 = requestEvent.locals.testLocal;
  const test2 = import.meta.env.TEST_ENV;

  return json({});
});

export default function TypeTest() {
  return (
    <>
      <h1>Type test</h1>
    </>
  );
}
