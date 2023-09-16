/** @format */

import Countries from '../data/countries_data.js';
import { $, Country_markup, RemoVecommaCV } from './@easy.js';

const [name, capital, population] = [
	$('.search-menu .btn .name'),
	$('.search-menu .btn .capital'),
	$('.search-menu .btn .population'),
];

export const Countries_view = () => {
	$('.countries-view').innerHTML = Countries.map(
		({ name, capital, languages, population }) => {
			return (
				(capital != '') & (capital != false) &&
				Country_markup(name, capital, languages, population)
			);
		}
	);

	RemoVecommaCV();

	// sort by name
	let flag_name = true;
	name.addEventListener('click', () => {
		let arr = [];
		$$('.countries-view .country').forEach((country) => {
			let country_name = country.querySelector('.name').innerHTML;
			country_name = country_name.slice(5);
			arr.push(country_name);
		});

		flag_name == true
			? (() => {
					arr.sort();
					flag_name = false;
			  })()
			: (() => {
					arr.reverse();
					flag_name = true;
			  })();

		let country_sort_arr = [];
		arr.map((arr) => {
			$$('.countries-view .country').forEach((country) => {
				let country_name = country.querySelector('.name').innerHTML;
				country_name = country_name.slice(5);

				if (arr == country_name) return country_sort_arr.push(country);
			});
		});

		$('.countries-view').innerHTML = country_sort_arr.map((sort_arr) => {
			return `<div class="country">${sort_arr.innerHTML}</div>`;
		});

		RemoVecommaCV();
	});

	// sort by capital
	let flag_capital = true;
	capital.addEventListener('click', () => {
		let arr = [];
		$$('.countries-view .country').forEach((country) => {
			let country_capital = country.querySelector('.capital').innerHTML;
			country_capital = country_capital.slice(9);
			arr.push(country_capital);
		});

		flag_capital == true
			? (() => {
					arr.sort();
					flag_capital = false;
			  })()
			: (() => {
					arr.reverse();
					flag_capital = true;
			  })();

		let country_sort_arr = [];
		arr.map((arr) => {
			$$('.countries-view .country').forEach((country) => {
				let country_capital = country.querySelector('.capital').innerHTML;
				country_capital = country_capital.slice(9);

				if (arr == country_capital) return country_sort_arr.push(country);
			});
		});
		$('.countries-view').innerHTML = country_sort_arr.map((sort_arr) => {
			return `<div class="country">${sort_arr.innerHTML}</div>`;
		});

		RemoVecommaCV();
	});

	// sort by population
	let flag_population = true;
	population.addEventListener('click', () => {
		let arr = [];
		$$('.countries-view .country').forEach((country) => {
			let country_population = country.querySelector('.population').innerHTML;
			country_population = country_population.slice(11);
			arr.push(country_population);
		});

		flag_population == true
			? (() => {
					arr.sort((a, b) => b - a);
					flag_population = false;
			  })()
			: (() => {
					arr.reverse((a, b) => b - a);
					flag_population = true;
			  })();

		let country_sort_arr = [];
		arr.map((arr) => {
			$$('.countries-view .country').forEach((country) => {
				let country_population = country.querySelector('.population').innerHTML;
				country_population = country_population.slice(11);

				if (arr == country_population) return country_sort_arr.push(country);
			});
		});

		$('.countries-view').innerHTML = country_sort_arr.map((sort_arr) => {
			return `<div class="country">${sort_arr.innerHTML}</div>`;
		});

		RemoVecommaCV();
	});
};
