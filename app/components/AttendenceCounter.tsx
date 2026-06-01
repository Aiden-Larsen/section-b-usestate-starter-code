"use client";
import React, { useState } from "react";

const AttendenceCounter = () => {

    const [ count, setCount ] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleRemove = () => {
        if ( count > 0 ) {
            setCount(count - 1);
        }
    }

    return (
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-600">
            <h2 className="text-slate-300 text-lg mb-6">
                Class Attendence Today
            </h2>
            <p className="text-slate-400 text-sm mb-5">
                State: <code className="text-cyan-400">count = {Number(count)}</code>
            </p>
            <p className="text-slate-300 text-lg mb-6">
                You have attended {" "}
                <span className="text-cyan-400 font-bold text-4xl mx-5">{count}</span>
                {count == 1 ? "class" : "classes"}
            </p>
            <button 
            onClick={handleRemove}
            disabled={count === 0} 
            className="flex-1 bg-slate-700 text-white font-bold text-2xl py-3 px-10 rounded-xl hover:bg-cyan-300 disabled:opacity-30">
                -
            </button>
            <button 
            onClick={handleAdd}
            className="flex-1 bg-cyan-400 text-slate-900 font-bold text-2xl py-3 px-10 rounded-xl hover:bg-cyan-300 ml-4">
                +
            </button>
        </div>
    )
}

export default AttendenceCounter