// MongoDB collection creation template with full JSON Schema validation
// Includes basic types, enums, timestamps, nested object, nested array of objects
// Save this in your utils repo for reference

db.createCollection("yourCollectionName", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password", "role", "createdAt", "updatedAt"],
      properties: {
        name: {
          bsonType: "string",
          minLength: 2,
          maxLength: 100,
          description: "Name must be a string between 2–100 characters",
        },
        email: {
          bsonType: "string",
          pattern: "^\\S+@\\S+\\.\\S+$",
          description: "Must be a valid email format",
        },
        password: {
          bsonType: "string",
          minLength: 6,
          description: "Password must be at least 6 characters long",
        },
        profilePic: {
          bsonType: "string",
          description: "Image URL or file path (optional)",
        },
        role: {
          bsonType: "string",
          enum: ["student", "instructor", "admin"], // ⬅️ ENUM: only allowed values
          description: "Role must be one of: student, instructor, admin",
        },
        isVerified: {
          bsonType: "bool",
          description: "Boolean to check if email is verified",
        },

        // ✅ Nested object example: address
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

        // ✅ Nested array of objects: enrollments
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

        // ✅ Timestamps
        createdAt: {
          bsonType: "date",
          description: "Date when document was created",
        },
        updatedAt: {
          bsonType: "date",
          description: "Date when document was last updated",
        },
      },
      additionalProperties: false, // ⬅️ Reject any fields not defined above
    },
  },

  // ⬇️ Validation settings
  validationLevel: "strict", // "strict" | "moderate" | "off"
  validationAction: "error", // "error" | "warn"
});
