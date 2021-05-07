import { useEffect, useState } from "react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm";
import { createStore } from "redux";

function App() {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState(0);
    const [isExpense, setIsExpense] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [entryId, setEntryId] = useState();
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [total, setTotal] = useState(0);
    const [entries, setEntries] = useState(initialEntries);

    useEffect(() => {
        let totalIncome = 0;
        let totalExpense = 0;
        entries.map((e) => {
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
    }, [entries, expenses, income]);

    useEffect(() => {
        if (!isOpen && entryId) {
            const index = entries.findIndex((entry) => entry.id === entryId);
            const newEntries = [...entries];
            newEntries[index].description = description;
            newEntries[index].value = value;
            newEntries[index].isExpense = isExpense;
            setEntries(newEntries);
            resetEntry();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const store = createStore((state = initialEntries, action) => {
        let newEntries;
        switch (action.type) {
            case 'ADD_ENTRY':
                newEntries = state.concat({...action.payload});
                return newEntries;

            case 'REMOVE_ENTRY':
                newEntries = state.filter(e=>e.id!==action.payload.id);
                return newEntries;

            default:
                return state;
        }
    });
    store.subscribe(()=>{
        console.log(store.getState());
    })
    const payload = {
        id: 4,
        description: "hello",
        value: 100,
        isExpense: false,
    };
    const addEntryRedux  = (payload)=>{
        return { type: "ADD_ENTRY", payload };
    };
    const removeEntryRedux = (id)=>{
        return {type:'REMOVE_ENTRY', payload:{id}};
    };

    store.dispatch(addEntryRedux(payload));
    store.dispatch(removeEntryRedux(1));

    const editEntry = (id) => {
        if (id) {
            const index = entries.findIndex((e) => e.id === id);
            const entry = entries[index];
            setEntryId(id);
            setDescription(entry.description);
            setValue(entry.value);
            setIsExpense(entry.isExpense);
            setIsOpen(true);
        }
    };

    const deleteEntry = (id) => {
        const result = entries.filter((entry) => entry.id !== id);
        setEntries(result);
    };

    const addEntry = () => {
        const result = entries.concat({
            id: entries.length + 1,
            description,
            value,
            isExpense,
        });
        setEntries(result);
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
                entries={entries}
                deleteEntry={deleteEntry}
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

var initialEntries = [
    {
        id: 1,
        description: "Work income",
        value: 1000.0,
        isExpense: false,
    },
    {
        id: 2,
        description: "Water bill",
        value: 20.0,
        isExpense: true,
    },
    {
        id: 3,
        description: "Rent",
        value: 200.0,
        isExpense: true,
    },
];
