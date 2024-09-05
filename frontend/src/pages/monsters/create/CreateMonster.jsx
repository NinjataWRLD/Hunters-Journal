import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { CreateMonster } from '@/requests/monsters';
import styles from "./CreateMonster.module.css";

function Create() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    async function onSubmit(data) {
        const dto = { ...data };

        try {
            await CreateMonster(dto);
            navigate("/monsters");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles["form-row"]}>
                    <label htmlFor={styles.name} id={styles["content-name"]} className={styles.label}>
                        Name:
                        <input
                            id={styles.name}
                            type="text"
                            {...register("name", {
                                required: "Name is required",
                                maxLength: { value: 15, message: "Maximum 15 characters" }
                            })}
                            autoComplete="off"
                        />
                        {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                    </label>
                    <label htmlFor={styles.age} id={styles["content-age"]} className={styles.label}>
                        Age:
                        <input
                            id={styles.age}
                            type="number"
                            {...register("age",
                                {
                                    required: "Age is required",
                                    maxLength: { value: 9, message: "Invalid age" }
                                })}
                            autoComplete="off"
                        />
                        {errors.name && <span className={styles.error}>{errors.age.message}</span>}
                    </label>
                    <label htmlFor={styles.hp} id={styles["content-hp"]} className={styles.label}>
                        Health:
                        <input
                            id={styles.hp}
                            type="number"
                            {...register("hp",
                                {
                                    required: "HP is required",
                                    maxLength: { value: 9, message: "Invalid HP" }
                                })}
                            autoComplete="off"
                        />
                        {errors.name && <span className={styles.error}>{errors.hp.message}</span>}
                    </label>
                </div>
                <div className={styles["form-row"]}>
                    <div className={styles["inner-row"]}>
                        <label htmlFor={styles.rarity} id={styles["content-rarity"]}>
                            Rarity:
                            <select id={styles.rarity} {...register("rarity")}>
                                <option value="Common">Common</option>
                                <option value="Rare">Rare</option>
                                <option value="Epic">Epic</option>
                                <option value="Legendary">Legendary</option>
                            </select>
                        </label>
                        <label htmlFor={styles.invisibility} id={styles["content-invisibility"]} className={styles.label}>
                            Invisibility:
                            <select id={styles.invisibility} {...register("invisibility")}>
                                <option value={false}>Visible</option>
                                <option value={true}>Invisible</option>
                            </select>
                        </label>
                    </div>
                    <label htmlFor={styles.image} id={styles["content-image"]} className={styles.label}>
                        Image URL:
                        <input
                            id={styles.image}
                            type="text"
                            {...register("image")}
                            autoComplete="off"
                            className={styles.url}
                            placeholder="(not required)"
                        />
                    </label>
                </div>
                <div className={styles["form-row"]}>
                    <label htmlFor={styles.strength} id={styles["content-strength"]} className={styles.label}>
                        Power and Abilities:
                        <textarea
                            id={styles.strength}
                            {...register("strength",
                                {
                                    required: "Strength is required",
                                    maxLength: { value: 100, message: "Description too long" }
                                })}
                            autoComplete="off"
                            className={styles.large}
                        />
                        {errors.name && <span className={styles.error}>{errors.strength.message}</span>}
                    </label>
                    <input
                        type="submit"
                        value={"Create"}
                        className={styles.submit}
                    />
                    <label htmlFor={styles.weakness} id={styles["content-weakness"]} className={styles.label}>
                        Weaknesses:
                        <textarea
                            id={styles.weakness}
                            {...register("weakness",
                                {
                                    required: "Weaknesses are required",
                                    maxLength: { value: 100, message: "Description too long" }
                                })}
                            autoComplete="off"
                            className={styles.large}
                        />
                        {errors.name && <span className={styles.error}>{errors.weakness.message}</span>}
                    </label>
                </div>
            </form>
        </>
    );
}

export default Create;