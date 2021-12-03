import classes from '../../assets/CSS/Button.module.css';

export default function Button(props) {
    return (
        <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
    );
}