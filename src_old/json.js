

module.exports.main = (context, action) => {

  const tables = {
    'foo': 43,
  };

  return {
    response: {
      body: tables,
    }
  };
};
