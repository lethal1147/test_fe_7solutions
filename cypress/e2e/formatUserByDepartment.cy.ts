import { formatUserByDepartment } from "../../src/utils";
import { UserType, FormattedUserByDepartmentType } from "../../src/types";
import MOCK_USERS from "../fixtures/users.json";

describe("formatUserByDepartment", () => {
  it("should correctly format users by department", () => {
    const users: UserType[] = MOCK_USERS;

    const expected: FormattedUserByDepartmentType = {
      Engineering: {
        male: 1,
        female: 1,
        ageRange: "28-38",
        hair: {
          Brown: 1,
          White: 1,
        },
        addressUser: {
          EmilyJohnson: "29112",
          AlexanderJones: "86684",
        },
      },
      Support: {
        male: 3,
        female: 0,
        ageRange: "33-45",
        hair: {
          Green: 1,
          Blonde: 1,
          Purple: 1,
        },
        addressUser: {
          MichaelWilliams: "38807",
          JamesDavis: "68354",
          EthanMartinez: "72360",
        },
      },
      "Research and Development": {
        male: 0,
        female: 1,
        ageRange: "42-42",
        hair: {
          White: 1,
        },
        addressUser: {
          SophiaBrown: "32822",
        },
      },
      "Human Resources": {
        male: 0,
        female: 1,
        ageRange: "30-30",
        hair: {
          White: 1,
        },
        addressUser: {
          EmmaMiller: "26593",
        },
      },
      "Product Management": {
        male: 0,
        female: 1,
        ageRange: "22-22",
        hair: {
          Gray: 1,
        },
        addressUser: {
          OliviaWilson: "83843",
        },
      },
      Marketing: {
        male: 0,
        female: 2,
        ageRange: "27-31",
        hair: {
          Red: 1,
          Blonde: 1,
        },
        addressUser: {
          AvaTaylor: "24771",
          IsabellaAnderson: "89352",
        },
      },
    };

    const result = formatUserByDepartment(users);

    expect(result).to.deep.equal(expected);
  });
});
