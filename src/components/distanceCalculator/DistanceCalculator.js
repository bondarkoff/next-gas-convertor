import { useState } from 'react';
import styles from './DistanceCalculator.module.scss';

const DistanceCalculator = () => {
    const [inputKM, setInputKM] = useState('');
    const [inputGAS, setInputGAS] = useState('');
    const [inputPRC, setInputPRC] = useState('');

    const price = Number(inputGAS * inputPRC) / 100;
    const total = Number(price * inputKM).toFixed(2);
    const liters = Number((inputKM * inputGAS) / 100).toFixed(2);

    return (
        <>
            <div className={styles.title}>Distance Calculator</div>
            <div className={styles.text}>
                {' '}
                I need to travel{' '}
                <input
                    value={inputKM}
                    onChange={e => setInputKM(e.target.value)}
                    type='number'
                    placeholder='KM'
                    className={styles.input}
                />
                km with a car that has a fuel consumption of{' '}
                <input
                    value={inputGAS}
                    onChange={e => setInputGAS(e.target.value)}
                    type='number'
                    className={styles.input}
                    placeholder='GAS'
                />
                /100km and a fuel price of{' '}
                <input
                    value={inputPRC}
                    onChange={e => setInputPRC(e.target.value)}
                    type='number'
                    className={styles.input}
                    placeholder='PRC'
                />{' '}
                per liter.
            </div>
            <div className={styles.total}>
                {liters > 0 && total > 0 ? (
                    <div className=''>
                        It will be necessary to spend <span>{total}</span> UAH and{' '}
                        <span>{liters}</span> liters of fuel.
                    </div>
                ) : (
                    <div>Fill in the blanks and I'll give you the calculations :)</div>
                )}
            </div>
        </>
    );
};

export default DistanceCalculator;
