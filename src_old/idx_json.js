

module.exports.main = (context, action) => {
  const tables = {
    'foo': 42,
  };

  return {
    response: {
      body: tables,
    }
  };
};
