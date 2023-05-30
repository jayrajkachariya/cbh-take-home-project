const { deterministicPartitionKeyOld, deterministicPartitionKey } = require("./dpk");

// No partition key
console.log(deterministicPartitionKeyOld() === deterministicPartitionKey(), deterministicPartitionKey());

// Without partition key
console.log(deterministicPartitionKeyOld({
  "NO_PARTITION_KEY": "RANDOM_STRING"
}) === deterministicPartitionKey({
  "NO_PARTITION_KEY": "RANDOM_STRING"
}), deterministicPartitionKey({
  "NO_PARTITION_KEY": "RANDOM_STRING"
}));

// Without partition key: primitive data
console.log(deterministicPartitionKeyOld("RANDOM_DATA") === deterministicPartitionKey("RANDOM_DATA"), deterministicPartitionKey("RANDOM_DATA"));

// Non string partition key
console.log(deterministicPartitionKeyOld({
  partitionKey: {
    abc: 'OJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDG'
  }
}) === deterministicPartitionKey({
  partitionKey: {
    abc: 'OJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDG'
  }
}), deterministicPartitionKey({
  partitionKey: {
    abc: 'OJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDG'
  }
}));

// Lenhthy partition key
console.log(deterministicPartitionKeyOld({
  partitionKey: 'OJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDG'
}) === deterministicPartitionKey({
  partitionKey: 'OJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDG'
}), deterministicPartitionKey({
  partitionKey: 'OJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDGmEWlChViAqroLSKXwbfyJUIHZNQTVnmFzgOUiMRJLQtGkCsWeaXBdPvhYjOJGuYyQRiUejrLZCqflFWwaAgsSzDXtnHxPdbEhNvckIomTKMpVBsRjxuYtNzFpDG'
}));

// Short partition key
console.log(deterministicPartitionKeyOld({
  partitionKey: 'OJGuYyQ'
}) === deterministicPartitionKey({
  partitionKey: 'OJGuYyQ'
}), deterministicPartitionKey({
  partitionKey: 'OJGuYyQ'
}));