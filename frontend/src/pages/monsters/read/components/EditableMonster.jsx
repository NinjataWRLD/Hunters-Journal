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
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">
                    Name:
                    <input
                        id="name"
                        className={styles["inline-info"]}
                        {...register("name")}
                    />
                </label>
                <label htmlFor="age">
                    Age:
                    <input
                        id="age"
                        className={styles["inline-info"]}
                        {...register("age")}
                    />
                </label>
                <label htmlFor="hp">
                    HP:
                    <input
                        id="hp"
                        className={styles["inline-info"]}
                        {...register("hp")}
                    />
                </label>
                <label htmlFor="rarity">
                    Rarity:
                    <input
                        id="rarity"
                        className={styles["inline-info"]}
                        {...register("rarity")}
                    />
                </label>
                <label htmlFor="invisibility">
                    Invisibility:
                    <input
                        id="invisibility"
                        type="checkbox"
                        className={styles["inline-info"]}
                        {...register("invisibility")}
                    />
                </label>
                <label htmlFor="strength">
                    Strengths:
                    <input
                        id="strength"
                        className={styles["inline-info"]}
                        {...register("strength")}
                    />
                </label>
                <label htmlFor="weakness">
                    Weaknesses:
                    <input
                        id="weakness"
                        className={styles["inline-info"]}
                        {...register("weakness")}
                    />
                </label>
                <label htmlFor="image">
                    Image:
                    <input
                        id="image"
                        className={styles.image}
                        {...register("image")}
                    />
                </label>
                <label htmlFor="submit">
                    <input
                        id="submit"
                        type="submit"
                        value={"Submit"}
                    />
                </label>

            </form>
        </>
    );
}

export default EditableMonster;