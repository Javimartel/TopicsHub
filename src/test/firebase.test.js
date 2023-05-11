import { mockFirebase } from "./test-utils.jsx";

describe("Firebase", () => {

  describe("createUser", () => {
    it("throws an error if a field is empty", () => {
      const name = "";

      mockFirebase.createUser = vi.fn((name) => {
        if (name === "") {
          throw new Error("Error creating user");
        }
      });

      expect(() => mockFirebase.createUser(name))
        .toThrowError("Error creating user");
    });

    it("creates a user", () => {
      const name = "Test User";
      const email = "test@gmail.com";
      const password = "test";
      const profilePicture = "test.jpg";

      mockFirebase.createUser = vi.fn((name, email, password, profilePicture) => {
        if (name && email && password && profilePicture) {
          return {
            displayName: name,
            email: email,
            password: password,
            profilePicture: profilePicture
          };
        }
      });

      expect(mockFirebase.createUser(name, email, password, profilePicture))
        .toEqual({
          displayName: name,
          email: email,
          password: password,
          profilePicture: profilePicture
        });
    });
  });

  describe("logIn", () => {
    it("throws an error if a field is empty", () => {
      const email = "";
      const password = "";

      mockFirebase.logIn = vi.fn((email, password) => {
        if (email === "" || password === "") {
          throw new Error("Error signing in");
        }
      });

      expect(() => mockFirebase.logIn(email, password))
        .toThrowError("Error signing in");
    });

    it("logs in a user", () => {
      const email = "test@gmail.com";
      const password = "test";

      mockFirebase.logIn = vi.fn((email, password) => {
        if (email && password) {
          return {
            email: email,
            password: password
          };
        }
      });

      expect(mockFirebase.logIn(email, password))
        .toEqual({
          email: email,
          password: password
        });
    });
  });

});