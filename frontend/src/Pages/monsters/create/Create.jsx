import axios from "axios";
import { useForm } from "react-hook-form"
import "./Create.css"

function Create() {
    const { register, handleSubmit, formState } = useForm();

    async function onSubmit(data) {
        const dto = { ...data };
        await axios.post(`https://mern-demo-backend-lfjj.onrender.com/api/hellhounds`, dto);
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
                />
                <label htmlFor="age">Age:</label>
                <input
                    id="age"
                    type="number"
                    {...register("age")}
                    autoComplete="off"
                />
                <label htmlFor="hp">Health:</label>
                <input
                    id="hp"
                    type="number"
                    {...register("hp")}
                    autoComplete="off"
                />
                <label htmlFor="rarity">Rarity:</label>
                <input
                    id="rarity"
                    type="text"
                    {...register("rarity")}
                    autoComplete="off"
                />
                </div>
                <div className="secondCol">
                <label htmlFor="invisibility">Invisibility:</label>
                <input
                    id="invisibility"
                    type="text"
                    {...register("invisibility")}
                    autoComplete="off"
                />
                <label htmlFor="image">Image URL:</label>
                <input
                    id="image"
                    type="text"
                    {...register("image_url")}
                    autoComplete="off"
                />
                </div>
                <div className="thirdCol">
                <label htmlFor="strength">Power and Abilities:</label>
                <input
                    id="strength"
                    type="textarea"
                    {...register("strength")}
                    autoComplete="off"
                    className="large"
                />
                <label htmlFor="weakness">Weaknesses:</label>
                <input
                    id="weakness"
                    type="textarea"
                    {...register("weakness")}
                    autoComplete="off"
                    className="large"
                />
                </div>
                <input
                    type="submit"
                    value={"Submit"}
                />
            </form>
        </>
    );
}

export default Create;