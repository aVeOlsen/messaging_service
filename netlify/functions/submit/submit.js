exports.handler = async (event) => {
  try {

    const requestBody = event.body ? JSON.parse(event.body) : event
    console.log(requestBody)
    if(requestBody)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${requestBody}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}