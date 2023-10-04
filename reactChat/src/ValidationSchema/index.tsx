import * as Yup from "yup";

export const UserAddSchema = Yup.object({

    name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name must only contain characters")
    .test(
      "name-length",
      "Name must be between 3 and 30 characters",
      function (value) {
        if (value) {
          return value.length >= 3 && value.length <= 30;
        }
        return true;
      }
    )
    .required("Name is required"),

});




