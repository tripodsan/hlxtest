

module.exports.main = (context, action) => {
  context.request.headers.authorization = 'xxx';
  return {
    response: {
      body: context
    }
  };
};
