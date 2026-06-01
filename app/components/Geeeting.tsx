"use client";
import React, { useState } from "react";

const Greeting = () => {

    const [ name, setName ] = useState("");

    return (
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <h2 className="text-white font-bold text-xl mb-1">What is your name?</h2>
            <p className="text-slate-400 text-sm mb-5">State <code>name = {name}</code></p>
            <label className="block text-slate-400 text-sm mb-2" htmlFor="name-input">
                Type your name below
            </label>
            <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.name)}
            placeholder="i.e. John"
            className="bg-slate-500 text-white rounded-xl px-4 mb-5 border-slate-600"
            />
            <p className="text-lg">
                {
                    name ? (
                        <span className="text-white">
                            Hello {name} <span className="text-cyan-400 font-bold">Welcome to Campus</span>
                        </span>
                    ) : (<span className="text-slate-500 italic">Start typing to see the magic happening</span>)
                }
            </p>
        </div>
    )
}

export default Greeting;