import React from 'react';
import ContactCard from './ContactCard';

const Table = (props) => {

	const { contacts } = props
	
	return (
		<table className='table'>
			<thead className='thead-light'>
				<tr>
					<th scope='col'>Picture</th>
					<th scope='col'>Name</th>
					<th scope='col'>Popularity</th>
					<th scope='col'>Delete</th>
				</tr>
			</thead>
			<tbody>
				{contacts.map((contact) => (
					<ContactCard key={contact.id} contact={contact} />
				))}
			</tbody>
		</table>
	);
};

export default Table;
