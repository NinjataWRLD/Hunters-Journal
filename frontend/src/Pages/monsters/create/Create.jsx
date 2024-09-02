import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import "./Create.css"

function Create() {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();

    async function onSubmit(data) {
        const dto = { ...data };
        await axios.post(`https://mern-demo-backend-lfjj.onrender.com/api/hellhounds`, dto);
        navigate("/browse");
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="firstCol">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        {...register("name")}
                        autoComplete="off"
                        maxLength={15}
                    />
                    <label htmlFor="age">Age:</label>
                    <input
                        id="age"
                        type="number"
                        {...register("age", { required: true, maxLength: 4 })}
                        maxLength={4}
                        autoComplete="off"
                    />
                    <label htmlFor="hp">Health:</label>
                    <input
                        id="hp"
                        type="number"
                        {...register("hp")}
                        autoComplete="off"
                        maxLength={4}
                    />
                    <label htmlFor="rarity">Rarity:</label>
                    <select id="rarity" {...register("rarity")}>
                        <option value="Common">Common</option>
                        <option value="Rare">Rare</option>
                        <option value="Epic">Epic</option>
                        <option value="Legendary">Legendary</option>
                    </select>
                </div>
                <div className="secondCol">
                    <label htmlFor="invisibility">Invisibility:</label>
                    <select id="invisibility" {...register("invisibility")}>
                        <option value={false}>Visible</option>
                        <option value={true}>Invisible</option>
                    </select>
                    <label htmlFor="image">Image URL:</label>
                    <input
                        id="image"
                        type="text"
                        {...register("image")}
                        autoComplete="off"
                        className="url"
                        placeholder="(not required)"
                    />
                </div>
                <div className="thirdCol">
                    <label htmlFor="strength">Power and Abilities:</label>
                    <textarea
                        id="strength"
                        {...register("strength")}
                        autoComplete="off"
                        className="large"
                    />
                    <label htmlFor="weakness">Weaknesses:</label>
                    <textarea
                        id="weakness"
                        {...register("weakness")}
                        autoComplete="off"
                        className="large"
                    />
                </div>
                <input
                    type="submit"
                    value={"Create"}
                />
            </form>
        </>
    );
}

export default Create;