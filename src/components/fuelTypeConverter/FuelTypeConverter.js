import { useState } from 'react';

import styles from './FuelTypeConverter.module.scss';

const FuelTypeConverter = () => {
    const [inputOne, setInputOne] = useState('');
    const convertMPG = Number(235.215 / inputOne).toFixed(2);

    return (
        <>
            <div className={styles.title}>MPG to L/100km Converter</div>
            <div className='d-flex jcsb'>
                <div className='d-flex flex-row tac aic'>
                    <div className='mr-15'>
                        <input
                            className={styles.input}
                            placeholder='Enter your value'
                            type='number'
                            value={inputOne}
                            onChange={e => setInputOne(e.target.value)}
                        />
                    </div>
                    <div className={styles.equals}>{inputOne ? '=' : null}</div>
                    {inputOne ? (
                        <div className='ml-15'>
                            <input
                                className={styles.input}
                                placeholder=''
                                type='number'
                                value={convertMPG}
                                onChange={() => convertMPG}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default FuelTypeConverter;
