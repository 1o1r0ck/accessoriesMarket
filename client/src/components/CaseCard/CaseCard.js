import styles from "./CaseCard.module.scss"

const CaseCard = ({img, name}) => {
    return (
        
        <div className={styles.cardCases}>
            <a className={styles.casebutton} href="#">
            <img src={img} alt="GlassCase" />
            </a>

            <p> {name} </p>
        </div>
        
    );
}

export default CaseCard;
