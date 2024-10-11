import React, { useEffect, useState } from "react";
import User from "../User/User";
import "./userlist.css";
import { api } from "../../config/api";

const UserList = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const result = await response.json();

        setData(result.results);
        setFilterData(result.results);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading</div>;
  if (error) return <div className="error">{`Error =>  ${error.message}`}</div>;

  console.log(data);

  return (
    <div className="user_list_section ">
      {data.map( userData  => (
        <User data={userData} />
      ))}
    </div>
  );
};

export default UserList;
