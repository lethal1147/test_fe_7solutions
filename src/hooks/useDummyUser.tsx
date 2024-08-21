import { useState } from "react";
import { DUMMY_USER_API_ENDPOINT } from "@/constants";
import { FormattedUserByDepartmentType } from "@/types";
import { formatUserByDepartment } from "@/utils";

export default function useDummyUser() {
  const [formatted, setFomatted] =
    useState<null | FormattedUserByDepartmentType>(null);

  async function fetchDummyUser() {
    try {
      const { users } = await fetch(DUMMY_USER_API_ENDPOINT).then((res) =>
        res.json()
      );

      const formatted = formatUserByDepartment(users);
      setFomatted(formatted);
    } catch (err) {
      console.error(err);
    }
  }

  return { fetchDummyUser, formatted };
}
