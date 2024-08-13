// import React from 'react';
// import PersonForm from './PersonForm';

// export default function PersonDetails({ formData, setFormData, registrationType }) {
//     // Function to handle input change for each person
//     const handleInputChange = (index, field, value) => {
//         setFormData(prevState => {
//             const updatedPerson = [...prevState.Person];
//             // Initialize the person object if it's undefined
//             if (!updatedPerson[index]) {
//                 updatedPerson[index] = {};
//             }
//             updatedPerson[index][field] = value;
//             return { ...prevState, Person: updatedPerson };
//         });
//     };

//     // Dynamically generate input fields for each person based on registration type
//     const renderPersonForms = () => {
//         let personForms = [];
//         if (registrationType !== 'Couple') {
//             personForms.push(
//                 <PersonForm key={0} personData={formData.Person[0]} handleInputChange={(field, value) => handleInputChange(0, field, value)} personNumber={1}/>
//             );
//         } else if (registrationType === 'Couple') {
//             for (let i = 0; i < 2; i++) {
//                 personForms.push(
//                     <PersonForm key={i} personData={formData.Person[i] || {}} handleInputChange={(field, value) => handleInputChange(i, field, value)} personNumber={i + 1} />
//                 );
//             }
//         }
//         return personForms;
//     };

//     return (
//         <>
//             {renderPersonForms()}
//         </>
//     );
// }

import React, { useState } from 'react';
import PersonForm from './PersonForm';

export default function PersonDetails({ formData, setFormData }) {
    const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
    let registrationType = formData.registrationDetails.registrationType;

    const handleNext = () => {
        if (currentPersonIndex < 1) {
            setCurrentPersonIndex(currentPersonIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPersonIndex > 0) {
            setCurrentPersonIndex(currentPersonIndex - 1);
        }
    };

    const handleInputChange = (personIndex, field, value) => {
        setFormData(prevState => {
            const updatedPerson = [...prevState.Person];
            if (!updatedPerson[personIndex]) {
                updatedPerson[personIndex] = {};
            }
            updatedPerson[personIndex][field] = value;
            return { ...prevState, Person: updatedPerson };
        });
    };

    const renderPersonForm = (personIndex) => {
        return (
            <PersonForm
                personData={formData.Person[personIndex] || {}}
                handleInputChange={(field, value) => handleInputChange(personIndex, field, value)}
                personNumber={personIndex + 1}
            />
        );
    };

    return (
        <>
            {registrationType === 'Couple' && currentPersonIndex === 0 && renderPersonForm(0)}
            {registrationType === 'Couple' && currentPersonIndex === 1 && renderPersonForm(1)}
            {registrationType !== 'Couple' && renderPersonForm(0)}
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </>
    );
}