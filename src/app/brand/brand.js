import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { BRANDS } from './schemas';

const Brand = () => {
    const { loading, error, data } = useQuery(BRANDS);
    if (error) return <p>Error </p>;
    return (
        <select
            style={{
                height: 50,
                width: 'auto',
                border: '1',
                borderRadius: 5,
                boxShadow: 'grey',
            }}
        >
            {!loading ? (
                data.brands.map(({ name, id }) => {
                    return (
                        <option value={id} key={name}>
                            {' '}
                            {name}{' '}
                        </option>
                    );
                })
            ) : (
                <option>...loading</option>
            )}
        </select>
    );
};

export default Brand;
