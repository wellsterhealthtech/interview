import type { Patient } from "$entities/patient/model/patient";

const DUMMY_PATIENTS: Patient[] = [
	{
		id: 1,
		firstName: "John",
		lastName: "Doe",
		age: 54,
	},
	{
		id: 2,
		firstName: "Maya",
		lastName: "Limoni",
		age: 37,
	},
	{
		id: 3,
		firstName: "Horst",
		lastName: "Müller",
		age: 68,
	},
	{
		id: 4,
		firstName: "Hernandez",
		lastName: "Medina",
		age: 27,
	},
];

async function getPatients(): Promise<Patient[]> {
	// await new Promise((resolve) => setTimeout(resolve, 2000));
	return DUMMY_PATIENTS;
}

export default getPatients;
