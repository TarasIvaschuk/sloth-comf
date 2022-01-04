//domain/.netlify/functions/hello
exports.handler = async (event, context) => {
  console.log("event:", event);
  console.log("context:", context);

  return {
    statusCode: 200,
    body: "hello world",
  };
};
