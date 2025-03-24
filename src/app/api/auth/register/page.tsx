import { dbConnect } from "@/db/dbConnect";
import User from "@/db/models/User";
import bcrypt from "bcryptjs";

export default async function RegisterPage() {
  // Function to handle form submission
  const addUser = async (addUserForm: FormData) => {
    "use server";

    try {
      // Extract user data from the form
      const name = addUserForm.get("name")?.toString();
      const tel = addUserForm.get("tel")?.toString(); // Ensure it matches your model's "telnumber"
      const email = addUserForm.get("email")?.toString();
      const password = addUserForm.get("password")?.toString();
      const role = addUserForm.get("role") ? "admin" : "user";

      // Validate required fields
      if (!name || !tel || !email || !password) {
        console.error("Missing required fields");
        return;
      }

      await dbConnect();

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.error("User already exists");
        return;
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user in the database
      const user = await User.create({
        name,
        telnumber: tel, // Ensure this matches the model's field name
        email,
        password: hashedPassword,
        role,
      });

      console.log("User added successfully:", user);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-lg w-96" action={addUser}>
        <div className="text-xl text-blue-700 mb-4 text-center">Create User</div>

        {/* Name Field */}
        <div className="flex items-center my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Telephone Field */}
        <div className="flex items-center my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">
            Telephone
          </label>
          <input
            type="text"
            id="tel"
            name="tel"
            placeholder="Telephone"
            required
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Email Field */}
        <div className="flex items-center my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Admin Role Checkbox */}
        <div className="flex items-center my-2">
          <input type="checkbox" id="role" name="role" className="mr-2" />
          <label className="text-gray-700" htmlFor="role">
            Admin
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded mt-4"
        >
          Create User
        </button>
      </form>
    </div>
  );
}
