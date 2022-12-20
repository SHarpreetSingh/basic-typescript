import { User } from "./User";
import { Company } from "./Company";
import { CustomeMap } from "./customMap";

const user = new User();

const company = new Company();

const customMap = new CustomeMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
