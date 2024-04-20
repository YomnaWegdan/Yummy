import React from "react";
import { getAreas, useMeal } from "./Hooks/useMeals";
import Loading from "./Loading";
import { FaLaptopHouse } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Areas() {
  const { data, isLoading } = useMeal("categories", getAreas);
  console.log(data?.data?.meals);

  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="row">
        {data?.data?.meals.map((area) => (
          <div className="col-xl-3 col-lg-6 text-white mt-5">
            <NavLink
              to={`/area/${area.strArea}`}
              className="text-decoration-none"
            >
              <div className="img  text-center text-light text-decoration-none">
                <FaLaptopHouse className="fs-90" />
                <h3 className=" mt-2  text-decoration-none">{area.strArea}</h3>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
