import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { hideToast } from '../../slices/toastSlice';
import styles from './Toast.module.css';

const Toast = () => {
    const { visible, message } = useSelector((state: RootState) => state.toast);
    const dispatch = useDispatch();

    if (!visible) return null;

    return (
        <div className={styles.toast}>
            <span className={styles.icon}>✓</span>
            <span className={styles.message}>{message}</span>
            <button className={styles.close} onClick={() => dispatch(hideToast())}>✕</button>
        </div>
    );
};

export default Toast;
