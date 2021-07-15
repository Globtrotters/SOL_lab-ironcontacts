export default function ContactCard(props) {
	const { id, pictureUrl, name, popularity } = props.contact;
	const { handleDelete } = props

	return (
		<tr key={id}>
			<td>
				<img
					className='img-fluid img-thumbnail celebImg'
					src={pictureUrl}
					alt='celebrity'
				/>
			</td>
			<td>{name}</td>
			<td>{popularity.toFixed(2)}</td>
			<td>
				<button
					className='btn btn-secondary'
					onClick={() => {
						console.log("I'm in line 20 in ContactCard.js");
						props.handleDelete(props.contact.id)
						}}>
					Delete
				</button>
			</td>
		</tr>
	);
}
