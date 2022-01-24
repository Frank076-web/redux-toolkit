import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './slices/counterSlice';
import { fetchAllUsers } from './slices/userSlice';

function App() {
	const counter = useSelector(state => state.counterReducer);
	const users = useSelector(state => state.userReducer.allUsers);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllUsers());

		return () => {};
	}, [dispatch]);

	return (
		<div>
			<header>
				<section>
					<h1>Redux Toolkit</h1>
					<button onClick={() => dispatch(increment())}>Sumar</button>
					<button onClick={() => dispatch(decrement())}>
						Restar
					</button>
					<button onClick={() => dispatch(reset())}>Reiniciar</button>
					<div
						style={{
							display: 'inline',
							marginLeft: '20px'
						}}
					>
						Counter: {counter}
					</div>
				</section>

				<section>
					<h1>Fetching</h1>
					<div>
						NameUsers:{' '}
						{users.map(user => {
							return <li key={user.id}>{user.name}</li>;
						})}
					</div>
				</section>
			</header>
		</div>
	);
}

export default App;
