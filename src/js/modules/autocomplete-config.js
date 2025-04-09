import autoComplete from '@tarekraafat/autocomplete.js';

// CountryList for autocomplete
import countryList from './../data/countryList.js';
// let countries = countryList.map(item => item.country);

function autoCompleteJSInit() {
  const autoCompleteJS = new autoComplete({
    selector: '#autoCompleteCountry',
    minChars: 2,
    placeHolder: 'e.g Bali, Indonesia',
    data: {
      src: countryList,
      // Data source 'Object' key to be searched
      keys: ['country'],
    },
    resultItem: {
      highlight: true,
    },
    resultsList: {
      maxResults: 10,
      // tag: 'ul',
      // id: 'autoComplete_list',
      // class: 'results_list',
      // destination: '#autoCompleteCountry',
      // position: 'afterend',
      // noResults: true,
    },
    searchEngine: 'strict',
    events: {
      input: {
        selection: event => {
          const selection = event.detail.selection.value.country;
          autoCompleteJS.input.value = selection;
        },
      },
    },
  });
}

export default autoCompleteJSInit;
