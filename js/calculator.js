// creates an object to keep track of values
const Calculator = {	
	Display_Value: "0", // displays 0 on the screen	
	First_Operand: null, // will hold first operand for any expressions
	Wait_Second_Operand: false, // checks for second operand input
	operator: null // hold the operator
};

// modifies values each time a button is clicked
function Input_Digit(digit) {
	const { Display_Value, Wait_Second_Operand } = Calculator;

	// check to see if wait second is true and set display value to clicked key
	if (Wait_Second_Operand === true) {
		Calculator.Display_Value = digit;
		Calculator.Wait_Second_Operand = false;
	} else {
		// concatenating strings
		Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
	}
}

// decimal points
function Input_Decimal(dot) {
	// make sure to not put 2 decimals
	if (Calculator.Wait_Second_Operand === true) return;
	if (!Calculator.Display_Value.includes(dot)) {
		Calculator.Display_Value += dot;
	}
}

// operators
function Handle_Operator(Next_Operator) {
	const { First_Operand, Display_Value, operator} = Calculator;
	// convert current number of pressed operator key and store result in First_Operand
	// if it doesnt already exist
	const Value_of_Input = parseFloat(Display_Value);
	if (operator && Calculator.Wait_Second_Operand) {
		Calculator.operator = Next_Operator;
		return;
	}
	if (First_Operand == null) {
		Calculator.First_Operand = Value_of_Input;
	} else if (operator) { // checks if operator exists
		const Value_Now = First_Operand || 0;
		const result = Perform_Calculation[operator](Value_Now, Value_of_Input);
		
		Calculator.Display_Value = String(result);
		Calculator.First_Operand = result;
	}

	Calculator.Wait_Second_Operand = true;
	Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
	'/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,

	'*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,

	'+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,

	'-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,

	'=': (First_Operand, Second_Operand) => Second_Operand
}

function Calculator_Reset() {
	Calculator.Display_Value = '0';
	Calculator.First_Operand = null;
	Calculator.Wait_Second_Operand = false;
	Calculator.operator = null;
}

// updates display screen
function Update_Display() {
	const display = document.querySelector('.calculator-screen');
	display.value = Calculator.Display_Value;
}

Update_Display();

//monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
	// set event to variable target
	const { target } = event;
	// if the element isnt a button exit function
	if (!target.matches('button')) {
		return;
	}

	if (target.classList.contains('operator')) {
		Handle_Operator(target.value);
		Update_Display();
		return;
	}

	if (target.classList.contains('decimal')) {
		Input_Decimal(target.value);
		Update_Display();
		return;
	}

	// all-clear
	if (target.classList.contains('all-clear')) {
		Calculator_Reset();
		Update_Display();
		return;
	}

	Input_Digit(target.value);
	Update_Display();
})





