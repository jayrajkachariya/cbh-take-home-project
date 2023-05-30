const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  // return default, if no event present
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  // if no partitionKey in object or primitive data type, return hash of an object stringified
  if (!event?.partitionKey) {
    return crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
  }

  let candidate = event.partitionKey;

  // if type of partitionKey is not string, stringify partitionKey and watch length of string generated
  // if length <= 256 return instantly
  // if length > 256 create hash and return

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};

exports.deterministicPartitionKeyOld = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};