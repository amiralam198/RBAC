
// File: SignupPage.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignupPage = () => {
  const [formData, setFormData] = useState({ email: "", username: "", password: "", role: "user" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Something went wrong");

      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96 shadow-lg">
        <CardContent>
          <h2 className="text-xl font-semibold text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
          <p className="text-center mt-2 text-sm">
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
