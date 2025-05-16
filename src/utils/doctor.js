export const getBooking = () => {
  const doctors = localStorage.getItem("doctors");
  if (doctors) return JSON.parse(doctors);
  return [];
};

export const addBooking = (doctor) => {
  const doctors = getBooking();
  const isExit = doctors.find((p) => p.id === doctor.id);
  if (isExit) return console.log("Doctor Allready Added");
  doctors.push(doctor);
  localStorage.setItem("doctors", JSON.stringify(doctors));
};

export const removeDoctors = (id) => {
  const doctors = getBooking();
  const remainingDoctors = doctors.filter((doctor) => doctor.id !== id);
  localStorage.setItem("doctors", JSON.stringify(remainingDoctors));
};
