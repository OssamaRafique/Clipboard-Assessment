const {
  deterministicPartitionKey,
  TRIVIAL_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
} = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  });

  it("returns the partition key when it exists", () => {
    const event = { partitionKey: "test-partition-key" };
    expect(deterministicPartitionKey(event)).toEqual("test-partition-key");
  });

  it("returns a deterministic partition key when no partition key exists", () => {
    const event = { data: "test-data" };
    const hash = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    const resolvedValue = deterministicPartitionKey(event);
    expect(resolvedValue).toEqual(hash);
    // Verify sha-512 hash
    expect(resolvedValue).toEqual(expect.stringMatching(/^[0-9a-f]{128}$/));
  });

  it("returns a deterministic partition key of length <= MAX_PARTITION_KEY_LENGTH", () => {
    const event = { data: "a".repeat(500) };
    const partitionKey = deterministicPartitionKey(event);

    expect(partitionKey.length).toBeLessThanOrEqual(MAX_PARTITION_KEY_LENGTH);
    expect(typeof partitionKey).toEqual("string");
    // Verify sha-512 hash
    expect(partitionKey).toEqual(expect.stringMatching(/^[0-9a-f]{128}$/));
  });
});
