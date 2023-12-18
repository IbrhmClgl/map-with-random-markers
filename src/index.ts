/// <reference types="@types/google.maps" />

import { CustomMap } from './customMap';
import { User } from './User.ts';
import { Company } from './Company.ts';

const mapEl = document.querySelector('#map') as HTMLElement;

const map = new CustomMap(mapEl);

const user = new User();
const company = new Company();

map.addMarker(user);
map.addMarker(company);
