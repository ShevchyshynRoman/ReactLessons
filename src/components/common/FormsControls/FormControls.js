import styles from './FormControls.module.css'

export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ styles.formControl + " " + (hasError ? styles.error : "") }>
            <Element {...input} {...props} />                                           {/*Через замикання в філдах component = {Element}*/}
            { hasError && <span> { meta.error } </span> }
        </div>
    );
};



