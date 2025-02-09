const userschema = {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      unique: true,
    },
    {
      name: "password",
      title: "Password",
      type: "string",
    },
  ],
};
export default userschema