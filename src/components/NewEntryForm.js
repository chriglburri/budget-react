import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm({ addEntry }) {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    icon="tags"
                    width={12}
                    label="Description"
                    placeholder="New thing"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Form.Input
                    icon="dollar"
                    iconPosition="left"
                    width={4}
                    label="Value"
                    placeholder="100.00"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </Form.Group>

            <ButtonSaveOrCancel
                addEntry={addEntry}
                description={description}
                value={value}
            />
        </Form>
    );
}

export default NewEntryForm;
