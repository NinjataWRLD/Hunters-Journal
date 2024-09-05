import { useForm } from "react-hook-form";
import { EditMonster } from "../../../../requests/monsters";
import styles from "../ReadMonsters.module.css";

function EditableMonster({ monster, setIsEditable, setMonster }) {
    const { register, handleSubmit } = useForm({ defaultValues: monster });

    async function onSubmit(data) {
        try {
            await EditMonster(monster._id, data);
            setIsEditable(false);
            setMonster(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <form className={styles["edit-form"]} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles["form-row"]}>
                    <label htmlFor={styles.name} className={styles["edit-info"]}>
                        Name:
                        <input
                            type="text"
                            id={styles.name}
                            {...register("name")}
                        />
                    </label>
                    <label htmlFor={styles.age} className={styles["edit-info"]}>
                        Age:
                        <input
                            type="number"
                            id={styles.age}
                            {...register("age")}
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
                    <label htmlFor={styles.invisibility} className={styles["edit-info"]}>
                        Invisibility:
                        <select style={{ "fontWeight": "bold", "width": 90 }} id={styles.invisibility} {...register("invisibility")}>
                            <option value={false}>Visible</option>
                            <option value={true}>Invisible</option>
                        </select>
                    </label>
                </div>
                <div className={styles["form-row"]}>
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
                        Image:
                        <input
                            type="text"
                            id={styles.image}
                            {...register("image")}
                        />
                    </label>
                </div>
                <input
                    className={styles.submit}
                    type="submit"
                    value={"Apply"}
                />
            </form>
        </>
    );
}

export default EditableMonster;