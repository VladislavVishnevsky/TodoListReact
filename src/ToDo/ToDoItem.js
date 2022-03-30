import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Context from "../context";

const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '2rem 1rem',
		border: '2px solid #ccc',
		borderRadius: '10px',
		marginBottom: '10px'

	},
	input: {
		marginRight: '10px'
	}
}

function ToDoItem({ todo, index, onChange }) {
	const { removeTodo } = useContext(Context);
	const classes = [];
	const classes2 = [];

	if (todo.completed) {
		classes2.push('done2')
	}

	if (todo.completed) {
		classes.push('done')
	}

	return (
		<li style={styles.li} className={classes2.join(' ')}>
			<span className={classes.join(' ')}>
				<input
					style={styles.input}
					checked={todo.completed}
					type='checkbox'
					onChange={() => onChange(todo.id)}></input>
				<strong>{index + 1}</strong>
				&nbsp;
				{todo.title}</span>

			<button className="rm" onClick={() => removeTodo(todo.id)}>&times;</button>
		</li >
	)
}

ToDoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	onChange: PropTypes.func.isRequired
}

export default ToDoItem;