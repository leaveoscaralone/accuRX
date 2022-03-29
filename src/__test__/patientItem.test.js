import { render, screen } from '@testing-library/react';
import PatientItem from '../components/patientItem';

const patient = {
    firstName: 'Peter',
    lastName: 'Parker',
    vaccineType: 'Moderna',
    vaccineDate: 1545561590,
}

test('renders patient info properly', () => {
  render(<PatientItem patient={patient} />);
  const patientName = screen.getByText(/peter/i);
  const patientLastName = screen.getByText(/parker/i);
  const patientVaccine = screen.getByText(/moderna/i);
  const patientVaccineDate = screen.getByText(/23 dec 2018/i);
  expect(patientName).toBeInTheDocument();
  expect(patientLastName).toBeInTheDocument();
  expect(patientVaccine).toBeInTheDocument();
  expect(patientVaccineDate).toBeInTheDocument();
});