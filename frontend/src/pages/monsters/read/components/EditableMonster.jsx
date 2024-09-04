import { useForm } from "react-hook-form";
import { EditMonster } from "../../../../requests/monsters";
import styles from "../ReadMonsters.module.css"

function EditableMonster({ monster }) {
    const { register, handleSubmit } = useForm({ defaultValues: monster });

    async function onSubmit(data) {
        try {
            await EditMonster(monster._id, data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <form className={styles["edit-form"]} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="age" className={styles["edit-info"]}>
                    Age:
                    <input
                        type="number"
                        id="age"
                        {...register("age")}
                        style={{width: 100}}
                    />
                </label>
                <label htmlFor="name" className={styles["edit-info"]}>
                    Name:
                    <input
                        type="text"
                        id="name"
                        {...register("name")}
                    />
                </label>
                <label htmlFor="hp" className={styles["edit-info"]}>
                    HP:
                    <input
                        type="number"
                        id="hp"
                        {...register("hp")}
                        style={{width: 100}}
                    />
                </label>
                <label htmlFor="rarity" className={styles["edit-info"]}>
                    Rarity:
                    <select id="rarity" {...register("rarity")}>
                        <option value="Common">Common</option>
                        <option value="Rare">Rare</option>
                        <option value="Epic">Epic</option>
                        <option value="Legendary">Legendary</option>
                    </select>
                </label>
                <label htmlFor="strength" className={styles["edit-info"]}>
                    Strengths:
                    <textarea
                        id="strength"
                        {...register("strength")}
                    />
                </label>
                <label htmlFor="weakness" className={styles["edit-info"]}>
                    Weaknesses:
                    <textarea
                        id="weakness"
                        {...register("weakness")}
                    />
                </label>
                <label htmlFor="invisibility" className={styles["edit-info"]}>
                    Invisibility:
                    <select style={{"fontWeight": "bold", "width": 90}} id="invisibility" {...register("invisibility")}>
                        <option value={false}>Visible</option>
                        <option value={true}>Invisible</option>
                    </select>
                </label>
                <label htmlFor="image" className={styles.url}>
                    Image:
                    <input
                        type="text"
                        id="image"
                        {...register("image")}
                    />
                </label>
                    <input
                    className={styles.submit}
                        id="submit"
                        type="submit"
                        value={"Submit"}
                    />
            </form>
        </>
    );
}

export default EditableMonster;