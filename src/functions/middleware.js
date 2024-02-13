// import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

// export const onRequest = (context) => {

//     mailChannelsPlugin({
//         personalizations: [
//             {
//                 to: [{ name: "Hassaan", email: "hassaan@swyftlogic.org" }],
//             },
//         ],
//         from: {
//             name: "Info",
//             email: "info@orlandotransportationsservice.com",
//         },
//         respondWith: () => {
//             return new Response(
//                 `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
//             );
//         },
//     })(context);
// };