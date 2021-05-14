import { useEffect, useState } from "react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm";
import { useSelector } from "react-redux";

function App() {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [total, setTotal] = useState(0);
    const { isOpen, id } = useSelector((state) => state.modals);
    const [entry, setEntry] = useState();
    const entries = useSelector((state) => state.entries);

    useEffect(() => {
        const index = entries.findIndex((entry) => entry.id === id);
        setEntry(entries[index]);
    }, [isOpen, id, entries]);

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

            <EntryLines entries={entries} />

            <MainHeader title="Add new transaction" type="h3" />

            <NewEntryForm />

            <ModalEdit isOpen={isOpen} {...entry} />
        </>
    );
}

export default App;
