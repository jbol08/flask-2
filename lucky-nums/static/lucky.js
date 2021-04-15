const $form = $('#lucky-form');
const $nameErr = $("#name-err");
const $name = $("#name");
const $yearErr = $("#year-err");
const $year = $("#year");
const $emailErr = $("#email-err");
const $email = $("#email");
const $colorErr = $("#color-err")
const $color = $("#color");
const $results = $("#lucky-results")
/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
    evt.preventDefault();
    data = {
		name  : $name.val(),
		year  : $year.val(),
		email : $email.val(),
		color : $color.val()
	};

	// ping the back-end API with the form data
	let response = await axios.post('/api/get-lucky-num', data);

	// run the handleResponse function to manipulate dom
	handleResponse(response);
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(response) {
    let text = response.data;
	$('b').html('');
	$results.text('');

	if (text.errors) {
        
        const errors = text.errors;
        for (let err_list in errors) {
            for (let err of errors[err_list]) {
                $(`#${err_list}-err`).append(err);
            }
        }
       
    } else {
       
        let numberData = text.num;
        let yearData = text.year;

        let numberFact = `Your lucky number is ${numberData.num} (${numberData.fact})`;
        let yearFact = `Your birth year, ${yearData.year}, fact is: ${yearData.fact}`;

        
        $results.append(numberFact).append(yearFact);
    }
}


$("#lucky-form").on("submit", processForm);
