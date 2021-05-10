import { useEffect, useState } from "react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm";
import{useSelector} from 'react-redux';

function App() {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState(0);
    const [isExpense, setIsExpense] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [entryId, setEntryId] = useState();
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [total, setTotal] = useState(0);

    const entriesRedux = useSelector((state) => state.entries);

    useEffect(() => {
        let totalIncome = 0;
        let totalExpense = 0;
        entriesRedux.map((e) => {
            if (e.isExpense) {
                totalExpense += Number(e.value);
            } else {
                totalIncome += Number(e.value);
            }
            return null;
        });
        setIncome(totalIncome);
        setExpenses(totalExpense);
        setTotal(income - expenses);
    }, [entriesRedux, expenses, income]);

    useEffect(() => {
        if (!isOpen && entryId) {
            const index = entriesRedux.findIndex((entry) => entry.id === entryId);
            const newEntries = [...entriesRedux];
            newEntries[index].description = description;
            newEntries[index].value = value;
            newEntries[index].isExpense = isExpense;
            // setEntries(newEntries);
            resetEntry();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const editEntry = (id) => {
        if (id) {
            const index = entriesRedux.findIndex((e) => e.id === id);
            const entry = entriesRedux[index];
            setEntryId(id);
            setDescription(entry.description);
            setValue(entry.value);
            setIsExpense(entry.isExpense);
            setIsOpen(true);
        }
    };

    const addEntry = () => {
        const result = entriesRedux.concat({
            id: entriesRedux.length + 1,
            description,
            value,
            isExpense,
        });
        // setEntries(result);
        resetEntry();
    };

    const resetEntry = () => {
        setDescription("");
        setValue(0);
        setIsExpense(true);
    };

    return (
        <>
            <MainHeader title="Budget" />

            <DisplayBalance
                title="Your Balance:"
                value={total}
                color="red"
                size="small"
            />

            <DisplayBalances income={income} expenses={expenses} />

            <MainHeader title="History" type="h3" />

            <EntryLines
                entries={entriesRedux}
                editEntry={editEntry}
            />

            <MainHeader title="Add new transaction" type="h3" />

            <NewEntryForm
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />

            <ModalEdit
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
        </>
    );
}

export default App;
