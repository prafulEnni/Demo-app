import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
    const[ userData , setUserData ] = useState({});

    const { id } = useParams();

    useEffect(() => {
        if(id) {
            // make api call  fetch userData
            fetch(`http://www.mocky.io/v2/5eb188af320000104528f816`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                  },
            })
            .then(res => res.json())
            .then(json => {
                setUserData(json);
            });
        }
    }, [id]);

    return (
        <div>
            <div>User Object</div>
            <div>{JSON.stringify(userData)}</div>
        </div>
    )


}