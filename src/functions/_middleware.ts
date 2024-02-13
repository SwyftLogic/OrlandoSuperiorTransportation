import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

const handleMailChannelsPlugin = async (context) => {
  //Turnstile
  debugger;
  const request = context.request;
  console.log("enter hmp");
  const body = await request.formData();
  // Turnstile injects a token in "cf-turnstile-response".
  const token = body.get("cf-turnstile-response");
  const ip = request.headers.get("CF-Connecting-IP");

  // Validate the token by calling the "/siteverify" API.
  let formData = new FormData();
  formData.append("secret", "0x4AAAAAAARyPTQ7VAXpuw53CHh-idHnfZ0");
  formData.append("response", token);
  formData.append("remoteip", ip);

  const result = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      body: formData,
      method: "POST",
    }
  );
  const outcome = await result.json();
  if (!outcome.success) {
    console.log("turnstile invalid");
    return new Response("The provided Turnstile token was not valid!");
  } else {
    return new Response("Valid");
  }

  //MailChannel
  // return mailChannelsPlugin({
  //     personalizations: [
  //         {
  //             to: [{ name: "Hassaan", email: "hassaan@swyftlogic.org" }],
  //         },
  //     ],
  //     from: {
  //         name: "Info",
  //         email: "info@orlandosuperiortransportation.com",
  //     },
  //     subject: "New Contact",
  //     respondWith: () => {
  //         console.log('sending response');
  //         return new Response(
  //             `Thank you for showing interest in our product.`
  //         );
  //     },
  // })(context);
};

export const onRequest = [handleMailChannelsPlugin];
