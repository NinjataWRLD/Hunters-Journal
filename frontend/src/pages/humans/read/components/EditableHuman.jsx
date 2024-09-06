import { useForm } from "react-hook-form";
import { EditHuman } from "../../../../requests/humans";
import styles from "../ReadHumans.module.css";

function EditableHuman({ human, setIsEditable, setHuman }) {
    const { register, handleSubmit } = useForm({ defaultValues: human });

    async function onSubmit(data) {
        try {
            await EditHuman(human._id, data);
            setIsEditable(false);
            setHuman(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <form className={styles["edit-form"]} onSubmit={handleSubmit(onSubmit)}>
                <div className={`${styles["form-row"]} ${styles["first"]}`}>
                    <label htmlFor={styles.name} className={styles["edit-info"]}>
                        Name:
                        <input
                            type="text"
                            id={styles.name}
                            {...register("name")}
                        />
                    </label>
                    <label htmlFor={styles.damage} className={styles["edit-info"]}>
                        Damage:
                        <input
                            type="number"
                            id={styles.damage}
                            {...register("damage")}
                            style={{ width: 100 }}
                        />
                    </label>
                </div>
                <div className={styles["form-row"]}>
                    <label htmlFor={styles.hp} className={styles["edit-info"]}>
                        HP:
                        <input
                            type="number"
                            id={styles.hp}
                            {...register("hp")}
                            style={{ width: 100 }}
                        />
                    </label>
                    <label htmlFor={styles.rarity} className={styles["edit-info"]}>
                        Rarity:
                        <select id={styles.rarity} {...register("rarity")}>
                            <option value="Common">Common</option>
                            <option value="Rare">Rare</option>
                            <option value="Epic">Epic</option>
                            <option value="Legendary">Legendary</option>
                        </select>
                    </label>
                </div>
                <div className={`${styles["form-row"]} ${styles.last}`}>
                    <label htmlFor={styles.strength} className={styles["edit-info"]}>
                        Strengths:
                        <textarea
                            id={styles.strength}
                            {...register("strength")}
                        />
                    </label>
                    <label htmlFor={styles.weakness} className={styles["edit-info"]}>
                        Weaknesses:
                        <textarea
                            id={styles.weakness}
                            {...register("weakness")}
                        />
                    </label>
                </div>
                <div className={styles["form-row"]}>
                    <label htmlFor={styles.image} className={styles.url}>
                        Image URL:
                        <input
                            type="text"
                            id={styles.image}
                            {...register("image")}
                        />
                    </label>
                </div>
                <div className={styles.btn}>
                    <button onClick={() => setIsEditable(false)} className={styles["edit-2"]}>Go back</button>
                    <div className={styles["apply-div"]}>
                        <input
                            className={styles.apply}
                            type="submit"
                            value={"Apply"}
                        />
                    </div>
                </div>
            </form>
        </>
    );
}

export default EditableHuman;