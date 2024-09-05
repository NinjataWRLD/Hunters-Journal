import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { CreateMonster } from '@/requests/monsters';
import "./CreateMonster.css";

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
                <div className="form-row">
                    <label htmlFor="name" id="content-name">
                        Name:
                        <input
                            id="name"
                            type="text"
                            {...register("name", {
                                required: "Name is required",
                                maxLength: { value: 15, message: "Maximum 15 characters" }
                            })}
                            autoComplete="off"
                        />
                        {errors.name && <span className="error">{errors.name.message}</span>}
                    </label>
                    <label htmlFor="age" id="content-age">
                        Age:
                        <input
                            id="age"
                            type="number"
                            {...register("age",
                                {
                                    required: "Age is required",
                                    maxLength: { value: 9, message: "Invalid age" }
                                })}
                            autoComplete="off"
                        />
                        {errors.name && <span className="error">{errors.age.message}</span>}
                    </label>
                    <label htmlFor="hp" id="content-hp">
                        Health:
                        <input
                            id="hp"
                            type="number"
                            {...register("hp",
                                {
                                    required: "HP is required",
                                    maxLength: { value: 9, message: "Invalid HP" }
                                })}
                            autoComplete="off"
                        />
                        {errors.name && <span className="error">{errors.hp.message}</span>}
                    </label>
                </div>
                <div className="form-row second">
                    <div className="inner-row">
                        <label htmlFor="rarity" id="content-rarity">
                            Rarity:
                            <select id="rarity" {...register("rarity")}>
                                <option value="Common">Common</option>
                                <option value="Rare">Rare</option>
                                <option value="Epic">Epic</option>
                                <option value="Legendary">Legendary</option>
                            </select>
                        </label>
                        <label htmlFor="invisibility" id="content-invisibility">
                            Invisibility:
                            <select id="invisibility" {...register("invisibility")}>
                                <option value={false}>Visible</option>
                                <option value={true}>Invisible</option>
                            </select>
                        </label>
                    </div>
                    <label htmlFor="image" id="content-image">
                        Image URL:
                        <input
                            id="image"
                            type="text"
                            {...register("image")}
                            autoComplete="off"
                            className="url"
                            placeholder="(not required)"
                        />
                    </label>
                </div>
                <div className="form-row last">
                    <label htmlFor="strength" id="content-strength">
                        Power and Abilities:
                        <textarea
                            id="strength"
                            {...register("strength",
                                {
                                    required: "Strength is required",
                                    maxLength: { value: 100, message: "Description too long" }
                                })}
                            autoComplete="off"
                            className="large"
                        />
                        {errors.name && <span className="error">{errors.strength.message}</span>}
                    </label>
                    <input
                        type="submit"
                        value={"Create"}
                        className="submit"
                    />
                    <label htmlFor="weakness" id="content-weakness">
                        Weaknesses:
                        <textarea
                            id="weakness"
                            {...register("weakness",
                                {
                                    required: "Weaknesses are required",
                                    maxLength: { value: 100, message: "Description too long" }
                                })}
                            autoComplete="off"
                            className="large"
                        />
                        {errors.name && <span className="error">{errors.weakness.message}</span>}
                    </label>
                </div>
            </form>
        </>
    );
}

export default Create;