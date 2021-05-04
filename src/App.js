import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
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

            <EntryLine 
                description="expense" 
                value="321.12" 
                isExpense={true} />
            <EntryLine 
            description="income" 
            value="1234.12" />

            <MainHeader 
            title="Add new transaction" 
            type="h3" />
            <NewEntryForm />
        </Container>
    );
}

export default App;
