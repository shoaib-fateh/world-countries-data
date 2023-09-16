/** @format */

import { $, $$, RemoVecommaCV } from './@easy.js';

const Chart_items_markup = (name, percentage, number) =>
	`<div class='chart-item'><div class='name'>${name}</div><div class='percent'><div class='percentage' style='width: ${percentage}%'><span>${Math.floor(
		percentage
	)}%</span></div></div><div class='number'>${number}</div></div>`;

export const Chart = () => {
	let arr = [];
	$$('.countries-view .country').forEach((country) => {
		let country_population = country.querySelector('.population').innerHTML;
		country_population = country_population.slice(11);
		arr.push(country_population);
	});

	arr.sort((a, b) => b - a);

	let count_population_total = [0, 0];
	for (let i = 0; i < 10; i++) {
		arr[i] != undefined &&
			(() => {
				count_population_total[0] = Number(arr[i]);
				count_population_total[1] =
					count_population_total[0] + count_population_total[1];
			})();
	}

	$('.chart-items .total').innerHTML = Chart_items_markup(
		'World',
		100,
		count_population_total[1]
	);

	let country_sort_arr = [];
	let count = 0;
	arr.map((arr) => {
		$$('.countries-view .country').forEach((country) => {
			let country_name = country.querySelector('.name').innerHTML;
			let country_population = country.querySelector('.population').innerHTML;

			country_name = country_name.slice(5);
			country_population = country_population.slice(11);

			if (arr == country_population)
				return (() => {
					if (count < 10) {
						country_sort_arr.push(`${country_name}_${country_population}`);
					}
					count++;
				})();
		});
	});

	$('.chart-items .all').innerHTML = Chart_items_markup(
		'World',
		100,
		count_population_total[1]
	);

	$('.chart-items .all').innerHTML = country_sort_arr.map((arr) => {
		return Chart_items_markup(
			arr.split('_')[0],
			(Number(arr.split('_')[1]) * 100) /
				Number($('.chart-items .total .number').innerHTML),
			arr.split('_')[1]
		);
	});

	RemoVecommaCV();
	$('.chart-items .all').innerHTML = $('.chart-items .all').innerHTML.replace(
		/\,/gi,
		' '
	);
};
