export const inputs = [
  {
    id: 1,
    label: "First Name",
    name: "firstName",
    type: "text",
    placeholder: "Enter Your First Name",
    required:true
  },
  {
    id: 2,
    label: "middle Name",
    name: "middleName",
    type: "text",
    placeholder: "Enter Your Middle Name",
    required:true

  },
  {
    id: 3,
    label: "Last Name",
    name: "lastName",
    type: "text",
    placeholder: "Enter Your Last Name",
    required:true

  },
  {
    id: 4,
    label: "email",
    name: "email",
    type: "email",
    placeholder: "Enter Your Email",
    pattern:"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
    required:true
  },
  {
    id: 5,
    label: " Age",
    name: "age",
    type: "tel",
    maxLength:"3",
    placeholder: "Enter Your Age",
    required:true,
    pattern:"/^[0-9]{0,3}$/"

  },

  {
    id: 6,
    label: "Phone",
    name: "phone",
    type: "tel",
    placeholder: "Enter Your Phone Number",
    required:true,
    maxLength:"16",
    minLength:"6",
    pattern:"/^[0-9]{6,16}$/"
  },
]
