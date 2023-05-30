const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

// With Partition Key in Object
describe("withPartitionKey", () => {
  it("For partition key length < 256 digits, No Hashing!", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "OJGuYyQ"
    });
    expect(trivialKey).toBe("OJGuYyQ");
  });
});

describe("withLengthyPartitionKey", () => {
  it("For partition key length > 256 digits, Returns Hash!", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "OJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDG"
    });
    expect(trivialKey).toBe("84be0bcd36619073633c517ea6ec5c95b99d33dadaf269ec6307fd62ef0dfbe094aa5fb47f688820b2a9b382f73f69a891a772ebe872d6a625a72cf34da30bf5");
  });
});

describe("nonStringPartitionKey", () => {
  it("Returns stringified verion of partition key if not string provided and total length of stringified json < 256", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: {
        abc: 'xyz'
      }
    });
    expect(trivialKey).toBe(`{"abc":"xyz"}`);
  });
});

describe("nonStringLengthyPartitionKey", () => {
  it("Returns hash of stringified verion of partition key, if not string provided and total length of stringified json > 256", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: {
        abc: 'OJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDG'
      }
    });
    expect(trivialKey).toBe("ddf2af3f1ef8be19f719776e96b298ee40c80d9dfe617daca8c07ba1b32d9c22e854161f51a14c4362d845caebcb61b3604616ee0d5d749d3762c9065b70069d");
  });
});

// Without Partition Key in object
describe("withoutPartitionKeyInObject", () => {
  it("Returns Hash of an object stringified, stringified length could be any length hashed string will be of length 128", () => {
    const trivialKey = deterministicPartitionKey({
      "NO_PARTITION_KEY": "RANDOM_STRING"
    });
    expect(trivialKey).toBe("ef2b522e918c1fa80374de6ffdc401773458ddca5f55c2d371488244dc15f53df37f60bfc00f439ed3cdc7a20a57a9fc21a5f6a78d2199f2e3c2ce62e9be4e08");
  });
});

// Random event data
describe("withoutPartitionKeyInObject", () => {
  it("Returns Hash of an random data", () => {
    const trivialKey = deterministicPartitionKey("RANDOM_DATA");
    expect(trivialKey).toBe("e3b39597d5b726c31a4aeb69b812949df1aea9f8dee5089db658f6ff374ffc8def1dcfc508d5da46a58dfdf406806fa65a43f7efa293a3e13086177629b70159");
  });
});
