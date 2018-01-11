import React from "react";

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newScheduleItem = () => {
    const statusChance = Math.random() * 3;
    return {
        Sunday: '12pm - 3pm'
    };
};

export function makeData(len = 50) {
    return range(len).map(d => {
        return {
            ...newScheduleItem(),
            children: range(10).map(newScheduleItem)
        };
    });
}