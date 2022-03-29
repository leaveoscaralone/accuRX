import { DateTime } from 'luxon';

function PatientItem({ patient }) {
  const badgeColor = ['text-cyan-400', 'text-lime-500']
  const badgeSetter = (input) => {
    if (input.includes('Astra')) {
      return badgeColor[0]
    } else {
      return badgeColor[1]
    }
  }

  return (
    <div className="flex border border-solid rounded-3xl p-5 m-5 w-6/12 hover:scale-110 hover:bg-blue-50 shadow-sm">
      <div data-testid="name" className="w-2/5">
        <p className="text-xs">{"Family Name / Name"}</p>
        <p className="font-semibold text-md">{patient.lastName + ", " + patient.firstName}</p>
      </div>
      <div id="date" className="w-2/5">
        <p className="text-xs">{"Vaccine Date"}</p>
        <p className="font-semibold text-md">{DateTime.fromMillis(patient.vaccineDate * 1000).toFormat('d MMM yyyy')}</p>
      </div>
      <div id="vaccine" className="w-1/5">
        <p className="text-xs">{"Manufacturer"}</p>
        <p className={`font-semibold text-md ${badgeSetter(patient.vaccineType)}`} >{patient.vaccineType}</p>
      </div>
    </div>
  );
}

export default PatientItem;
