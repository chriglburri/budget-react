import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

function NewEntryForm({
    addEntry,
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense,
}) {
    return (
        <Form unstackable>
            <EntryForm
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />

            <ButtonSaveOrCancel
                addEntry={addEntry}
                description={addEntry.description}
                value={addEntry.value}
                isExpense={isExpense}
            />
        </Form>
    );
}

export default NewEntryForm;
