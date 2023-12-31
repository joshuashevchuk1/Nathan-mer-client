import React, { useState } from "react";
import { useNavigate } from "react-router";
export default function Create() {
    const [form, setForm] = useState({
        parryMame: ""
    });
    const navigate = useNavigate();
    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerry = { ...form };
        await fetch("http://localhost:5000/perry/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerry),
        })
            .catch(error => {
                window.alert(error);
                return;
            });
        setForm({perryName: ""});
        navigate("/");
    }
    // This following section will display the form that takes the input from the user.
    return (
        <div>
            <h3>Create New Record</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">PerryName</label>
                    <input
                        type="text"
                        className="form-control"
                        id="perryName"
                        value={form.perryName}
                        onChange={(e) => updateForm({ perryName: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create person"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}