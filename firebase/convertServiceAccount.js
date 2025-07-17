const convertServiceAccount = (base64ServiceKey) => {
  return JSON.parse(Buffer.from(base64ServiceKey, "base64").toString("utf-8"));
};

module.exports = convertServiceAccount;
