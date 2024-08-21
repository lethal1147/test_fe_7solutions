export type CoordinatesType = {
  lat: number;
  lng: number;
};

export type AddressType = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: CoordinatesType;
  country: string;
};

export type HairType = {
  color: string;
  type: string;
};

export type BankType = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

export type CompanyType = {
  department: string;
  name: string;
  title: string;
  address: AddressType;
};

export type CryptoType = {
  coin: string;
  wallet: string;
  network: string;
};

export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: HairType;
  ip: string;
  address: AddressType;
  macAddress: string;
  university: string;
  bank: BankType;
  company: CompanyType;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: CryptoType;
  role: string;
};

export type FormattedDepartmentType = {
  male: number;
  female: number;
  ageRange: string;
  hair: Record<string, number>;
  addressUser: Record<string, string>;
};

export type FormattedUserByDepartmentType = Record<
  string,
  FormattedDepartmentType
>;
