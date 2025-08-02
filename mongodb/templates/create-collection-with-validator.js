// MongoDB collection creation template with JSON Schema validation
// Includes:
// - All common bsonTypes
// - enum, pattern, minLength, maxLength, minimum, maximum
// - nested object and nested array of objects
// - timestamps
// - validator settings
// Use this as a reference when designing collections
// bsonType => "string", "number", "bool", "object", "array", "date", "objectId", "int", "long", "double", "null"

db.createCollection("yourCollectionName", {
  validator: {
    $jsonSchema: {
      bsonType: "object", // Root type must be object for documents
      required: ["name", "email", "password", "role", "createdAt", "updatedAt"],
      properties: {
        // Basic string field
        name: {
          bsonType: "string",
          minLength: 2,
          maxLength: 100,
          description: "Name must be a string between 2–100 characters",
        },

        // String with pattern (email)
        email: {
          bsonType: "string",
          pattern: "^\\S+@\\S+\\.\\S+$", // basic email regex
          description: "Must be a valid email format",
        },

        // String with length constraint (e.g. password)
        password: {
          bsonType: "string",
          minLength: 6,
          description: "Password must be at least 6 characters long",
        },

        // Simple string
        profilePic: {
          bsonType: "string",
          description: "Image URL or file path (optional)",
        },

        // ENUM - limits values
        role: {
          bsonType: "string",
          enum: ["student", "instructor", "admin"], // ⬅️ only allowed values
          description: "Role must be one of: student, instructor, admin",
        },

        // Boolean field
        isVerified: {
          bsonType: "bool",
          description: "Boolean to check if email is verified",
        },

        // Number with range
        age: {
          bsonType: "int",
          minimum: 13,
          maximum: 100,
          description: "Age must be between 13 and 100",
        },

        // Optional array of strings
        tags: {
          bsonType: "array",
          items: { bsonType: "string" },
          description: "Array of tag strings",
        },

        // ✅ NESTED OBJECT example
        address: {
          bsonType: "object",
          required: ["district", "postalCode"],
          properties: {
            district: { bsonType: "string" },
            postalCode: { bsonType: "string" },
            street: { bsonType: "string" },
          },
          description: "User address info (optional but validated if present)",
        },

        // ✅ NESTED ARRAY of OBJECTS example
        enrollments: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["courseId", "enrolledAt"],
            properties: {
              courseId: { bsonType: "objectId" },
              enrolledAt: { bsonType: "date" },
              progress: {
                bsonType: "int",
                minimum: 0,
                maximum: 100,
              },
            },
          },
          description: "Array of course enrollments (optional)",
        },

        // Timestamps
        createdAt: {
          bsonType: "date",
          description: "Date when document was created",
        },
        updatedAt: {
          bsonType: "date",
          description: "Date when document was last updated",
        },
      },

      // Prevent insertion of unexpected/extra fields
      additionalProperties: false,
    },
  },

  // Validation settings:

  // "strict"  → Validate inserts and all updates
  // "moderate" → Validate inserts, and updates only if field is present
  // "off"     → Disable validation
  validationLevel: "strict",

  // "error" → Reject documents that fail validation
  // "warn"  → Allow them but log a warning
  validationAction: "error",
});
