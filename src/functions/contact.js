export const prerender = false;

const handler = async function (event) {
  
    try {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          msg: "Message sent successfully",
        }),
      };
    } catch (err) {
      return {
        statusCode: err.code,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ msg: err.message }),
      };
    }
  };
  
  export { handler };