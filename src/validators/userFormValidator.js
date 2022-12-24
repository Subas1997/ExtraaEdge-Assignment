const validateUserData = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Please Enter name";
  }
  if (!values.phone) {
    errors.phone = "Please Enter phone number";
  }
  if (!values.email) {
    errors.email = "Please Provide Email";
  }
  if (!values.website) {
    errors.website = "Please enter website url";
  }
};
export default validateUserData;
