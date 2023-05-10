import styles from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='d-flex flex-col jcc aic tac pt-30'>
                    <h1 className={styles.title}>Gas Converter</h1>
                    <div className={styles.subtitle}>Best gas converter</div>
                    <div className={styles.divider}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
