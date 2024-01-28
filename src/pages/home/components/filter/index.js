import { useState } from "react";
import classes from "./filter.module.css";

const Filter = () => {
    const [filterForm, setFilterForm] = useState({
        city: "tehran",
        sellOrRent: "sell",
        year: "2005",
        elevator: false,
        anbari: false,
        parking: false
    });
    return (
        <div className={classes.filterContainer}>
            <div className={classes.cityContainer}>
                <select
                    onChange={(e) => {
                        setFilterForm({ ...filterForm, city: e.target.value })
                    }}
                    value={"tehran"}
                >
                    <option value={"tehran"}>
                        تهران
                    </option>
                    <option value={"mashhad"}>
                        مشهد
                    </option>
                    <option value={"tabriz"}>
                        تبریز
                    </option>
                    <option value={"esfahan"}>
                        اصفهان
                    </option>
                </select>
                <hr className={classes.cityContainerHr}/>
            </div>
            
            <select
                onChange={(e) => {
                    setFilterForm({ ...filterForm, sellOrRent: e.target.value })
                }}
                value={filterForm.sellOrRent}
            >
                <option value={"sell"}>
                    فروش
                </option>
                <option value={"rent"}>
                    اجاره
                </option>
            </select>
            <input
                value={filterForm.year}
                onChange={(e) => {
                    setFilterForm({ ...filterForm, year: e.target.value })
                }}  
            />
            <div className="w-100 d-flex">
                <label htmlFor="elevator">آسانسور</label>
                <input
                    type="checkbox"
                    id="elevator"
                    name="elevator"
                    checked={filterForm.elevator}
                    onChange={(e) => {   
                        setFilterForm({...filterForm, elevator: e.target.checked })
                    }}
                />
                <label htmlFor="parking">پارکینگ</label>
                <input
                    type="checkbox"
                    id="parking"
                    name="parking"
                    checked={filterForm.parking}
                    onChange={(e) => {   
                        setFilterForm({...filterForm, parking: e.target.checked })
                    }}
                />
                <label htmlFor="anbari">انباری</label>
                <input
                    type="checkbox"
                    id="anbari"
                    name="anbari"
                    checked={filterForm.anbari}
                    onChange={(e) => {   
                        setFilterForm({...filterForm, anbari: e.target.checked })
                    }}
                />
            </div>
            
            <button className={classes.filterButton}>فیلتر</button>
        </div>
    )
}

export default Filter;