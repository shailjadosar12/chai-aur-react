import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   console.log(data);
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data.bio);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
    </div>
  );
};

export default Github;

export const gitHubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/hiteshchoudhary"
  ).then((res) => res.json());
  console.log(response);
  return response;
};
