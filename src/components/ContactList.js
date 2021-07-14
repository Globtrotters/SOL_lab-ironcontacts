import React, { useState } from 'react';

//Import the UI components
import Header from './Header';
import Table from './Table';
import Button from './Button';
import ContactCard from './ContactCard';

//Import data from json
import contactsFromJSON from '../data.json';

//Make a new array with the data
const contactlist = [...contactsFromJSON];

//Get the first 5 and take them from the big array
const firstContacts = contactlist.splice(0, 5);

export default function ContactList() {

  //Create state
	const [contacts, setContacts] = useState(firstContacts);

	function addContact() {

    //check if there are contacts left to add
		if (contactlist.length === 0) return;

    //create random index
		let randomIndex = Math.floor(contactlist.length * Math.random());

    //select random contact
		let randomContact = contactlist.splice(randomIndex, 1);

    //Create new array with state + new contact
		let updatedContacts = [...contacts, randomContact[0]];

    //Update state
		setContacts(updatedContacts);
	}

	function sortByName() {

    //Make a copy of the state array
    let sortedContacts = [...contacts]

    //Sort the array
    sortedContacts.sort((a, b) => (a.name > b.name ? 1 : -1));
		
    //Update the state
    setContacts(sortedContacts)

    //setContacts(contacts.slice().sort((a, b) => (a.name > b.name ? 1 : -1)));
	}

	function sortByPopularity() {

    //Make a copy of the state array
		let sortedContacts = [...contacts];

		//Sort the array
		sortedContacts.sort((a, b) => b.popularity - a.popularity);

		//Update the state
		setContacts(sortedContacts);

		//setContacts(contacts.slice().sort((a, b) => b.popularity - a.popularity));
	}

	// function sortContacts(field) {
	// 	let compareFunction;
	// 	if (field === 'name') {
	// 		compareFunction = (a, b) => (a.name > b.name ? 1 : -1);
	// 	} else if (field === 'popularity') {
	// 		compareFunction = (a, b) => b.popularity - a.popularity;
	// 	}

	// 	setContacts(contacts.slice().sort(compareFunction));
	// }

	function deleteContact(id) {

    //Make a copy of the state array
		const newList = [...contacts];

    //Create the new array
    const filteredArray = newList.filter((contact) => contact.id !== id)

    //Update the state
    setContacts(filteredArray)

		//setContacts(contacts.filter((contact) => contact.id !== id));
	}

	return (
		<div className='container-fluid'>
			<Header />

			<button className='btn btn-secondary' onClick={addContact}>
				Add random
			</button>

			<button className='btn btn-primary' onClick={() => sortByName()}>
				Sort by name
			</button>

			<button className='btn btn-success' onClick={() => sortByPopularity()}>
				Sort by popularity
			</button>

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
						<ContactCard
							key={contact.id}
							contact={contact}
							handleDelete={deleteContact}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}
