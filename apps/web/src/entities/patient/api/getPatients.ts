import type { Patient } from "$entities/patient/model/patient";

const DUMMY_PATIENTS: Patient[] = [
	{
		id: 1,
		firstName: "John",
		lastName: "Doe",
		description: "Brezn soi da hog di hi. Ned is ja mei is des schee Biazelt, Baamwach Foidweg",
		age: 54,
	},
	{
		id: 2,
		firstName: "Maya",
		lastName: "Limoni",
		description:
			"I hab an Foidweg Maibam, oamoi? Musi des wiad a Mordsgaudi Breihaus, Wurscht. Gwiss sammawiedaguad Fünferl, des is schee.",
		age: 37,
	},
	{
		id: 3,
		firstName: "Horst",
		lastName: "Müller",
		description:
			"Wiavui ozapfa heid gfoids ma sagrisch guad, iabaroi auffi ma am acht’n Tag schuf Gott des Bia.",
		age: 68,
	},
	{
		id: 4,
		firstName: "Hernandez",
		lastName: "Medina",
		description:
			"Hoam des muas ma hoid kenna hoaglig Schorsch gscheckate Ewig und drei Dog gwihss Trachtnhuat: Kumm geh auf gehds beim Schichtl anbandeln i hob di liab.",
		age: 27,
	},
];

async function getPatients(): Promise<Patient[]> {
	// await new Promise((resolve) => setTimeout(resolve, 2000));
	return DUMMY_PATIENTS;
}

export default getPatients;
