import { useEffect } from "react";
import { useDummyUser } from "@/hooks";

export default function ExtraPage() {
  const { fetchDummyUser, formatted } = useDummyUser();

  useEffect(() => {
    fetchDummyUser();
  }, [fetchDummyUser]);

  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl text-center">EXTRA TEST</h1>
      <div>
        {formatted
          ? Object.entries(formatted).map(([department, data]) => (
              <div
                className="border p-3 border-gray-200 w-full flex flex-col sm:flex-row"
                key={department}
              >
                <div className="w-full sm:w-1/3">
                  <h2 className="font-bold">{department}</h2>
                  <p>Male : {data.male}</p>
                  <p>Female : {data.female}</p>
                  <p>AgeRange : {data.ageRange}</p>
                </div>
                <div className="w-full sm:w-1/3">
                  <h3 className="font-bold">hair</h3>
                  <ul>
                    {Object.entries(data.hair).map(([color, count]) => (
                      <li key={color}>
                        {color} : {count}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full sm:w-1/3">
                  <h3 className="font-bold">Address</h3>
                  <ul>
                    {Object.entries(data.addressUser).map(
                      ([fullName, postalCode]) => (
                        <li key={fullName}>
                          {fullName} : {postalCode}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
