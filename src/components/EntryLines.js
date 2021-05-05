import React from "react";
import EntryLine from "./EntryLine";

function EntryLines({ entries, deleteEntry }) {
    return (
        <>
            {entries.map((entry) => (
                <EntryLine
                    key={entry.id}
                    {...entry}
                    deleteEntry={deleteEntry}
                />
            ))}
        </>
    );
}

export default EntryLines;
