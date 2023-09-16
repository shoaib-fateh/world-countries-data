/** @format */

export const $ = (element) => document.querySelector(element);
export const $$ = (element) => document.querySelectorAll(element);

export const RemoVecommaCV = () =>
	($('.countries-view').innerHTML = $('.countries-view').innerHTML.replace(
		/\,/gi,
		' '
	));

export const Country_markup = (name, capital, languages, population, flag) =>
	`<div class="country"><img src="${flag}" alt="${name}'s flag." class="flag" /><div class="text"><p class="name">Name: ${name}</p><p class="capital">Capital: ${capital}</p><p class="language">Languages: ${languages}</p><p class="population">Population: ${population}</p></div></div>`;
