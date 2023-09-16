/** @format */

import { $ } from './@easy.js';
import Countries from '../data/countries_data.js';
import { Chart } from './chart.js';
import { Search } from './search.js';
import { Countries_view } from './countries.js';

const sub_title = `Currently, we have ${Countries.length} countries`;
const chart_title_population = '10 Most Populated Countries in the World';

const init = () => {
	$('.subtitle').innerHTML = sub_title;
	$('.chart .title').innerHTML = chart_title_population;

	Countries_view();
	Search();
	Chart();
};

init();
