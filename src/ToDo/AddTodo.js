import React, { useState } from "react";
import PropTypes from 'prop-types';

function useInputValue(defaultValue = '') {
	const [value, setValue] = useState(defaultValue)

	return {
		bind: {
			value,
			onChange: event => setValue(event.target.value)
		},
		clear: () => setValue(''),
		value: () => value
	}
}

function AddTodo({ onCreate }) {
	const input = useInputValue()

	const [value, setValue] = useState('')

	function submitHandler(event) {
		event.preventDefault();

		if (input.value().trim()) {
			onCreate(input.value())
			input.clear()
			// setValue('')
		}
	}
	return (
		<form className="addtodo" onSubmit={submitHandler}>
			<input className="newInput" {...input.bind}>
			</input>
			<button className="newBtn" type="submit">Add Todo</button>
		</form>
	)
}

AddTodo.propTypes = {
	onCreate: PropTypes.func.isRequired
}

export default AddTodo;