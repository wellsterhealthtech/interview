import getPatients from "$entities/patient/api/getPatients";
import type { Patient } from "$entities/patient/model/patient";
import { useEffect, useState } from "react";
import "./styles.css";

function DashboardPage() {
	const [patients, setPatients] = useState<Patient[]>([]);
	const [totalNumberOfPatients, setTotalNumberOfPatients] = useState(0);
	const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
	const [dialogElement, setDialogElement] = useState<HTMLDialogElement | null>(null);

	useEffect(() => {
		getPatients().then((result) => setPatients(result));
	}, []);

	useEffect(() => {
		setTotalNumberOfPatients(patients.length);
	}, [patients]);

	useEffect(() => {
		setDialogElement(document.querySelector("dialog"));
	}, []);

	return (
		<>
			<section>
				<h1>Overview Patients</h1>
				<p>Current number of Patients: {totalNumberOfPatients}</p>
				<div>
					{patients.map((patient) => (
						<div key={patient.id}>
							<div>
								<div>
									<h2>
										{patient.firstName} {patient.lastName}
									</h2>
								</div>

								<p>Age: {patient.age}</p>
								<p>{patient.description}</p>

								<div>
									ID: {patient.id}
									<div
										onClick={() => {
											setSelectedPatient(patient);
											dialogElement?.showModal();
										}}
									>
										Show more
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<dialog closedby="any">
				<article>
					{selectedPatient ? <p>{selectedPatient.firstName}</p> : <p>No Patient selected</p>}
				</article>
			</dialog>
		</>
	);
}

export default DashboardPage;
