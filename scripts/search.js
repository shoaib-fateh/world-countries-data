/** @format */

import Countries from '../data/countries_data.js';
import { $, $$, Country_markup, RemoVecommaCV } from './@easy.js';
import { Chart } from './chart.js';

export const Search = () => {
	$('.search').addEventListener('keyup', (event) => {
		event.key != 'Control' && event.key != 'Shift' && event.key != 'Alt';
		setTimeout(() => {
			$('.countries-view').innerHTML = Countries.map((country) => {
				if (
					country.name.toLowerCase().indexOf($('.search').value.toLowerCase()) >
						-1 ||
					country.capital
						.toLowerCase()
						.indexOf($('.search').value.toLowerCase()) > -1
				) {
					return Country_markup(
						country.name,
						country.capital,
						country.languages,
						country.population
					);
				}
			});

			Chart();

			let searchResultItemsLength = $$('.country').length;
			$(
				'.search-title'
			).innerHTML = `${searchResultItemsLength} countries satisified the search criteria`;
			$('.search').value == '' && ($('.search-title').innerHTML = ``);

			RemoVecommaCV();
		}, 0);
	});
};
