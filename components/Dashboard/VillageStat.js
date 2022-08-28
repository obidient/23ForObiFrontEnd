import styles from './Styles.module.scss'

const VillageStat = ({ votersDetails, villageDetails, awards }) => {
const awardStats = Math.trunc(awards / 10)
const Awards = () => {
  if(awardStats > 9){
    return `${awardStats}`
  } else {
    return `${awardStats}`
  }
 
}
  return (
    <div className={styles.village_stat}>
      <div className={styles.stat_one}>
        <div className={styles.stat_one__num_votes}>
          <p>Number of voters</p>
          <h3>{votersDetails?.length || "-"}</h3>
        </div>
      </div>
      <div className={styles.stat_two}>
        <div className={styles.stat_two__rewards}>
          <p>Rewards</p>
          <h3>{awards ? <Awards /> : '-'}</h3>
        </div>
        <div className={styles.stat_two__num_villages}>
          <p>Number of Villages</p>
          <h3>{villageDetails?.length || "-"}</h3>
        </div>
      </div>
    </div>
  );
};

export default VillageStat