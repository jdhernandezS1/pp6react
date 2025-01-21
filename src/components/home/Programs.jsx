import React from "react";
import styles from "../../styles/home/home.module.css"
import { Link } from "react-router-dom";

const Programs = () => {
    return (
        <div className={styles["programs"]}>
            <p className={styles["programs-main-title"]}>Featured Programs</p>
            <div className={styles["programs-grid"]}>
                <div className={styles["programs-card"]}>
                    <img className={styles["programs-img"]} src="https://www.insidefitnessmag.com/cdn/shop/articles/strength-training-techniques-for-beginners-812748_1200x.jpg?v=1717177372" alt="" />
                    <div className={styles["programs-info"]} >
                    <strong className={styles["programs-title"]}> <p>Strength Training</p></strong>
                    <p className={styles["programs-text"]}> Build muslce and increase strenght with our comprehensive program.</p>
                    <Link to="/workouts" >Learn More</Link>
                    </div>
                </div>
                <div className={styles["programs-card"]}>
                    <img className={styles["programs-img"]} src="https://mrwallpaper.com/images/thumbnail/powering-through-the-training-dedicated-sportswoman-at-4k-gym-135b4bp8n9xznn0x.webp" alt="" />
                    <div className={styles["programs-info"]} >
                    <strong className={styles["programs-title"]}> <p>Cardio Blast</p></strong>
                    <p className={styles["programs-text"]}> High-intensity workouts to improve endurance and burn fat.</p>
                    <Link to="/workouts" >Learn More</Link>
                    </div>
                </div>
                <div className={styles["programs-card"]}>
                    <img className={styles["programs-img"]} src="https://img.freepik.com/free-photo/male-break-dancer-water_155003-10275.jpg?t=st=1737477420~exp=1737481020~hmac=9d12ad1f83772dcb5204f08c6bf19f89a87f6f26738c3be3cd54173d0ec329cc&w=740" alt="" />
                    <div className={styles["programs-info"]} >
                    <strong className={styles["programs-title"]}> <p>Flexibility Flow</p></strong>
                    <p className={styles["programs-text"]}> Find balance and flexibility through sessions.</p>
                    <Link to="/workouts" >Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;
