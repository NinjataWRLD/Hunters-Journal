import { useForm } from "react-hook-form";
import { EditMonster } from "../../../../requests/monsters";
import "../ReadMonsters.css"

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
            <form className={"edit-form"} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="age" className={"edit-info"}>
                    Age:
                    <input
                        type="number"
                        id="age"
                        {...register("age")}
                        style={{width: 100}}
                    />
                </label>
                <label htmlFor="name" className={"edit-info"}>
                    Name:
                    <input
                        type="text"
                        id="name"
                        {...register("name")}
                    />
                </label>
                <label htmlFor="hp" className={"edit-info"}>
                    HP:
                    <input
                        type="number"
                        id="hp"
                        {...register("hp")}
                        style={{width: 100}}
                    />
                </label>
                <label htmlFor="rarity" className={"edit-info"}>
                    Rarity:
                    <select id="rarity" {...register("rarity")}>
                        <option value="Common">Common</option>
                        <option value="Rare">Rare</option>
                        <option value="Epic">Epic</option>
                        <option value="Legendary">Legendary</option>
                    </select>
                </label>
                <label htmlFor="strength" className={"edit-info"}>
                    Strengths:
                    <textarea
                        id="strength"
                        {...register("strength")}
                    />
                </label>
                <label htmlFor="weakness" className={"edit-info"}>
                    Weaknesses:
                    <textarea
                        id="weakness"
                        {...register("weakness")}
                    />
                </label>
                <label htmlFor="invisibility" className={"edit-info"}>
                    Invisibility:
                    <select style={{"fontWeight": "bold", "width": 90}} id="invisibility" {...register("invisibility")}>
                        <option value={false}>Visible</option>
                        <option value={true}>Invisible</option>
                    </select>
                </label>
                <label htmlFor="image" className="url">
                    Image:
                    <input
                        type="text"
                        id="image"
                        {...register("image")}
                    />
                </label>
                    <input
                    className="submit"
                        id="submit"
                        type="submit"
                        value={"Submit"}
                    />
            </form>
        </>
    );
}

export default EditableMonster;