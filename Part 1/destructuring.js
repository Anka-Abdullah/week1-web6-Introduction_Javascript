// DESTRUCTURING OBJECT ================================================
const student = {
  firstName: "Grad",
  lastName: "Chinda",
  country: "Nigeria",
  hobby: {
    hobby1: "menyanyi",
    hobby2: "menari",
  },
};
// const country = student.country;
const { country } = student;

// const hobby2 = student.hobby.hobby2;
const { hobby2 } = student.hobby; // student.hobby.hobby2

console.log(hobby2);

// DESTRUCTURING ARRAY =================================================

const rgb = [255, 140, 0];

// before using destructing
// const red = rgb[0]
// const green = rgb[1]
// const blue = rgb[2]

// destructing assignment
const [red, green, blue] = rgb;
// nama variabel bisa diubah ubah yang terpenting adalah peletakannya

console.log(red);
