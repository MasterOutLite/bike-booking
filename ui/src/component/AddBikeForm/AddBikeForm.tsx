import React, {useState} from 'react';
import style from './AddBikeForm.module.scss';
import {TextField, TextFieldArea} from "../TextField";
import Button from "../Button/Button";
import {useForm} from "react-hook-form";
import {IBicycleForm} from "../../type";
import {postBicycle} from "../../api";
import useBicycleStore from "../../store/useBicycleStore";

function AddBikeForm() {

    const {register, handleSubmit, control} = useForm<IBicycleForm>()
    const {addBicycle} = useBicycleStore();
    const [exists, setExists] = useState<boolean>(false)

    const onSubmit = async (data: IBicycleForm) => {
        //alert(JSON.stringify(data));
        try {
            const res = await postBicycle(data);
            if (!res.exists) {
                addBicycle(res);
                control._reset();
                setExists(false);
            } else {
                setExists(true);
            }
            console.log(res)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <form className={style.root} onSubmit={handleSubmit(onSubmit)}>
            <TextField form={{register, label: 'name', options: {minLength: 5, required: true}}}
                       placeholder={'Name'}/>
            <TextField form={{register, label: 'type', options: {minLength: 5, required: true}}}
                       placeholder={'Type'}/>

            <TextField form={{register, label: 'color', options: {minLength: 5, required: true}}}
                       placeholder={'Color'}/>
            <TextField
                form={{register, label: 'wheelSize', options: {minLength: 5, valueAsNumber: true, required: true}}}
                type={'number'}
                placeholder={'Wheel size'}/>

            <TextField form={{register, label: 'price', options: {minLength: 5, valueAsNumber: true, required: true}}}
                       type={'number'}
                       placeholder={'Price'}/>
            <TextField form={{register, label: 'id', options: {minLength: 5, required: true}}}
                       invalid={exists}
                       placeholder={'ID (slug): ХХХХХХХХХХХХХ'}/>

            <TextFieldArea form={{register, label: 'description', options: {minLength: 5, required: true}}}
                           className={style.description}
                           placeholder={'Description'}/>

            <Button type={"submit"}>SAVE</Button>
            <Button type={"reset"}>CLEAR</Button>
        </form>
    );
}

export default AddBikeForm;
