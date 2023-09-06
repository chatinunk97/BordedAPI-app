# Learning How to use fetch Data From API

This project used a Free API : Borded API (https://www.boredapi.com/).

## Principle of Fetching Data

A promise is always the return value
so we have to handle it with a Asynchronous functions like
Promise.then() or Async Await

## What I've learned from debugging
Upon using try-catch and useEffect
If there's no state specified in the [] , the second parameter of useEffect,
and there's a setState function in that useEffect callback function
It will fetch again and again non stop
This is due to the setState function inside has updated the state -> rerender
which lead to useEffect to triggers
The solution was simply adding a state that you want to focus in [] at the back

