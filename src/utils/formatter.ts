import {
  FormattedDepartmentType,
  FormattedUserByDepartmentType,
  UserType,
} from "@/types";

export function formatUserByDepartment(
  userArr: UserType[]
): FormattedUserByDepartmentType {
  const formatted = new Map<string, FormattedDepartmentType>();

  for (const user of userArr) {
    const department = user.company.department;
    const hairColor = user.hair.color;
    const fullName = `${user.firstName}${user.lastName}`;
    const postalCode = user.address.postalCode;
    const gender = user.gender;
    const age = user.age;

    const existDepart = formatted.get(department);

    if (!existDepart) {
      formatted.set(department, {
        male: gender === "male" ? 1 : 0,
        female: gender === "female" ? 1 : 0,
        ageRange: `${age}-${age}`,
        hair: {
          [hairColor]: 1,
        },
        addressUser: {
          [fullName]: postalCode,
        },
      });
    } else {
      if (gender === "male") {
        existDepart.male += 1;
      } else {
        existDepart.female += 1;
      }
      const [min, max] = existDepart.ageRange.split("-");
      if (age < +min) {
        existDepart.ageRange = `${age}-${max}`;
      } else if (age > +max) {
        existDepart.ageRange = `${min}-${age}`;
      }
      const hair = existDepart.hair[hairColor];
      if (hair) {
        existDepart.hair[hairColor] += 1;
      } else {
        existDepart.hair[hairColor] = 1;
      }
      existDepart.addressUser[fullName] = postalCode;
      formatted.set(department, existDepart);
    }
  }

  return Object.fromEntries(formatted.entries());
}
