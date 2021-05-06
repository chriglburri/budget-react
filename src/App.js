import { useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
    // eslint-disable-next-line no-unused-vars
    const [entries, setEntries] = useState(initialEntries);
    const deleteEntry = (id) => {
        const result = entries.filter((entry) => entry.id !== id);
        setEntries(result);
    };
    const addEntry = (description, value, isExpense) => {
        const result = entries.concat({
            id: entries.length + 1,
            description,
            value,
            isExpense,
        });
        setEntries(result);
    };
    return (
        <Container>
            <MainHeader title="Budget" />

            <DisplayBalance
                title="Your Balance:"
                value="2550.53"
                color="red"
                size="small"
            />

            <DisplayBalances />

            <MainHeader title="History" type="h3" />

            <EntryLines entries={entries} deleteEntry={deleteEntry} />

            <MainHeader title="Add new transaction" type="h3" />
            <NewEntryForm addEntry={addEntry} />
        </Container>
    );
}

export default App;

var initialEntries = [
    {
        id: 1,
        description: "Work income",
        value: "1000.00",
        isExpense: false,
    },
    {
        id: 2,
        description: "Water bill",
        value: "20.00",
        isExpense: true,
    },
    {
        id: 3,
        description: "Rent",
        value: "200.00",
        isExpense: true,
    },
];
