const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const createHash = (data) =>
  crypto.createHash("sha3-512").update(data).digest("hex");

exports.deterministicPartitionKey = (event) => {
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  return typeof event.partitionKey === "string" &&
    event.partitionKey.length <= MAX_PARTITION_KEY_LENGTH
    ? event.partitionKey
    : createHash(JSON.stringify(event));
};

exports.TRIVIAL_PARTITION_KEY = TRIVIAL_PARTITION_KEY;
exports.MAX_PARTITION_KEY_LENGTH = MAX_PARTITION_KEY_LENGTH;
