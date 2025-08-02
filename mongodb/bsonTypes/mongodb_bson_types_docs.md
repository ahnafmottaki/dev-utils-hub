---

# 📄 int.md

### 📘 BSON Type: `int`

- **Type**: 32-bit signed integer
- **Range**: `−2,147,483,648` to `2,147,483,647`
- **Decimal Support**: ❌ No
- **Typical Uses**: Small counters, age, quantity, index numbers

### ✅ Usage in Schema:

```js
quantity: {
  bsonType: "int",
  minimum: 0,
  description: "Must be a positive whole number"
}
```

### ✅ Inserting into MongoDB:

```js
db.items.insertOne({ quantity: NumberInt(42) });
```

---

# 📄 long.md

### 📘 BSON Type: `long`

- **Type**: 64-bit signed integer
- **Range**: ±9.2 × 10¹⁸
- **Decimal Support**: ❌ No
- **Typical Uses**: Timestamps, view counters, IDs, anything that may exceed 32-bit

### ✅ Usage in Schema:

```js
views: {
  bsonType: "long",
  description: "Must be a large whole number"
}
```

### ✅ Inserting into MongoDB:

```js
db.stats.insertOne({ views: NumberLong("123456789012345") });
```

---

# 📄 double.md

### 📘 BSON Type: `double`

- **Type**: 64-bit floating point
- **Supports Decimals**: ✅ Yes
- **Typical Uses**: Prices, ratings, measurements

### ✅ Usage in Schema:

```js
price: {
  bsonType: "double",
  minimum: 0,
  description: "Price must be a non-negative decimal"
}
```

### ✅ Inserting into MongoDB:

```js
db.products.insertOne({ price: 199.99 });
```

---

# 📄 string.md

### 📘 BSON Type: `string`

- **Type**: UTF-8 encoded string
- **Typical Uses**: Names, emails, URLs, etc.

### ✅ Usage in Schema:

```js
email: {
  bsonType: "string",
  pattern: "^\\S+@\\S+\\.\\S+$",
  description: "Must be a valid email address"
}
```

### ✅ Insert Example:

```js
db.users.insertOne({ email: "ahnaf@example.com" });
```

---

# 📄 bool.md

### 📘 BSON Type: `bool`

- **Type**: Boolean (true or false)
- **Typical Uses**: Flags like `isVerified`, `isActive`, `isPublished`

### ✅ Usage in Schema:

```js
isVerified: {
  bsonType: "bool",
  description: "Must be true or false"
}
```

### ✅ Insert Example:

```js
db.users.insertOne({ isVerified: true });
```

---

# 📄 date.md

### 📘 BSON Type: `date`

- **Type**: Date object stored as milliseconds since Unix epoch
- **Typical Uses**: `createdAt`, `updatedAt`, `publishedAt`

### ✅ Usage in Schema:

```js
createdAt: {
  bsonType: "date",
  description: "Must be a valid date"
}
```

### ✅ Insert Example:

```js
db.logs.insertOne({ createdAt: new Date() });
```

---

# 📄 objectId.md

### 📘 BSON Type: `objectId`

- **Type**: 12-byte unique identifier
- **Typical Uses**: `_id` fields, references to other documents

### ✅ Usage in Schema:

```js
userId: {
  bsonType: "objectId",
  description: "Must be a valid MongoDB ObjectId"
}
```

### ✅ Insert Example:

```js
db.enrollments.insertOne({ userId: ObjectId("64c9d3...abf3") });
```

---

# 📄 array.md

### 📘 BSON Type: `array`

- **Type**: Ordered list of values (can be strings, numbers, objects, etc.)
- **Typical Uses**: Tags, lists, nested documents

### ✅ Usage in Schema:

```js
tags: {
  bsonType: "array",
  items: { bsonType: "string" },
  description: "List of tags"
}
```

### ✅ Insert Example:

```js
db.articles.insertOne({ tags: ["mongodb", "schema", "validation"] });
```

---

# 📄 object.md

### 📘 BSON Type: `object`

- **Type**: Embedded document
- **Typical Uses**: Address, profile info, settings

### ✅ Usage in Schema:

```js
address: {
  bsonType: "object",
  required: ["street", "city"],
  properties: {
    street: { bsonType: "string" },
    city: { bsonType: "string" },
    postalCode: { bsonType: "string" }
  }
}
```

### ✅ Insert Example:

```js
db.users.insertOne({
  address: {
    street: "123 Main St",
    city: "Dhaka",
    postalCode: "1207"
  }
});
```

---

