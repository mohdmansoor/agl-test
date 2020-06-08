import React from 'react';
import uuid from 'react-uuid';

export const Pets = (props) => {

    const sortedAnimals = (pets) => {

        const NOANIMALS = 'This person does not own any animals';

        if (pets) {
            const sortedPets = pets.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
            return sortedPets.map(pet => {
                return (
                    pet.type==='Cat' ? <li key={uuid()}>{pet.name}</li> : null
                );
            });
        } else {
            return (
            <li key={uuid()} className="no-animal">{NOANIMALS}</li>
            );
        }
    };

    return (
        <ul>{sortedAnimals(props.pets)}</ul>
    );

}