import React, { useCallback } from 'react';
import { bingMe } from './testing';
//import debounce from 'lodash';

export interface IEmail {
     email: string;
     setEmail: (newValue:string) => void;
 }
export default function Email(props:IEmail){
    const {email, setEmail} = props;

    // const _onEmailChange = useCallback(
    //     debounce(
    //         (e: React.FormEvent<HTMLInputElement>) => {
    //             const newValue = e.currentTarget.value;
    //             if(newValue && newValue.length > 0) {
    //                 setEmail(newValue);
    //             }
    //           }
    //     ), 2000), []
    //   );
    
    const _onEmailChange = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            const newValue = e.currentTarget.value;
            if(newValue && newValue.length > 0) {
                bingMe();
                setEmail(newValue);
            }
        }, [setEmail]
    );
    
    return (
        <>
            Enter your name: 
            <input
            name='email'
            id='email'
            type='email'
            placeholder='Email'
            onChange={_onEmailChange}
            required
            value={email}
            />
        </>
    )
}
