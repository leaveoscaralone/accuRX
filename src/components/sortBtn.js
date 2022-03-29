 function SortBtn ({ setSort }) {

     return (
         <div>
         <select name="sort" className="border border-solid rounded-3xl p-2" onChange={(e) => {setSort(e.target.value)}}>     
             <option value="">{"-"}</option>
             <option value="asc">{"A-Z"}</option>
             <option value="desc">{"Z-A"}</option>
         </select>
         </div>
     )
 }

 export default SortBtn;