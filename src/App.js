import { useState, useEffect } from "react";
import api from "./ApiService";
import PatientItem from "./components/patientItem";
import SearchBar from "./components/searchBar";
import SortBtn from "./components/sortBtn";
import filters from "./features/filterSorter"

function App() {
  const [patients, setPatients] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [sort, setSort] = useState(null);

  useEffect(() => {
    api
      .getAll()
      .then((patients) => filters.sorter(patients, sort))
      .then((patients) =>
        patients.filter((patient) => {
          return filters.lookUp(patient, searchParam)
        }))
      .then((result) => setPatients(result));
  }, [searchParam, sort]);

  return (
    <div id="App" className="flex-column w-screen h-screen">
      <div className="flex w-screen bg-blue-800 h-20 items-center justify-around shadow-md">
        <h2 className="mr-10 ml-4 text-white font-bold text-3xl">{"accuRX"}</h2>
        <SearchBar setSearchParam={setSearchParam}></SearchBar>
        <div className="justify-center">
          <h4 className="text-white font-semibold text-sm pb-1">{"Filter by Name"}</h4>
          <SortBtn id="filter" setSort={setSort}></SortBtn>
        </div>
      </div>
      <div className="h-3/4 overflow-auto space-x-4">
        {patients.length ? (
          patients.map((patient) => {
            return (
              <div
                key={patient.id}
                className="flex justify-center items-center"
              >
                <PatientItem patient={patient}></PatientItem>
              </div>
            );
          })
        ) : (
          <p>{`No results for ${searchParam}`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
